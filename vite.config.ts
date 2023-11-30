import process from 'node:process'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import webExtension, { readJsonFile } from 'vite-plugin-web-extension'

function generateManifest() {
  const manifest = readJsonFile('src/manifest.json')
  const pkg = readJsonFile('package.json')
  return {
    name: pkg.name,
    description: pkg.description,
    version: pkg.version,
    ...manifest,
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    webExtension({
      manifest: generateManifest,
      browser: process.env.TARGET || 'chrome',
      watchFilePaths: ['package.json', 'src/manifest.json'],
    }),
  ],
})
