import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'node:path'

// https://vite.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    css: {
        preprocessorOptions: {
            scss: {
                // 引入 mixin.scss 这样就可以在全局中使用 .scss中预定义的变量了
                // 给导入的路径最后加上 ; 
                additionalData: '@use "@/assets/styles/common.scss" as *;'
            },
            less: {
                javascriptEnabled: true
            }
        }
    }
})
