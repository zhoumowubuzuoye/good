/*
 * @Author: xiewenhao
 * @Date: 2022-08-24 13:28:36
 * @LastEditTime: 2022-09-01 16:47:43
 * @Description: 
 */
import {
  defineConfig
} from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    //设置路径别名
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '*': path.resolve('')
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        charset: false,
        javascriptEnabled: true
      }
    }
  },
  server: {
    host:'0.0.0.0',
    proxy: {
      '/myapi': {
        port:5173,
        target: 'http://localhost:3007',
        cors: true,
        changeOrigin: true,
        rewrite: (path) => {
          return path.replace(/^\/myapi/, "")
        },
      }
    }
  }
})