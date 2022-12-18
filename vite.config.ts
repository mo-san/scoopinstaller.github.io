import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  preview: {
    port: 3000,
  },
  build: {
    outDir: 'build',
    rollupOptions: {
      plugins: [
        visualizer({
          filename: 'build_stats/stats_treemap.html',
          template: 'treemap',
        }),
      ],
    },
  },
});
