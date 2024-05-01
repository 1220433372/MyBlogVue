import '@/styles/index.scss'

import {createApp} from 'vue'
import {createPinia} from 'pinia'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import directive from '@/directives' // directive
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus)
directive(app)
app.mount('#app')
