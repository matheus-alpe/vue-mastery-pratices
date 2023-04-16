import { createApp } from 'vue'

import App from './App.vue'

import './assets/main.css'
import AutoImportBaseComponent from './plugin/AutoImportBaseComponent'

const app = createApp(App)

app.use(AutoImportBaseComponent)

app.mount('#app')
