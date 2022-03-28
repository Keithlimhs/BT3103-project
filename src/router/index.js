import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '@/views/LoginPage.vue'
import MainPage from '@/views/MainPage.vue'
import SignUpPage from '@/views/SignUpPage.vue'
import TutorHome from '@/views/TutorHome.vue'
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
    },
    {
        path: '/SignUpPage',
        name: 'SignUpPage',
        component: SignUpPage
    },
    {
        path: '/TutorHome',
        name: 'TutorHome',
        component: TutorHome
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router
