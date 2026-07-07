// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build
// Deployed to GitHub Pages as a user site (shadmantabib.github.io),
// so the site lives at the domain root — no `base` subpath needed.
export default defineConfig({
  site: "https://shadmantabib.github.io",
  integrations: [sitemap()],
  markdown: {
    shikiConfig: {
      themes: { light: "github-light", dark: "github-dark" },
    },
  },
});
