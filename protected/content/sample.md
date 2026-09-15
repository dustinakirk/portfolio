---
title: Confidential Case Study (Sample)
subtitle: Placeholder for a password-protected project. Replace this file and its media folder with real work.
category: Confidential
tags: [Confidential, Sample]
image: cover.png
order: 1
---

You are viewing a protected project. This page, its text, and its images are served by a Vercel Function only after the portfolio password has been entered. Access is remembered on this device for seven days.

## How to author a protected project

Create `protected/content/<id>.md` with front matter for `title`, `subtitle`, `category`, `tags`, `image` (the cover shown on the homepage tile), and `order`. Put the project's images in `protected/media/<id>/` and reference them with relative paths.

![Invite form screenshot](invite.png)

## What is protected

- The Markdown text of this page
- Every file in the media folder
- The list of protected projects itself

Nothing here appears in the public JavaScript bundle. Set `draft: true` in the front matter to hide a project while you work on it.
