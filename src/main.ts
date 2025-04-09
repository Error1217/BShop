import './css/common.css'

import router from "@/router/index";
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'

createApp(App)
    .use(router)
    .use(createPinia())
    .mount('#app')
