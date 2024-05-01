import {fileURLToPath, URL} from 'node:url'
import {defineConfig, loadEnv} from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers'

export default defineConfig(({mode}) => {
    const env = loadEnv(mode, process.cwd(), "")
    const {VITE_APP_ENV, VITE_APP_PROXY_URL, VITE_APP_BASE_API} = env
    return {
        base: VITE_APP_ENV === 'production' ? '/' : '/',
        plugins: [
            vue(),
            AutoImport({
                resolvers: [ElementPlusResolver()],
            }),
            Components({
                resolvers: [ElementPlusResolver()],
            }),
        ],
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url))
            }
        },
        // vite 相关配置
        server: {
            port: 81,
            host: true,
            open: true,
            hmr: true,
            proxy: {
                [VITE_APP_BASE_API]: {
                    target: VITE_APP_PROXY_URL,
                    changeOrigin: true,
                    rewrite: (p) => p.replace(/^\/dev-api/, '')
                }
            }
        },
    }
})
