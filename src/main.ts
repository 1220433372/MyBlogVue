// 通用字体
import 'vfonts/Lato.css'
// 等宽字体
import 'vfonts/FiraCode.css'

import '@/styles/tailwind.css'

import '@/styles/index.scss'



import { createApp } from 'vue'
import { createPinia } from 'pinia'
// 引入native ui
import naive from 'naive-ui'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(naive)
app.use(createPinia())
app.use(router)

app.mount('#app')
