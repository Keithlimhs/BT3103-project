import { createRouter, createWebHistory } from 'vue-router'


import EmailVerification from '@/views/EmailVerification.vue'
import ChangePassword from "@/components/ChangePassword.vue"
import TuteeProfileDisplayPage from "@/components/TuteeProfileDisplayPage.vue"
import UserGuidelines from '@/components/UserGuidelines.vue'
import TuteeSetUpPage from '@/views/TuteeSetUpPage.vue'
import TutorSetUpPage from '@/views/TutorSetUpPage.vue'
import TuteeLoginPage from '@/views/TuteeLoginPage.vue'
import TutorLoginPage from '@/views/TutorLoginPage.vue'
import MainPage from '@/views/MainPage.vue'

import TuteeHome from '@/views/TuteeHome.vue'
import TutorsList from '@/views/TutorsList.vue'
import TutorProfilePage from '@/views/TutorProfilePage.vue'

import TuteeSignUpPage from '@/views/TuteeSignUpPage.vue'
import TutorSignUpPage from '@/views/TutorSignUpPage.vue'
import TutorHome from '@/views/TutorHome.vue'



const routes = [

    {
        path: "/TuteeProfileDisplayPage",
        name: "TuteeProfileDisplayPage",
        component: TuteeProfileDisplayPage,
    },
    {
        path: "/UserGuidelines",
        name: "UserGuidelines",
        component: UserGuidelines,
    },
    {
        path: "/UserGuidelines",
        name: "UserGuidelines",
        component: UserGuidelines,
    },

    {
        path: "/EmailVerification",
        name: "EmailVerification",
        component: EmailVerification,
    },
    {
        path: "/ChangePassword",
        name: "ChangePassword",
        component: ChangePassword,
    },
    {
        path: '/',
        name: 'MainPage',
        component: MainPage
    },
    {
        path: '/TuteeHome',
        name: 'TuteeHome',
        component: TuteeHome
    },
    {
        path: '/tutors/:moduleCode',
        name: 'TutorsList',
        component: TutorsList,
    },
    {
        path: '/tutors/:moduleCode/:id',
        name: 'TutorProfilePage',
        component: TutorProfilePage,
        props: { tutor: true }
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