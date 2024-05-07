import cloudflare from "@astrojs/cloudflare";
import db from "@astrojs/db";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  adapter: cloudflare(),
  integrations: [react(), tailwind(), db()]
});