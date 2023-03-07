import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import eslintPlugin from 'vite-plugin-eslint' // 控制台報錯
import { resolve } from 'path'

import { version } from './package.json'
console.log('version', version)

// https://vitejs.dev/config/
export default defineConfig({
  envDir: './viteEnv',
  base: '/',
  server: { port: 8081 },
  plugins: [
    vue(),
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/ // .md
      ],
      imports: [
        'vue'
      ],
      dts: 'src/auto-imports.d.ts'
    }),
    Components({
      resolvers: [
        AntDesignVueResolver({ importStyle: false })
      ]
    }),
    eslintPlugin({
      cache: false // 禁用 eslint 缓存
    })
  ],
  resolve: {
    alias: {
      '@': resolve('src/'),
      images: resolve('src/assets/images'),
      comps: resolve('src/components'),
      store: resolve('src/store'),
      locales: resolve('src/locales'),
      'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js'
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  }
})
