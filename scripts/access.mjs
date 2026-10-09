#!/usr/bin/env node
// Manage named, expiring passwords for the protected projects.
//
//   npm run access -- add "Acme Corp" [--days 14 | --until 2026-10-01] [--password "..."] [--track]
//   npm run access -- list
//   npm run access -- extend <id|label> --days 14 | --until 2026-10-01
//   npm run access -- revoke <id|label>
//   npm run access -- restore <id|label>
//   npm run access -- remove <id|label>
//   npm run access -- track <id|label>       log visits made with this password
//   npm run access -- untrack <id|label>
//   npm run access -- stats [id|label]        report visits for tracked passwords
//
// Credentials are stored hashed in protected/access.json (gitignored) and
// bundled into the Vercel Functions on the next `npm run deploy`. Visit logs
// for tracked passwords live in the private analytics Blob store; `stats`
// reads them with ANALYTICS_READ_WRITE_TOKEN from .env.
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { randomBytes, randomInt } from 'node:crypto';
import { list as listBlobs, get as getBlob } from '@vercel/blob';
import { ACCESS_FILE, hashPassword, credentialStatus } from '../api/_lib/access.js';
import { ACTIVITY_PREFIX } from '../api/_lib/activity.js';

try { process.loadEnvFile(); } catch { /* no .env */ }

const args = process.argv.slice(2);
const command = args.shift();
const opts = {};
const positional = [];
for (let i = 0; i < args.length; i++) {
  const a = args[i];
  if (a.startsWith('--')) {
    const key = a.slice(2);
    const next = args[i + 1];
    if (next !== undefined && !next.startsWith('--')) { opts[key] = next; i++; }
    else opts[key] = true;
  } else positional.push(a);
}

function load() {
  if (!existsSync(ACCESS_FILE)) return { credentials: [] };
  const data = JSON.parse(readFileSync(ACCESS_FILE, 'utf8'));
  return { credentials: Array.isArray(data.credentials) ? data.credentials : [] };
}
function save(data) {
  writeFileSync(ACCESS_FILE, JSON.stringify(data, null, 2) + '\n');
}
function slug(label) {
  return label.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 32) || 'access';
}
function uniqueId(data, base) {
  let id = base, n = 2;
  while (data.credentials.some((c) => c.id === id)) id = `${base}-${n++}`;
  return id;
}
function find(data, ref) {
  const hit = data.credentials.find((c) => c.id === ref) ||
    data.credentials.find((c) => c.label.toLowerCase() === String(ref).toLowerCase());
  if (!hit) fail(`No credential matches "${ref}". Run: npm run access -- list`);
  return hit;
}
function fail(msg) { console.error(`\n  ${msg}\n`); process.exit(1); }

const WORDS = ['amber','birch','cedar','delta','ember','falcon','garnet','harbor','indigo','juniper','kestrel','lantern','meadow','nimbus','orchid','pebble','quartz','raven','summit','tundra','velvet','willow','yonder','zephyr','aspen','beacon','cobalt','drift','echo','forge','glacier','hollow','iris','jade','kite','lumen','marble','nectar','onyx','prairie'];
function generatePassword() {
  const pick = () => WORDS[randomInt(WORDS.length)];
  return `${pick()}-${pick()}-${pick()}-${randomInt(10, 99)}`;
}
function parseExpiry() {
  if (opts.until) {
    const t = Date.parse(opts.until.length <= 10 ? `${opts.until}T23:59:59` : opts.until);
    if (!Number.isFinite(t)) fail(`Could not parse --until "${opts.until}" (use YYYY-MM-DD).`);
    return new Date(t).toISOString();
  }
  if (opts.days) {
    const d = Number(opts.days);
    if (!Number.isFinite(d) || d <= 0) fail(`--days must be a positive number.`);
    return new Date(Date.now() + d * 86400000).toISOString();
  }
  return undefined;
}
function fmtDate(iso) {
  if (!iso) return 'never';
  return new Date(iso).toLocaleString('en-US', { dateStyle: 'medium', timeStyle: 'short' });
}
function remind() {
  console.log('  Changes take effect after the next deploy:  npm run deploy\n');
}

const data = load();

switch (command) {
  case 'add': {
    const label = positional.join(' ').trim();
    if (!label) fail('Usage: npm run access -- add "Label" [--days N | --until YYYY-MM-DD] [--password "..."]');
    const expiresAt = parseExpiry() ?? new Date(Date.now() + 14 * 86400000).toISOString();
    const password = typeof opts.password === 'string' ? opts.password : generatePassword();
    if (password.length < 8) fail('Password must be at least 8 characters.');
    const id = uniqueId(data, slug(label));
    data.credentials.push({
      id,
      label,
      hash: hashPassword(password, randomBytes(16).toString('hex')),
      createdAt: new Date().toISOString(),
      expiresAt,
      revokedAt: null,
      ...(opts.track ? { track: true } : {}),
    });
    save(data);
    console.log(`\n  Created "${label}" (id: ${id})`);
    console.log(`  Password:  ${password}`);
    console.log(`  Expires:   ${fmtDate(expiresAt)}`);
    if (opts.track) console.log(`  Tracking:  on. Report with: npm run access -- stats ${id}`);
    console.log(`\n  The password is not stored anywhere in plain text; copy it now.\n`);
    remind();
    break;
  }
  case 'list': {
    if (!data.credentials.length) { console.log('\n  No credentials yet. Add one with: npm run access -- add "Label" --days 14\n'); break; }
    console.log('');
    const rows = data.credentials.map((c) => ({
      status: credentialStatus(c),
      id: c.id,
      label: c.label,
      created: fmtDate(c.createdAt),
      expires: fmtDate(c.expiresAt),
      tracked: c.track ? 'yes' : '',
    }));
    const w = (k) => Math.max(k.length, ...rows.map((r) => String(r[k]).length));
    const cols = ['status', 'id', 'label', 'created', 'expires', 'tracked'];
    console.log('  ' + cols.map((k) => k.toUpperCase().padEnd(w(k))).join('  '));
    for (const r of rows) console.log('  ' + cols.map((k) => String(r[k]).padEnd(w(k))).join('  '));
    if (process.env.PROTECTED_PASSWORD) console.log('\n  Plus the master password from PROTECTED_PASSWORD (never expires).');
    console.log('');
    break;
  }
  case 'extend': {
    const cred = find(data, positional[0]);
    const expiresAt = parseExpiry();
    if (!expiresAt) fail('Usage: npm run access -- extend <id|label> --days N | --until YYYY-MM-DD');
    cred.expiresAt = expiresAt;
    cred.revokedAt = null;
    save(data);
    console.log(`\n  "${cred.label}" now expires ${fmtDate(expiresAt)}.\n`);
    remind();
    break;
  }
  case 'revoke': {
    const cred = find(data, positional[0]);
    cred.revokedAt = new Date().toISOString();
    save(data);
    console.log(`\n  Revoked "${cred.label}". Existing sessions stop working after deploy.\n`);
    remind();
    break;
  }
  case 'restore': {
    const cred = find(data, positional[0]);
    cred.revokedAt = null;
    save(data);
    console.log(`\n  Restored "${cred.label}" (${credentialStatus(cred)}).\n`);
    remind();
    break;
  }
  case 'remove': {
    const cred = find(data, positional[0]);
    data.credentials = data.credentials.filter((c) => c !== cred);
    save(data);
    console.log(`\n  Removed "${cred.label}".\n`);
    remind();
    break;
  }
  case 'track':
  case 'untrack': {
    const cred = find(data, positional[0]);
    if (command === 'track') cred.track = true;
    else delete cred.track;
    save(data);
    console.log(`\n  Tracking ${command === 'track' ? 'on' : 'off'} for "${cred.label}".\n`);
    remind();
    break;
  }
  case 'stats': {
    const targets = positional.length
      ? [find(data, positional.join(' '))]
      : data.credentials.filter((c) => c.track);
    if (!targets.length) fail('No tracked passwords. Turn tracking on with: npm run access -- track <id>');
    for (const cred of targets) await printStats(cred);
    break;
  }
  default:
    console.log(`
  Manage passwords for the protected projects.

    npm run access -- add "Acme Corp" --days 14        create a password (printed once)
    npm run access -- add "Acme Corp" --until 2026-10-01
    npm run access -- list
    npm run access -- extend acme-corp --days 7
    npm run access -- revoke acme-corp
    npm run access -- restore acme-corp
    npm run access -- remove acme-corp
    npm run access -- add "Acme Corp" --days 14 --track   also log their visits
    npm run access -- track acme-corp | untrack acme-corp
    npm run access -- stats [acme-corp]                   pages, time, videos, clicks

  Then: npm run deploy
`);
}

// ---- stats ---------------------------------------------------------------

function fmtDuration(ms) {
  const sec = Math.round(ms / 1000);
  if (sec < 60) return `${sec}s`;
  const m = Math.floor(sec / 60);
  if (m < 60) return `${m}m ${String(sec % 60).padStart(2, '0')}s`;
  return `${Math.floor(m / 60)}h ${String(m % 60).padStart(2, '0')}m`;
}
function fmtClock(sec) {
  const s = Math.round(sec);
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
}
function fmtTime(iso) {
  return new Date(iso).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
}
function pageName(view) {
  const title = (view.title || '').replace(/\s*\|\s*Dustin Kirk\s*$/, '').trim();
  return title && title !== view.path ? `${title} (${view.path})` : view.path;
}
function fileName(path) {
  return path.split('/').pop();
}

async function readBlobJson(pathname, token) {
  const res = await getBlob(pathname, { access: 'private', token, useCache: false });
  if (!res || res.statusCode !== 200) return null;
  try {
    return JSON.parse(await new Response(res.stream).text());
  } catch {
    return null;
  }
}

async function loadVisits(credId, token) {
  const blobs = [];
  let cursor;
  do {
    const page = await listBlobs({ prefix: `${ACTIVITY_PREFIX}/${credId}/`, cursor, limit: 1000, token });
    blobs.push(...page.blobs);
    cursor = page.hasMore ? page.cursor : undefined;
  } while (cursor);

  const visits = new Map();
  for (let i = 0; i < blobs.length; i += 8) {
    const batch = blobs.slice(i, i + 8);
    const records = await Promise.all(batch.map((b) => readBlobJson(b.pathname, token)));
    batch.forEach((b, j) => {
      const record = records[j];
      if (!record) return;
      const [, , visitId, file] = b.pathname.split('/');
      const visit = visits.get(visitId) || { visitId, info: null, views: [] };
      if (file === 'visit.json') visit.info = record;
      else visit.views.push(record);
      visits.set(visitId, visit);
    });
  }
  const sorted = [...visits.values()].sort((a, b) => a.visitId.localeCompare(b.visitId));
  for (const v of sorted) v.views.sort((a, b) => Date.parse(a.startedAt) - Date.parse(b.startedAt));
  return sorted;
}

async function printStats(cred) {
  const token = process.env.ANALYTICS_READ_WRITE_TOKEN;
  if (!token) fail('ANALYTICS_READ_WRITE_TOKEN is not set. Add it to .env (vercel env pull) and try again.');
  const visits = await loadVisits(cred.id, token);
  const views = visits.flatMap((v) => v.views);
  const active = views.reduce((sum, v) => sum + v.activeMs, 0);

  console.log(`\n  ${cred.label} (${cred.id}) · ${credentialStatus(cred)}, expires ${fmtDate(cred.expiresAt)}`);
  if (!cred.track) console.log('  Tracking is off for this password.');
  console.log(`  ${visits.length} visit${visits.length === 1 ? '' : 's'} · ${views.length} page view${views.length === 1 ? '' : 's'} · ${fmtDuration(active)} active`);
  if (!visits.length) { console.log(''); return; }

  visits.forEach((visit, n) => {
    const info = visit.info || {};
    const started = info.startedAt || visit.views[0]?.startedAt;
    const place = [info.city, info.region, info.country].filter(Boolean).join(', ') || 'unknown location';
    const agent = info.browser ? `${info.browser} on ${info.os} (${info.device})` : 'unknown browser';
    const visitActive = visit.views.reduce((sum, v) => sum + v.activeMs, 0);
    console.log(`\n  Visit ${n + 1} · ${started ? fmtDate(started) : 'unknown time'} · ${place} · ${agent}`);
    console.log(`  ${info.landing ? `Unlocked on ${info.landing} · ` : ''}${visit.views.length} page${visit.views.length === 1 ? '' : 's'} · ${fmtDuration(visitActive)} active`);
    for (const view of visit.views) {
      console.log(`    ${fmtTime(view.startedAt).padStart(8)}  ${fmtDuration(view.activeMs).padStart(7)}  ${String(view.scroll).padStart(3)}% scrolled  ${pageName(view)}`);
      for (const [src, vid] of Object.entries(view.videos || {})) {
        const of = vid.duration ? ` of ${fmtClock(vid.duration)}` : '';
        console.log(`${' '.repeat(39)}video ${fileName(src)}: watched ${fmtClock(vid.watched)}${of}, reached ${fmtClock(vid.furthest)}`);
      }
      for (const click of view.clicks || []) {
        console.log(`${' '.repeat(39)}clicked "${click.text || click.href}" → ${click.href}`);
      }
    }
  });

  const pages = new Map();
  for (const view of views) {
    const p = pages.get(view.path) || { name: pageName(view), views: 0, active: 0, scroll: 0 };
    p.views += 1;
    p.active += view.activeMs;
    p.scroll = Math.max(p.scroll, view.scroll);
    pages.set(view.path, p);
  }
  console.log('\n  All visits, by time on page');
  console.log('    VIEWS   ACTIVE  MAX SCROLL  PAGE');
  for (const p of [...pages.values()].sort((a, b) => b.active - a.active)) {
    console.log(`    ${String(p.views).padStart(5)}  ${fmtDuration(p.active).padStart(7)}  ${`${p.scroll}%`.padStart(10)}  ${p.name}`);
  }
  console.log('');
}
