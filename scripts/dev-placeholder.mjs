// Minimal frontend stand-in for `vercel dev` (npm run dev:api).
// In development the real UI is served by Vite on port 5005, which proxies
// /api requests to vercel dev on port 3005. vercel dev still needs a dev
// command for non-API paths, so this answers them with a pointer.
import { createServer } from 'node:http';

const port = Number(process.env.PORT) || 3006;
createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end(`API-only dev server. Open the site at http://localhost:5005 (npm run dev).\nRequested: ${req.url}\n`);
}).listen(port, () => console.log(`dev-placeholder listening on ${port}`));
