import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'
import AutoImportComponent from './plugin/AutoImportBaseComponent'

const app = createApp(App)
app.use(AutoImportComponent)
app.use(createPinia())
app.use(router)

app.mount('#app')
