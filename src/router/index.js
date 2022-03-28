import { createRouter, createWebHistory } from 'vue-router'
import EmailVerification from '@/views/EmailVerification.vue'
import PasswordReset from "@/views/PasswordReset"
const routes = [
    {
        path: "/",
        name: "EmailVerification",
        component: EmailVerification,
    },

    {
        path: "/",
        name: "PasswordReset",
        component: PasswordReset,
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router