import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    // R0: scaffold is a pure-static site (no /+page.server.ts yet).
    // When R1+ adds auth + API, switch to @sveltejs/adapter-cloudflare
    // and re-enable SSR. Static export is fine for the design-system
    // preview + every visual primitive in this checkpoint.
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: 'index.html',     // SPA fallback for client-side routing
      precompress: false,
      strict: true
    })
  }
};

export default config;
