# Ruibin Chen — Academic & Engineering Portfolio

A responsive static portfolio built with Astro and TypeScript. Content is stored separately from page presentation, and the production output is suitable for GitHub Pages.

Primary deployment target: `https://Ruibin2000.github.io/` from a repository named `Ruibin2000.github.io` under the `Ruibin2000` account.

## Local development

Requirements: Node.js 22 or newer and npm (Node.js 24 is used in CI).

```bash
npm install
npm run dev
```

Open `http://localhost:4321`. Before committing, run:

```bash
npm run check
npm run build
npm run preview
```

## Content editing

- Profile, biography, email, research interests, and update date: `src/data/profile.ts`
- Selected projects and completion status: `src/data/projects.ts`
- Publications: `src/data/publications.ts`
- Experience and education: `src/data/timeline.ts`
- Skills and awards: `src/data/skills.ts`
- Profile photo, social preview, CV, and favicon: `public/`

See [docs/CONTENT_EDITING.md](docs/CONTENT_EDITING.md) for field-level guidance and [docs/MISSING_INFORMATION.md](docs/MISSING_INFORMATION.md) for the current TODO checklist.

## GitHub Pages deployment

The workflow at `.github/workflows/deploy.yml` checks and builds the site on every push to `main`, then publishes `dist/` with GitHub Pages Actions.

1. Push this repository to GitHub under the intended account.
2. In **Settings → Pages**, set **Source** to **GitHub Actions**.
3. Push to `main`, or run the workflow manually from the Actions tab.
4. Review the deployment URL reported by the workflow.

`astro.config.mjs` detects whether the repository is an account site (`USERNAME.github.io`) or a project site and sets the GitHub Pages base path accordingly. The workflow sets the production site origin from `github.repository_owner`. For a custom domain, define a `SITE_URL` environment variable and add the corresponding `public/CNAME` file.

## Content integrity

Do not add unverified dates, metrics, publications, awards, affiliations, collaborators, or external links. Use a visible “to confirm” label in public-facing data and a `TODO` note in the missing-information checklist until the information is verified.
