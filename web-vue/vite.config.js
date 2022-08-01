import path from "path";
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import  postcssCfg  from './postcss.config.js'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
   // 接口代理服务，无需打开nginx服务
    resolve: {
    alias: {
        // eslint-disable-next-line
        "@": path.resolve(__dirname, "../"),
    },
  },
    // css配置postcss支持
    css: {
      postcss: {
          plugins: postcssCfg.plugins,
      },
  },
  server: {
    host: "localhost",
    port: 80,
    proxy: {
        "^/api": {
            // 代理到nodejs服务
            target: "http://localhost:3000",
            // 带x-forward headers信息
            xfwd: true,
        },
    },
  },
})
