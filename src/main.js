import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'
import VueSetup from "./components/blog/howTo/VueSetup.vue";
import Intro from "./components/blog/Intro.vue";
import SiteNotice from "./components/siteNotice/SiteNotice.vue";


const routes = [
    { path: '/', component: Intro },
    { path: '/blog', component: VueSetup},
    { path: '/site_notice', component: SiteNotice},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

const app = createApp(App)
app.use(router)
app.use(router)
app.mount('#app')

