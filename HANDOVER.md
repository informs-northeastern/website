# Handing over the website

Everything the next webmaster or board needs to take the site over, keep it running, or move it somewhere else. For everyday edits (events, officers, photos), see [EDITING.md](EDITING.md).

## What the site is

A free website hosted by **GitHub Pages**: https://informs-northeastern.github.io/website/ (main page) and `/links/` (the page in the Instagram bio). There is no server, database or monthly cost. GitHub rebuilds the site about a minute after any change is saved.

## Accounts to pass on

| What | Where | Sign-in |
|---|---|---|
| Website files | https://github.com/informs-northeastern (repository `website`) | GitHub account `informs-northeastern`, email informsnu@gmail.com |
| Form editor | https://app.pagescms.org | Sign in with GitHub (above) |
| Events and registration | https://luma.com/calendar/cal-WJAcRwOTXltKmsr | Google, informsnu@gmail.com |
| Membership form | Google Forms, in the chapter Drive | informsnu@gmail.com |

The chapter Gmail is the key to everything: hand over its password and recovery settings and the new board has every account. To let someone edit with their own GitHub account instead, add them in the repository under Settings > Collaborators. Only the account owner can change Settings > Pages.

## How the files are organised

The [README](README.md) lists every folder and file in plain words. For whoever looks after the code:

```
content/          ALL THE WORDS, one YAML file per section. The only folder editors need.
photos/           Group photo, award photo, board/ for officer headshots
index.html        The main page's layout; fills in the words from content/
links/index.html  The Instagram links page's layout
_includes/        Reused pieces: the logo, the opening drawing, the seal, link icons, text formatting
assets/           site.css (the design; colours at the top), links.css, site.js (countdown, board rows, animation)
fonts/            The Inter typeface, hosted with the site (licence in fonts/OFL.txt)
_config.yml       The site's address, and data_dir: content (tells Jekyll where the words are)
.pages.yml        The forms in Pages CMS; one entry per file in content/
favicon.svg, favicon-32.png, apple-touch-icon.png, avatar-512.png   Logo files
404.html, sitemap.xml, robots.txt   "Page not found" page and search-engine files
```

Colours live at the top of `assets/site.css` (`--navy`, `--gold` and so on). Change a colour there and it changes across the whole page.

GitHub Pages builds the site with **Jekyll**, which comes with it: files in `content/` are filled into `index.html` where you see `{{ ... }}`. No install is needed to edit. To preview on a computer before publishing, install Docker and run this in the website folder:

```
docker run --rm -p 4000:4000 -v "%cd%:/src" -w /src ruby:3.3 sh -c "gem install github-pages webrick --no-document && jekyll serve --host 0.0.0.0 --baseurl ''"
```

The first run takes a few minutes. Then open http://localhost:4000. (`%cd%` is for Windows cmd; use `$(pwd)` on Mac or Linux.)

## Visitor statistics and Google Search

Both are switched off until someone with the chapter login sets them up (each takes about five minutes):

- **Statistics:** create a free account at https://www.goatcounter.com with informsnu@gmail.com and pick a code (for example `informs-neu`). Put the code after `goatcounter:` in `_config.yml`. Visits and clicks then show on the GoatCounter dashboard. It uses no cookies, so no cookie banner is needed.
- **Google Search:** at https://search.google.com/search-console, add a "URL prefix" property for `https://informs-northeastern.github.io/website/`, choose the "HTML tag" method, and paste only the `content="..."` value after `google_site_verification:` in `_config.yml`. Commit, wait a minute, then click Verify. Then submit `sitemap.xml` under Sitemaps.

## Restore points

Before every redesign, a tag (a named snapshot) was added to the repository, for example `good-2026-10-08-redesign` and `pre-editable-2026-10-11` (the last version before the words moved into `content`). On GitHub: the branch menu > Tags shows them all. Smaller slips are easier to undo from a file's **History**.

## Giving the site its own address

The board has asked for a proper address instead of `github.io`. Buy a domain (around $10–20 a year from a seller such as Cloudflare, Namecheap or Porkbun), then:

1. In the repository: Settings > Pages > Custom domain, enter it, and tick Enforce HTTPS once offered.
2. At the domain seller, add the DNS records GitHub shows on that page.
3. In `_config.yml`, set `url: https://your-domain` and `baseurl: ""`.
4. Update the address in `content/links_page.yml` (the "Chapter website" button), the Instagram bio, LinkedIn, Luma and the COE page (Christina McNeil, c.mcneil@northeastern.edu).

## Moving to Wix, Squarespace or Google Sites

Possible, but it's a rebuild, not an import: these builders can't take in another site's files. What makes it straightforward is that every word is already in `content`, so the new site can be filled in by copying from those files section by section.

**Before choosing, weigh what changes:**

| | GitHub Pages (now) | Wix / Squarespace | Google Sites |
|---|---|---|---|
| Cost | Free | Free with their ads and address; paid plan for your own domain and no ads | Free |
| Editing | Forms (Pages CMS) or text files | Drag-and-drop | Drag-and-drop, simplest |
| Design control | Full | High | Low (templates only) |
| Countdown, balanced board rows, animated drawing | Built in | Need custom code or an embed | Not possible |
| Who owns it | The chapter's GitHub account | Their platform; leaving later means another rebuild | The chapter's Google account |

**If you move:**

1. Build the pages in the new tool, section by section, using the words in `content/` and the photos in `photos/`.
2. Brand: navy `#0F1F3D`, deep navy `#08132A`, gold `#C9A35A`, cream `#F3F1EA`, typeface **Inter** (free on Google Fonts). Upload `avatar-512.png` and `favicon-32.png` as the logo and site icon.
3. The opening drawing and the seal can be added as images: open `_includes/route-drawing.html` or `_includes/seal.html`, save the `<svg>…</svg>` part as a `.svg` file, and upload it. Wix also has an "Embed HTML" element where they can be pasted directly.
4. Events: link to the Luma calendar, or paste Luma's embed code for the calendar or an event into an HTML/embed block.
5. Point the custom domain at the new site (step 2 above, with the new provider's records), and update the links listed in step 4 above.
6. Keep this repository. It's the full record of the site and a fallback, and it costs nothing.

Our recommendation: stay on GitHub Pages and use Pages CMS for editing. It's free, the chapter owns it outright, and the forms are about as easy as Wix for the things that change during the year (events, officers, photos).
