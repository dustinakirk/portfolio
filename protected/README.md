# Protected projects

Case studies in this folder are only served to visitors who have entered the
portfolio password. Nothing here is copied into `public/` or the client bundle.

- `content/<id>.md` — one Markdown file per project. Front matter keys:
  `title`, `subtitle`, `category`, `tags: [a, b]`, `image` (cover file in the
  media folder), `order` (sort key, lower first), `draft: true` to hide.
- `media/<id>/` — images and video for that project. Reference them in the
  Markdown with relative paths, e.g. `![Alt text](hero.png)`.

Served by the functions in `api/`. The password and session secret are the
`PROTECTED_PASSWORD` and `SESSION_SECRET` environment variables on Vercel.
