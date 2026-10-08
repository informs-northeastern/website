# Editing the chapter website

The website is one file, `index.html`, plus the `photos` folder. You don't need to know HTML to update it: change the words between the tags and leave the `<...>` parts alone.

## Where things live

- The site files: GitHub, https://github.com/informs-northeastern/website (the account signs in with informsnu@gmail.com).
- Publishing: GitHub Pages (repository Settings > Pages). The live site is https://informs-northeastern.github.io/website/ and every change saved on GitHub goes live in about a minute.
- Login: ask the President or VP. They pass with the informsnu@gmail.com handover each year.

## Making a change (in the browser, no installs)

1. Go to github.com, sign in as informs-northeastern (or your own account if you've been added as a collaborator), open the `website` repository, click `index.html`.
2. Click the pencil icon (Edit).
3. Press Ctrl+F and search for `EDIT:` to jump between sections: Opening, About, Programs, Events, Board, Honors, Bylaws, Join, Footer.
4. Change the text. Keep every `<` `>` tag as it is.
5. Click "Commit changes". Check the live site a minute later.

## Common updates

- **New event:** in EVENTS, copy one `<li> ... </li>` block, paste it above or below, and change the date, title and description.
- **After an event:** move it to "From past years", and add a photo to `photos/` if you have one.
- **New officer:** in BOARD, copy one `<div class="person"> ... </div>` block and change the role, name and program.
- **Officer LinkedIn:** officers add their profile link to the LinkedIn column of the 2026-27 Board roster sheet in Drive. To put it on the site, copy Thavishka's block (it starts with `<a class="person"`), change the link, name, `aria-label`, role and program. The whole card then opens their LinkedIn in a new tab. Officers without a link keep a plain `<div class="person">` block.
- **Officer photo:** upload a square photo to `photos/board/` named `firstname_lastname.jpg` (Add file > Upload files). In their block, replace the initials line with the line used on an officer who has a photo, changing the file name and alt text.
- **New award:** in HONORS, add a line at the top of the list.

## Rules

- Follow the chapter brand kit: plain, specific writing; dates as "Tue 13 Oct 2026"; always give the building and room.
- Links to other websites open in a new tab: give them `target="_blank" rel="noopener"` like the existing ones.
- Don't put personal phone numbers or emails other than informsnu@gmail.com on the site.
- If something breaks, open the file's History on GitHub and restore the previous version.
