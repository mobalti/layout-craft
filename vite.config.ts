import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: './lib/utilities.css',
      name: 'Utilities',
      fileName: 'utilities',
    },
    cssCodeSplit: true,
  },
});
