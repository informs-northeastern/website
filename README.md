# INFORMS at Northeastern: chapter website

This is the website of the INFORMS Student Chapter at Northeastern University:
**https://informs-northeastern.github.io/website/**

**You don't need to know any code to update it.** All the words on the site are in the `content` folder, and the photos are in the `photos` folder. Change something there, save, and the website updates itself about a minute later.

## Start here

| I want to… | Go to |
|---|---|
| Add or change an event | [`content/events.yml`](content/events.yml) |
| Add or change an officer, photo or LinkedIn link | [`content/board.yml`](content/board.yml) |
| Change any other words on the site | the [`content`](content) folder: one file per section of the page |
| Add a photo | the [`photos`](photos) folder |
| Edit with forms instead of files | https://app.pagescms.org (sign in with GitHub) |
| Step-by-step instructions | [EDITING.md](EDITING.md) |
| Take the site over, give it its own address, or move it to Wix | [HANDOVER.md](HANDOVER.md) |

## How to change a file on GitHub

1. Click the file (for example `content/events.yml`).
2. Click the **pencil icon** at the top right of the file.
3. Change the words. The notes at the top of the file (lines starting with `#`) explain what goes where.
4. Click the green **Commit changes** button, then **Commit changes** again.
5. Wait about a minute and reload the website.

Made a mistake? Nothing breaks: the website keeps showing the last good version. Open the file, click **History**, and you can see and undo every change ever made.

## What's in this repository

| Folder or file | What it is | Do you need to touch it? |
|---|---|---|
| `content/` | **All the words on the site**, one file per section | **Yes, this is where you edit** |
| `photos/` | The group photo, award photo and officer headshots | **Yes, to add or replace photos** |
| `EDITING.md`, `HANDOVER.md` | Instructions | Read them |
| `index.html` | Arranges the words on the main page | No |
| `links/` | The page linked from the Instagram bio | No (its words are in `content/links_page.yml`) |
| `assets/` | The design (colours, fonts, spacing) and three small scripts | No |
| `_includes/` | The logo, the opening drawing and the seal, drawn in code | No |
| `fonts/` | The Inter typeface | No |
| `favicon.svg`, `favicon-32.png`, `apple-touch-icon.png`, `avatar-512.png` | The logo, in the sizes browsers, phones and social media need | Only to change the logo |
| `_config.yml` | The website's address | Only when moving to a custom domain |
| `.pages.yml` | Sets up the forms at app.pagescms.org | No |
| `404.html`, `sitemap.xml`, `robots.txt`, `.gitignore` | "Page not found" page and files for search engines and GitHub | No |

## Who to ask

Email **informsnu@gmail.com**. The chapter's Gmail account also signs in to everything the site uses: GitHub, Luma and Google Forms.
