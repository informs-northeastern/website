# Editing the chapter website

The website is one file, `index.html`, plus the `photos` folder and the icon files. You don't need to know HTML to update it: change the words between the tags and leave the `<...>` parts alone.

## Where things live

- The site files: GitHub, https://github.com/informs-northeastern/website (the account signs in with informsnu@gmail.com).
- Publishing: GitHub Pages (repository Settings > Pages). The live site is https://informs-northeastern.github.io/website/ and every change saved on GitHub goes live in about a minute.
- Login: ask the President or VP.

## Making a change (in the browser, no installs)

1. Go to github.com, sign in as informs-northeastern (or your own account if you've been added as a collaborator), open the `website` repository, click `index.html`.
2. Click the pencil icon (Edit).
3. Press Ctrl+F and search for `EDIT:` to jump between sections: Top of page, Opening, Group photograph, About, Programs, Events, Board, Honors (shown as "Awards"), Bylaws and FAQ, Join, Footer.
4. Change the text. Keep every `<` `>` tag as it is.
5. Click "Commit changes". Check the live site a minute later.

## Common updates

- **New event:** in EVENTS, copy one `<li data-date="...">` ... `</li>` block and paste it in date order. Change:
  - `data-date="2026-10-13"`: the event's date as year-month-day. The "Next: ... in 5 days" line at the top of the page reads this, counts down by itself, and moves on to the next event once the date passes. If the exact date isn't fixed yet, delete `data-date="..."` and the event is simply skipped by the countdown.
  - the date tile: the big number (`<span class="d">13</span>`) and the month (`<span class="m">Oct</span>`).
  - the tag (`<span class="chip">Meeting</span>`): one word, such as Meeting, Seminar, Workshop, Kickoff, Social or Conference.
  - the date line, the title and the description.
- **Sign-up button (Luma):** events are created on the chapter's Luma calendar (https://luma.com/calendar/cal-WJAcRwOTXltKmsr; the account signs in with Google as informsnu@gmail.com). On the event's Manage page, open More and copy the event ID (starts with evt-) and the event link. Then copy the Register line from the 13 Oct event and change the link and `data-luma-event-id`:
  `<div class="meta"><a class="signup" href="EVENT-LINK" target="_blank" rel="noopener" data-luma-action="checkout" data-luma-event-id="evt-...">Register</a><span>Free</span></div>`
  The button opens Luma's registration pop-up on our page; Luma's script for it is already loaded at the bottom of index.html.
- **Attendance:** after an event, download the guest CSV from Luma (Manage, Guests) and run `luma_attendance.py` (in the chapter's sheets folder) to get the attendance counts by program level for the Event tracker and the line for the past-event card.
- **After an event:** delete it from the upcoming list and update "From past years" with the title, date and a photo if you have one (upload it to `photos/`).
- **New officer:** in BOARD, copy one `<div class="person"> ... </div>` block and change the role, name and program.
- **Officer LinkedIn:** officers add their profile link to the LinkedIn column of the 2026-27 Board roster sheet in Drive. To put it on the site, copy Thavishka's block (it starts with `<a class="person"`), change the link, name, `aria-label`, role and program. The whole card then opens their LinkedIn in a new tab. Officers without a link keep a plain `<div class="person">` block.
- **Adding or removing an officer:** copy or delete a whole card (`<div class="person">...</div>` or `<a class="person" ...>...</a>`). The board arranges itself into even, centred rows (9 cards = 3+3+3, 10 = 4+3+3, up to 4 per row on desktop, 3 on tablets, 2 on phones), so there is nothing else to adjust.
- **Officer photo:** upload a square photo to `photos/board/` named `firstname_lastname.jpg` (Add file > Upload files). In their block, replace the initials line (`<div class="portrait" aria-hidden="true"><span class="ini">SP</span></div>`) with the portrait line from Thavishka's block, changing the file name and alt text.
- **Instagram links page:** `links/index.html` is the page in the Instagram bio (https://informs-northeastern.github.io/website/links/). Search for `EDIT:` in it. For the next event, change `data-date`, the date tile, title, time and Luma link in the event card; the card hides itself the day after the date. To add a link, copy one `<li> ... </li>` in the list.
- **New award:** in HONORS, add a `<li>` at the start of the list with the year and tier. Add `class="top"` to the `<li>` for Summa Cum Laude so it shows in gold.
- **New question:** in BYLAWS AND FAQ, copy one `<details><summary>question</summary><p>answer</p></details>` line and change the question and answer.
- **After a big change:** update the date in `sitemap.xml` so search engines re-read the page.

## The logo

- The chapter mark is the single-line N: a route from a start point to a gold optimum. Files: `favicon.svg`, `favicon-32.png`, `apple-touch-icon.png` (phone home screen) and `avatar-512.png` (LinkedIn, Instagram, Teams).
- The opening drawing (the N crossing a shaded region) and the seal in Awards are drawn in the page itself; there are no separate files to update. The opening drawing plays once when the page loads (and again on hover or tap), and the awards line draws once when it scrolls into view; both are skipped for visitors whose device asks for reduced motion. Keep motion to these few, meaningful places: no fade-ins on every block, no looping effects.
- The logo needs Northeastern CSI approval before official use on merchandise or printed material.

## Rules

- Follow the chapter brand: navy and gold; plain, specific writing; dates as "Tue 13 Oct 2026"; always give the building and room.
- Keep it from looking like a template: gold words only in the opening headline (not at the end of other headings), plain section headings ("Events", not a slogan), no small capital labels above headings, no rows of icon cards or big-number strips. Write the way you'd explain it to a friend: short sentences, "we", no lists of three slogans.
- Links to other websites open in a new tab: give them `target="_blank" rel="noopener"` like the existing ones.
- Don't put personal phone numbers or emails other than informsnu@gmail.com on the site.
- Don't use Northeastern's logo, seal, wordmark or red; the site must not look like an official university page.
- If something breaks, open the file's History on GitHub and restore the previous version. A known-good version is also tagged in the repository (for example `good-2026-10-08`).
