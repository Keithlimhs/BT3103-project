import { createRouter, createWebHistory } from 'vue-router'
import EmailVerification from '@/views/EmailVerification.vue'
const routes = [
    {
        path: "/",
        name: "EmailVerification",
        component: EmailVerification,
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router