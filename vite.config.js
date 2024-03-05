import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  // proxy: {
  //   '/api': {
  //     target: 'http://106.55.188.14/',
  //     changeOrigin: true,
  //     bypass(req, res, options) {
  //       const realUrl = options.target + (options.rewrite ? options.rewrite(req.url) : '');
  //       console.log('--------------',realUrl); // 在终端显示
  //       res.setHeader('A-Real-Url', realUrl); // 添加响应标头(A-Real-Url为自定义命名)，在浏览器中显示
  //     },
  //   }
  // },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
