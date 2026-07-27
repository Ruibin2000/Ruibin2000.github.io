import { defineConfig } from 'astro/config';

const repository = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? 'Ruibin2000.github.io';
const owner = process.env.GITHUB_REPOSITORY_OWNER ?? 'Ruibin2000';
const isUserSite = repository.toLowerCase() === `${owner.toLowerCase()}.github.io`;
const base = isUserSite ? '/' : `/${repository}`;
const site = process.env.SITE_URL ?? `https://${owner}.github.io`;

export default defineConfig({
  site,
  base,
  output: 'static',
  build: {
    format: 'directory'
  }
});
