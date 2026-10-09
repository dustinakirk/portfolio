#!/usr/bin/env node
// Manage named, expiring passwords for the protected projects.
//
//   npm run access -- add "Acme Corp" [--days 14 | --until 2026-10-01] [--password "..."]
//   npm run access -- list
//   npm run access -- extend <id|label> --days 14 | --until 2026-10-01
//   npm run access -- revoke <id|label>
//   npm run access -- restore <id|label>
//   npm run access -- remove <id|label>
//
// Credentials are stored hashed in protected/access.json (gitignored) and
// bundled into the Vercel Functions on the next `npm run deploy`.
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { randomBytes, randomInt } from 'node:crypto';
import { ACCESS_FILE, hashPassword, credentialStatus } from '../api/_lib/access.js';

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
    });
    save(data);
    console.log(`\n  Created "${label}" (id: ${id})`);
    console.log(`  Password:  ${password}`);
    console.log(`  Expires:   ${fmtDate(expiresAt)}`);
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
    }));
    const w = (k) => Math.max(k.length, ...rows.map((r) => String(r[k]).length));
    const cols = ['status', 'id', 'label', 'created', 'expires'];
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

  Then: npm run deploy
`);
}
