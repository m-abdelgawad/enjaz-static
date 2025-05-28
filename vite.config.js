
import { defineConfig } from 'vite'
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  root: '.',
  server: {
    host: "::",
    port: 8080
  },
  build: {
    outDir: 'dist'
  },
  plugins: [
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
}))
