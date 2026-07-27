# Content editing guide

All frequently updated portfolio content is in `src/data/`. Astro reloads these modules automatically during local development.

## Add or update a project

Edit `src/data/projects.ts`. Each project needs a unique `slug`, title, category (`eyebrow`), verified period, explicit status, plain-language description, technology list, and one of the four built-in diagram types. Use `link` only for a verified URL or in-page anchor; otherwise use `pendingLink`.

Valid statuses are `Ongoing`, `Completed`, and `Status to confirm`. Do not mark a project completed because a prototype exists—use the state provided by the project owner.

## Add a publication

Edit `src/data/publications.ts`. Add the title, complete author list as supplied, venue, year, and optional status. Only add links from a DOI, publisher URL, repository, or identifier verified by the owner. Abstracts are intentionally omitted until verified text is supplied.

## Add experience or education

Edit `src/data/timeline.ts`. Use the source’s date precision: do not add a month when only a year is known. Choose `Experience` or `Education`; the page handles display order exactly as listed.

## Update skills, awards, or profile links

Edit `src/data/skills.ts` for skill groups and awards. Edit `src/data/profile.ts` for biography, research interests, email, social links, and the manually maintained `updated` value. Replace a pending social item’s `null` URL only after the URL is verified.

## Replace assets

- Profile photo: `public/images/ruibin-chen-profile.jpg`
- Downloadable CV: `public/files/Ruibin-Chen-CV.pdf`
- Social preview: `public/og-card.svg`
- Favicon: `public/favicon.svg`

Keep the profile image reasonably compressed and preserve meaningful alt text in `src/pages/index.astro`. After any asset change, run a production build and inspect the result at mobile and desktop widths.
