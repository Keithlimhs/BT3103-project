import { createRouter, createWebHistory } from 'vue-router'


import EmailVerification from '@/views/EmailVerification.vue'
import PasswordReset from "@/components/PasswordRequest.vue"

import TuteeSetUpPage from '@/views/TuteeSetUpPage.vue'
import TutorSetUpPage from '@/views/TutorSetUpPage.vue'
//import LoginPage from '@/views/LoginPage.vue'
import MainPage from '@/views/MainPage.vue'
import SignUpPage from '@/views/SignUpPage.vue'
import TutorHome from '@/views/TutorHome.vue'

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
        path: '/TuteeSetUpPage',
        name: 'TuteeSetUpPage',
        component: TuteeSetUpPage
    },
    {
        path: '/TutorSetUpPage',
        name: 'TutorSetUpPage',
        component: TutorSetUpPage
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