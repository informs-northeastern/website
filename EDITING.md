# Editing the chapter website

You don't need to know any code. Every word on the site is in the **`_data`** folder, one plain text file per section of the page. Change the words there and the site updates itself about a minute later.

| To change… | Edit this file |
|---|---|
| Events, the countdown, the Instagram page's "Next event" | `_data/events.yml` |
| Officers, photos, LinkedIn links, open positions | `_data/board.yml` |
| Awards | `_data/awards.yml` |
| Bylaws and FAQ | `_data/bylaws_and_faq.yml` |
| Headline, intro and group photo at the top | `_data/opening.yml` |
| About text and the timeline | `_data/about.yml` |
| Programs | `_data/programs.yml` |
| Join section | `_data/join.yml` |
| Email, form link, LinkedIn, Instagram, Luma, footer address | `_data/chapter.yml` |
| The Instagram links page (`/links/`) | `_data/links_page.yml` |

Each file starts with short notes (lines beginning with `#`) explaining what to do.

## Two ways to edit

### A. With forms (easiest)

1. Go to **https://app.pagescms.org** and sign in with GitHub (the chapter account, informsnu@gmail.com, or your own account if you've been added to the repository).
2. Open the `informs-northeastern/website` repository.
3. Pick a section on the left (Events, Board, Awards…). You get labelled boxes, date pickers and photo upload.
4. Click **Save**. The site updates about a minute later.

The first time, Pages CMS asks to be allowed into the repository; the account owner approves it once. Saving with forms removes the `#` notes from that file. That's fine: the same instructions are on this page.

### B. Directly on GitHub

1. Sign in at github.com and open https://github.com/informs-northeastern/website.
2. Open the `_data` folder and click the file you need (for example `events.yml`).
3. Click the pencil icon (Edit), change the text, then click **Commit changes**.

## Three rules for the text files

1. **Change only what comes after the colon.** In `role: Treasurer`, change `Treasurer`; leave `role:` alone.
2. **Keep the spaces at the start of lines exactly as they are.** They group lines that belong together (one event, one officer). When you add something, copy an existing block and paste it so the spacing matches.
3. **Links and gold words.** A link is written `[the words people see](https://the-address)`. In the headline, `*stars*` around words make them gold.

If a line starts with a special character (`:` `#` `-` `*` `@` `"`), put the whole text in double quotes: `title: "#1 in the region"`.

**If you make a mistake**, the live site doesn't break: GitHub keeps showing the previous version and emails the account a "Page build failed" message. Open the file again, fix the line it names (usually spacing or a missing colon), and commit. To undo any change, open the file, click **History**, and restore the version before it.

## Common jobs

**Add an event.** In `events.yml`, copy one whole event (from its `- title:` line down to the next one), paste it in date order, and change the details. `date` (year-month-day) runs the "Next: … in 5 days" line at the top and the date square. No exact date yet? Leave `date` empty; the square shows "TBA" until you fill it in.

**Registration (Luma).** Create the event on the chapter's Luma calendar (https://luma.com/calendar/cal-WJAcRwOTXltKmsr; sign in with Google as informsnu@gmail.com). On the event's Manage page, open More and copy the event link and the event ID (starts with `evt-`). Put them in `register_link` and `luma_event_id`. The Register button then opens Luma's sign-up pop-up on our page, and the Instagram links page shows the event as "Next event" until its day has passed.

**After an event.** Delete its block from `events.yml`. To feature it in the dark "From past years" panel, change `past:` and upload a photo to `photos/`. For attendance, download the guest CSV from Luma (Manage, Guests) and run `luma_attendance.py` from the chapter's sheets folder.

**New officer / officer leaves.** In `board.yml`, copy or delete one whole person (from `- name:`). The cards arrange themselves into even rows. When someone takes an open role, delete that role from `open_positions`.

**Officer photo.** Upload a square photo (about 600 × 600 pixels) to `photos/board/` named `firstname_lastname.jpg` (on GitHub: open the folder, Add file > Upload files). Then set `photo: photos/board/firstname_lastname.jpg` on their entry. Without a photo, the card shows their initials.

**Replacing a photo under the same name.** Browsers may show the old one for about 10 minutes. That's normal.

**Officer LinkedIn.** Officers add their link to the LinkedIn column of the Board roster sheet in Drive. Copy it into `link:`; the whole card then opens it.

**New award.** In `awards.yml`, add the year and award at the top of the list. Summa Cum Laude shows in gold by itself.

**New question.** In `bylaws_and_faq.yml`, copy one `- question:` / `answer:` pair.

## Rules for what goes on the site

- Follow the chapter brand: navy and gold; plain, specific writing; dates as "Tue 13 Oct 2026"; always give the building and room.
- Every line should tell the visitor something concrete (who, what, when, where) or go. No captions that explain the obvious.
- Keep it from looking like a template: gold words only in the opening headline, plain section headings ("Events", not a slogan), no rows of icon cards or big-number strips. Write the way you'd explain it to a friend: short sentences, "we", no lists of three slogans.
- No personal phone numbers or emails other than informsnu@gmail.com.
- Don't use Northeastern's logo, seal, wordmark or red. The site must not look like an official university page.

## The logo

The chapter mark is the single-line N: a route from a start point to a gold optimum. Files: `favicon.svg`, `favicon-32.png`, `apple-touch-icon.png` (phone home screen) and `avatar-512.png` (LinkedIn, Instagram, Teams). The opening drawing and the Awards seal are drawn in code (`_includes/route-drawing.html`, `_includes/seal.html`). The logo needs Northeastern CSI approval before it goes on merchandise or printed material.

For anything beyond words and photos (layout, colours, moving the site), see [HANDOVER.md](HANDOVER.md).
