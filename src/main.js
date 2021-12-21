import { createApp, h } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import "./assets/css/main.css"

import Main from './pages/Main.vue'
import Result from './pages/Result.vue'
const routes = [
    {
        path:'/',
        component: Main
    },
    {
        path:'/result',
        component: Result
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes: routes
})
const app  = createApp({
    render: ()=>h(App)
});
app.use(router)
app.mount('#app')
