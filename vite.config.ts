import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
import eslintPlugin from 'vite-plugin-eslint'; // 控制台報錯
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  envDir: './viteEnv',
  base: '/neutec-infinite-loading/',
  server: { port: 8081 },
  plugins: [
    vue(),
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/, // .md
      ],
      imports: ['vue'],
      dts: 'src/auto-imports.d.ts',
    }),
    Components({
      resolvers: [AntDesignVueResolver({ importStyle: false })],
    }),
    eslintPlugin({
      cache: false, // 禁用 eslint 缓存
    }),
  ],
  resolve: {
    alias: {
      '@': resolve('src/'),
      images: resolve('src/assets/images'),
      comps: resolve('src/components'),
      store: resolve('src/store'),
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
});
