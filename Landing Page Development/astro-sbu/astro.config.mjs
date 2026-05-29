import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/static';

export default defineConfig({
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  output: 'static',
  adapter: vercel({
    webAnalytics: { enabled: false },
  }),
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
  vite: {
    build: {
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          manualChunks: {
            swiper: ['swiper'],
          },
        },
      },
    },
    optimizeDeps: {
      include: ['aos', 'swiper'],
    },
  },
});
