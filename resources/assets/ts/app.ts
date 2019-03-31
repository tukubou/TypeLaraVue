import './bootstrap'
import Vue from 'vue'
import VueRouter from "vue-router"
import ExampleComponent from './components/ExampleComponent.vue'
import Header from "./components/Header.vue"
import Settings from "./components/Settings.vue"
import BookIndex from "./components/Books/Index.vue"
import BookShow from "./components/Books/Show.vue"
import Firefly from "./components/Firefly.vue"
import BGMSettings from "./components/BGMSettings.vue"
import BGISettings from "./components/BGISettings.vue"
Vue.use(VueRouter);
Vue.component("vue-header", Header);

const router = new VueRouter({
    mode: "history",
    routes: [
        { path: "/settings", component: Settings },
        { path: "/books", component: BookIndex },
        { path: "/books/:id", component: BookShow },
        { path: "/firefly", component: Firefly },
        { path: "/bgm", component: BGMSettings },
        { path: "/bgi", component: BGISettings },
    ]
});
new Vue({
    router,
    el: '#app'
});