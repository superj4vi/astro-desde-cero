import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://superj4vi.github.io',
  base: '/astro-desde-cero',
});

const IsGithubPages = true
const path = require('path')
const folderName = path.basename(process.cwd() + "/")
const mode = process.env.NODE_ENV === "production" ? "production" : "development"
const base = mode === "production" && IsGithubPages ? "/" + folderName : "/"

module.exports = {
  root: "src",
  base,
  mode,
  publicDir: "../public",
  build: {
    outDir: "../dist",
    assetsDir: "./"
  }
}

