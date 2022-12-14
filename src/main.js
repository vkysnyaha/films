import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router.js'
import store from '@/store/index.js'
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
app.use(ElementPlus)
app.use(ElementPlusIconsVue)
app.use(router)
app.use(store)
app.mount('#app')