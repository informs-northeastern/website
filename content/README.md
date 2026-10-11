# The words on the website

Every word on the site lives in these files, one per section of the page, top to bottom:

| File | What's in it | Where it shows |
|---|---|---|
| [`opening.yml`](opening.yml) | Headline, intro paragraph, group photo | The dark band at the top and the big photo |
| [`about.yml`](about.yml) | About text, timeline | About |
| [`programs.yml`](programs.yml) | Seminar series, workshops and other programs | Programs |
| [`events.yml`](events.yml) | **Upcoming events**, the "From past years" panel | Events, the countdown at the top, the Instagram page |
| [`board.yml`](board.yml) | **Officers**, photos, LinkedIn links, open positions | People |
| [`awards.yml`](awards.yml) | INFORMS chapter awards | Awards |
| [`bylaws_and_faq.yml`](bylaws_and_faq.yml) | Bylaws summary and questions | Bylaws & FAQ |
| [`join.yml`](join.yml) | Join text | Join |
| [`chapter.yml`](chapter.yml) | Email, membership form, LinkedIn, Instagram, Luma, address | Everywhere: top bar, buttons, footer |
| [`links_page.yml`](links_page.yml) | The buttons on the Instagram links page | informs-northeastern.github.io/website/links/ |

## How to edit

Click a file, click the **pencil icon**, change the words, click **Commit changes**. The site updates in about a minute.

Each file starts with notes (lines beginning with `#`) saying what to do. Three rules:

1. **Change only what comes after the colon.** In `role: Treasurer`, change `Treasurer` and leave `role:` alone.
2. **Keep the spaces at the start of each line.** They show which lines belong together (one event, one officer). To add an event or a person, copy a whole existing block and paste it, so the spacing matches.
3. **Links** are written `[the words people see](https://the-address)`.

If the text starts with a symbol such as `#`, `*`, `-`, `:` or `"`, put the whole text in double quotes: `title: "#1 in the region"`.

Prefer forms? Go to https://app.pagescms.org, sign in with GitHub, and open this repository: every file here appears there as a form.

More examples (new event, new officer, adding a photo): [EDITING.md](../EDITING.md).
