import partytown from '@astrojs/partytown';
import preact from '@astrojs/preact';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://cv.sergiomarquez.dev/',
  output: 'static',
  trailingSlash: 'never',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
    assets: '_assets',
  },

  server: {
    port: 4321,
    host: true,
  },

  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    }),
    partytown({
      config: {
        forward: ['dataLayer.push'],
        debug: false,
      },
    }),
    tailwind({
      applyBaseStyles: false,
      nesting: true,
    }),
    preact({
      compat: true,
    }),
  ],

  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
  },

  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'hover',
  },

  vite: {
    build: {
      cssMinify: 'lightningcss',
      rollupOptions: {
        output: {
          manualChunks: {
            // Separate critical components
            vendor: ['@astrojs/partytown'],
          },
          // Optimize asset naming
          assetFileNames: 'assets/[name]-[hash][extname]',
          chunkFileNames: 'chunks/[name]-[hash].js',
          entryFileNames: 'entry/[name]-[hash].js',
        },
      },
      // Optimize asset inlining
      assetsInlineLimit: 4096, // 4KB threshold for inlining
      // Enable source map for debugging (disabled in production)
      sourcemap: false,
      // Optimize chunk size warnings
      chunkSizeWarningLimit: 1000,
    },
    optimizeDeps: {
      // Exclude SSR dependencies from pre-bundling
      exclude: ['@astrojs/partytown'],
      // Include specific dependencies for better performance
      include: ['preact', 'preact/hooks'],
    },
    // Performance optimizations
    resolve: {
      alias: {
        // Ensure consistent path resolution
        '@': new URL('./src', import.meta.url).pathname,
        '@cv': new URL('./public/cv.json', import.meta.url).pathname,
      },
    },
    // Remove CSS transformer to use default PostCSS processing
    // This ensures TailwindCSS works correctly
  },
});
