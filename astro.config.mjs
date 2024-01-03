import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [sitemap()],
  output: "server",
  adapter: netlify({
    cacheOnDemandPages: true,
  }),
});
