import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  // ─── Vitest configuration ──────────────────────────────────────────────────
  test: {
    // Use jsdom to simulate a real browser DOM environment
    environment: 'jsdom',

    // Automatically import jest-dom matchers (toBeInTheDocument, etc.)
    setupFiles: ['./src/test/setup.js'],

    // Allow using `describe`, `it`, `expect` without importing
    globals: true,

    // Coverage configuration (run with: npm test -- --coverage)
    coverage: {
      provider: 'v8',
      reporter: ['text', 'lcov'],
      include: ['src/**/*.{js,jsx}'],
      exclude: ['src/main.jsx', 'src/test/**'],
    },
  },
});
