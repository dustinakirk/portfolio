# Protected projects

Case studies in this folder are only served to visitors who have entered the
portfolio password. Nothing here is copied into `public/` or the client bundle.

- `content/<id>.md` — one Markdown file per project. Front matter keys:
  `title`, `subtitle`, `category`, `tags: [a, b]`, `image` (cover file in the
  media folder), `order` (sort key, lower first), `draft: true` to hide.
- `media/<id>/` — images and video for that project. Reference them in the
  Markdown with relative paths, e.g. `![Alt text](hero.png)`.

Served by the functions in `api/`.

## Video

`![Description](demo.mp4)` (or `.webm`) renders a video player, with
`demo.jpg` from the same folder as its poster. Video is served in byte ranges
of 4 MB or less (Vercel's function response cap is 4.5 MB), only to unlocked
visitors, and with the download and picture-in-picture controls hidden.

Compress screen recordings before adding them. Keep 1080p so UI text stays
sharp, and put the index at the front so playback starts immediately:

```bash
ffmpeg -i in.mov -c:v libx264 -preset slow -crf 26 -pix_fmt yuv420p \
  -movflags +faststart -c:a aac -b:a 96k demo.mp4
ffmpeg -ss 1.5 -i demo.mp4 -frames:v 1 -q:v 3 demo.jpg   # poster
```

`*.mp4` is gitignored, so videos live only on the machine that deploys
(like `access.json`). Keep the originals backed up elsewhere.

## Passwords

Passwords are named and expire individually, so each interviewer or company
can get their own. They are stored hashed in `access.json` in this folder,
which is gitignored and bundled into the functions on `npm run deploy`.

```bash
npm run access -- add "Acme Corp" --days 14      # prints the password once
npm run access -- add "Acme Corp" --until 2026-10-01
npm run access -- list
npm run access -- extend acme-corp --days 7
npm run access -- revoke acme-corp                # ends its sessions after deploy
npm run access -- remove acme-corp
```

Every change needs `npm run deploy` to reach production. Expiry itself is
enforced at request time, so an expired password stops working on its own.
A visitor's 7-day session is capped at their password's expiry, and revoking
a password invalidates its sessions immediately.

`PROTECTED_PASSWORD` (Vercel env var) is an optional master password that
never expires; remove the variable to disable it. `SESSION_SECRET` signs
the session cookie.

`access.json` exists only on the machine that deploys. Back it up if you
want to keep credentials across machines; otherwise just re-issue them.
