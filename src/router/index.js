import { createRouter, createWebHistory } from 'vue-router'
import TuteeSetUpPage from '@/views/TuteeSetUpPage.vue'
import TutorSetUpPage from '@/views/TutorSetUpPage.vue'
const routes = [
    {
        path: '/TuteeSetUpPage',
        name: 'TuteeSetUpPage',
        component: TuteeSetUpPage
    },
    {
        path: '/TutorSetUpPage',
        name: 'TutorSetUpPage',
        component: TutorSetUpPage
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router