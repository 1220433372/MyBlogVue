# 前端

## 项目初始化

```js
pnpm create vue
```

## 配置环境变量

> 在项目根目录创建 .env.development

```js
# 页面标题
VITE_APP_TITLE = 孙先生的博客系统

# 开发环境配置
VITE_APP_ENV = 'development'

# 管理系统/开发环境
VITE_APP_BASE_API = '/dev-api'

# PROXY_URL
VITE_APP_PROXY_URL = 'http://localhost:9120/api'
```

配置ESlint

```ts
 rules: {
    // 关闭名称校验
    'vue/multi-word-component-names': "off"
  },
```



## 配置 vite.config.js文件

```js
import {fileURLToPath, URL} from 'node:url'
import {defineConfig, loadEnv} from 'vite'
import createVitePlugins from './vite/plugins'

export default defineConfig(({mode, command}) => {
    const env = loadEnv(mode, process.cwd(), "")
    const {VITE_APP_ENV, VITE_APP_PROXY_URL, VITE_APP_BASE_API} = env
    return {
        base: VITE_APP_ENV === 'production' ? '/' : '/',
        plugins: createVitePlugins(env, command === 'build'),
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

```

## 安装NativeUI

```bash
npm i -D naive-ui
npm i -D vfonts
```

### 引入NativeUI

```js
import { createApp } from 'vue'
import naive from 'naive-ui'

const app = createApp(App)
app.use(naive)
```

## 配置 env.d.ts， tsconfig.json

```ts
// env.d.ts
declare interface ImportMetaEnv {
    readonly MODE: string
}

declare interface ImportMeta {
    readonly env: ImpoertMetaEnv
}

declare module '*.vue' {
    import {DefineComponent} from "vue"
    const component: DefineComponent<{}, {}, any>
    export default component
}

// tsconfig.json
{
  "files": [],
  "compilerOptions": {
    "types": ["vite,client"]
  },
  "references": [
    {
      "path": "./tsconfig.node.json"
    },
    {
      "path": "./tsconfig.app.json"
    }
  ]
}

```

# 安装SASS

```
npm install --save-dev sass
```

## 引入配置

> 创建index.css文件，在main.js

```
import '@/styles/index.scss'
```

# 安装tailwind css

1. 安装依赖

   ```
   yarn install -D tailwindcss postcss autoprefixer
   ```

2. 初始化

   ```
   npx tailwindcss init -p
   ```

3. 配置 tailwind.config.js

   ```js
   /** @type {import('tailwindcss').Config} */
   export default {
   content: [
   "./index.html",
   "./src/**/*.{vue,js,ts,jsx,tsx}",
   ],
   theme: {
   extend: {},
   },
   plugins: [],
   }
   ```

4. 创建tailwind.css文件并且添加配置

   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

5. 在main.js中引用

   ```
   import '@/styles/tailwind.css'
   ```


## 配置路由
> 创建router/index.ts
```ts
const router = createRouter({
   history: createWebHistory(import.meta.env.BASE_URL),
   routes: [
      {
         path: '',
         name: 'home',
         component: Layout,
         redirect: '/index',
         children: [
            {
               path: '/index',
               name: 'Index',
               component: () => import('@/views/index.vue')
            }
         ]
      },
   ]
})
```
## 配置404路由
```ts
  // 将未匹配的路由导航到指定的404页面
  {
      path: "/:pathMatch(.*)*",
      component: () => import('@/views/error/404.vue')
  }
```

# 创建主布局
> 创建layout/index.vue文件
> 创建layout/components/Main、Header、Footer.vue文件
```vue
   <script setup lang="ts">
      import Header from "@/layout/conmponents/Header.vue";
      import Footer from "@/layout/conmponents/Footer.vue";
      import Main from "@/layout/conmponents/Main.vue";
   </script>
   <template>
      <n-layout position="absolute">
         <Header/>
         <Main/>
         <Footer/>
      </n-layout>
   </template>
```
## 配置header
