import { createRouter, createWebHistory } from 'vue-router'


import EmailVerification from '@/views/EmailVerification.vue'
import PasswordReset from "@/components/PasswordRequest.vue"

import TuteeSetUpPage from '@/views/TuteeSetUpPage.vue'
import TutorSetUpPage from '@/views/TutorSetUpPage.vue'
import TuteeLoginPage from '@/views/TuteeLoginPage.vue'
import TutorLoginPage from '@/views/TutorLoginPage.vue'
import MainPage from '@/views/MainPage.vue'
import TuteeSignUpPage from '@/views/TuteeSignUpPage.vue'
import TutorSignUpPage from '@/views/TutorSignUpPage.vue'
import TutorHome from '@/views/TutorHome.vue'


const routes = [
    {
        path: "/EmailVerification",
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
        path: '/TuteeSignUpPage',
        name: 'TuteeSignUpPage',
        component: TuteeSignUpPage
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

    },
    {
        path: '/TuteeLoginPage',
        name: 'TuteeLoginPage',
        component: TuteeLoginPage
    },
    {
        path: '/TutorLoginPage',
        name: 'TutorLoginPage',
        component: TutorLoginPage

    },
    {
        path: '/TutorSignUpPage',
        name: 'TutorSignUpPage',
        component: TutorSignUpPage

    },

]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router