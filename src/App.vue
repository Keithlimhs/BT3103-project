<template>

  <router-view/>


  <!-- <LoginPage/> -->
  <!-- <TutorsList/> -->
  <!-- <TutorHome/> -->
  <!-- <AddModulePopup/> -->
  <TuteeHome/>
</template>

<script>
import "@fontsource/m-plus-rounded-1c";
// import TutorsList from './views/TutorsList.vue'
// import TutorHome from './views/TutorHome.vue'
// import LoginPage from './views/LoginPage.vue'
// import AddModulePopup from './views/AddModulePopup.vue'
import TuteeHome from './views/TuteeHome.vue'


export default {
  name: 'App',
  components: {

    TuteeHome,
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
  margin-top: 60px;
  background-color: #E5E5E5;
}

</style>