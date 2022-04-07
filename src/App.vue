<template>
<ChangePassword/>
<!-- <TutorProfilePage/> -->
 <TuteeProfileDisplayPage/>
 <!-- <EmailVerification/> -->

</template>






<script>
import "@fontsource/m-plus-rounded-1c";
// import EmailVerification from './views/EmailVerification.vue'
// import TutorProfilePage from './views/TutorSetUpPage.vue'
import TuteeProfileDisplayPage from './components/TuteeProfileDisplayPage.vue'
import ChangePassword from './components/ChangePassword.vue'
//import TutorsList from './views/TutorsList.vue'
// import TutorHome from './views/TutorHome.vue'
// import LoginPage from './views/LoginPage.vue'
// import AddModulePopup from './views/AddModulePopup.vue'
// import TuteeHome from './views/TuteeHome.vue'



export default {
  name: 'App',
  components: {
    ChangePassword,
    TuteeProfileDisplayPage,
    // TutorProfilePage,
    // EmailVerification,

    // TuteeHome,
    //TutorsList,


    //TuteeHome,
    // TutorsList,

    // TutorHome,
    // LoginPage,
    // AddModulePopup


  }
}
</script>

<style>

#app {
  font-family: "M PLUS Rounded 1c";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #E5E5E5;
  top: 0;
  left: 0;
  min-height: 100vh;
  width: 100%;
}

</style>

