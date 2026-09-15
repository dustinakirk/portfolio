// Remove gitignored files (local-only videos, .DS_Store, etc.) from the
// prebuilt Vercel output so `npm run deploy` ships exactly what git tracks.
import { execSync } from 'node:child_process';
import { rmSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const OUT = join('.vercel', 'output', 'static');
const ignored = execSync('git ls-files -io --exclude-standard public', { encoding: 'utf8' })
  .split('\n')
  .filter(Boolean)
  .map((p) => p.replace(/^public\//, ''));

let removed = 0;
for (const rel of ignored) {
  const target = join(OUT, rel);
  if (existsSync(target)) {
    rmSync(target, { force: true });
    removed++;
  }
}
console.log(`prune-ignored: removed ${removed} gitignored file(s) from ${OUT}`);
