/*
 * @Author: xiewenhao
 * @Date: 2022-08-09 13:52:30
 * @LastEditTime: 2022-08-10 10:11:02
 * @Description: 
 */
import {
  defineConfig
} from 'vite'
import react from '@vitejs/plugin-react'

import path from 'path'
export default defineConfig({
  plugins: [
    react()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
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
    proxy: {

    }
  }
})