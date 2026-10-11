# Photos

| Photo | File | Used in |
|---|---|---|
| Group photo | `group.jpg` | The wide photo under the opening (set in `content/opening.yml`) |
| Award photo | `award.jpg` | "From past years" and the Join section (set in `content/events.yml`) |
| Officer headshots | `board/firstname_lastname.jpg` | The People cards (set in `content/board.yml`) |

## Adding a photo

1. Open the right folder here (for headshots, open `board`).
2. Click **Add file** > **Upload files**, drag the photo in, and click **Commit changes**.
3. Put its name in the matching content file, e.g. in `content/board.yml`: `photo: photos/board/jane_doe.jpg`

Tips:

- **Headshots:** square, about 600 × 600 pixels, face centred, named `firstname_lastname.jpg` (small letters, underscore, no spaces).
- **Wide photos:** landscape, about 1600 pixels wide. Keep files under 500 KB so the page loads fast on phones (squoosh.app shrinks them for free).
- Only use real photos with the person's OK. Replacing a photo under the same name can take about 10 minutes to show, because browsers keep the old one for a while.
