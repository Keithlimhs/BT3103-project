import { createRouter, createWebHistory } from 'vue-router'
import EmailVerification from '@/views/EmailVerification.vue'
import PasswordReset from "@/components/PasswordRequest.vue"

const routes = [
    {
        path: "/",
        name: "EmailVerification",
        component: EmailVerification,
    },

    {
        path: "/PasswordReset",
        name: "PasswordReset",
        component: PasswordReset,
    }

]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router