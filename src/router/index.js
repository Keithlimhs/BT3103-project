import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '@/views/LoginPage.vue'
import MainPage from '@/views/MainPage.vue'
import TuteeHome from '@/views/TuteeHome.vue'
import TutorsList from '@/views/TutorsList.vue'
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
        path: '/',
        name: 'TuteeHome',
        component: TuteeHome
    },
    {
        path: '/tutors/:moduleCode',
        name: 'TutorsList',
        component: TutorsList
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router
