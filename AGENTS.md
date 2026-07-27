# Repository conventions

## Architecture

- Astro pages live in `src/pages/`.
- Shared UI belongs in `src/components/`; keep page files focused on composition.
- Global design tokens and reset styles live in `src/styles/global.css`.
- Profile content, projects, publications, experience, skills, and awards must remain in `src/data/` rather than being duplicated in components.
- Static assets belong in `public/`. Use `import.meta.env.BASE_URL` when constructing public asset URLs so project-site deployments continue to work.

## Content rules

- Never invent publications, venues, results, citation counts, affiliations, dates, collaborators, awards, or URLs.
- Preserve the `Completed`, `Ongoing`, and `Status to confirm` distinction for projects.
- If information cannot be verified from a supplied source, show a concise public placeholder and record the exact need in `docs/MISSING_INFORMATION.md`.
- External links must use `target="_blank"` with `rel="noopener noreferrer"` and an accessible indication that a new tab opens.
- Update `profile.updated` whenever verified public content changes.

## Quality gates

Run `npm run check` and `npm run build` before handing off changes. Check keyboard navigation, mobile layout, both themes, and print layout for `/resume/`. Avoid adding dependencies for effects achievable with Astro, CSS, or small vanilla scripts.
