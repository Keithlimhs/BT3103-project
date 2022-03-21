import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '@/views/LoginPage.vue'
import MainPage from '@/views/MainPage.vue'
const routes = [
    {
        path: '/LoginPage',
        name: 'LoginPage',
        component: LoginPage
    },
    {
        path: '/MainPage',
        name: 'MainPage',
        component: MainPage
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router
