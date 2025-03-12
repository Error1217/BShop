import './css/common.css'

import router from "@/Router"
import { createApp } from 'vue'
import App from './App.vue'

createApp(App)
    .use(router.router)
    .mount('#app')
