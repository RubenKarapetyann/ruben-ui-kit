import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from "path"
import dst from "vite-plugin-dts"

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "ruben-ui-kit",
      fileName: format => `ruben-ui-kit.${format}.js`
    },
    rollupOptions: {
      external: ["react"],
      output: {
        globals: {
          react: "React"
        }
      }
    }
  },
  plugins: [react(),
    dst({
      insertTypesEntry: true
    })
  ]
})
