import { defineConfig } from 'vite';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig({
  base: './',
  build: {
    sourcemap: true,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'HTML to PDF Converter',
      formats: ['es', 'cjs', 'umd'],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ['html2canvas', 'jsPDF'],
      output: {
        extend: true,
        globals: {
          html2canvas: 'html2canvas',
          jsPDF: 'jsPDF',
        },
      },
    },
  },
  plugins: [dts({ rollupTypes: true })],
  worker: { format: 'es' },
});
