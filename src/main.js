import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'
import VueSetup from "./components/blog/howTo/VueSetup.vue";
import Intro from "./components/blog/Intro.vue";
import SiteNotice from "./components/siteNotice/SiteNotice.vue";
import { createPinia, defineStore } from 'pinia'
import LilliList from "./components/wishList/LilliList.vue";

const routes = [
    { path: '/', component: Intro, name:"home"},
    { path: '/blog', component: VueSetup, name:"blog"},
    { path: '/site_notice', component: SiteNotice, name: "siteNotice"},
    { path: '/lilli_list', component: LilliList, name: "LilliList"},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

const pinia = createPinia()

export const useSidebarStore = defineStore('counter', {
    state: () => ({ focus: "Home" }),
    getters: {
        //focus: (state) => state.focus,
    },
    actions: {
        setFocus(focus) {
            this.focus = focus
        },
    },
})

var GetFileBlobUsingURL = function (url, convertBlob) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.responseType = "blob";
    xhr.addEventListener('load', function() {
        convertBlob(xhr.response);
    });
    xhr.send();
};

var blobToFile = function (blob, name) {
    blob.lastModifiedDate = new Date();
    blob.name = name;
    return blob;
};

var GetFileObjectFromURL = function(filePathOrUrl, convertBlob) {
    GetFileBlobUsingURL(filePathOrUrl, function (blob) {
        convertBlob(blobToFile(blob, 'main.js'));
    });
};

const app = createApp(App)
app.use(router)
app.use(pinia)
app.mount('#app')

