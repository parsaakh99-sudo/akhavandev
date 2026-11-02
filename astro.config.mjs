import { defineConfig } from "astro/config";
import site from "./site.config.mjs";

export default defineConfig({
  site: site.siteUrl,
  output: "static",
  trailingSlash: "never",
  build: { format: "file", inlineStylesheets: "always" },
});
