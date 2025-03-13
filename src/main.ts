import './css/common.css'

import Router from "@/Router"
import { createApp } from 'vue'
import App from './App.vue'

createApp(App)
    .use(Router.router)
    .mount('#app')
