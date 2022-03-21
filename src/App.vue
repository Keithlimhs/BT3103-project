<template>

  <TutorsList/>
  <TutorHome/>
  <LoginPage/>
</template>

<script>
import TutorsList from './views/TutorsList.vue'
import TutorHome from './views/TutorHome.vue'
import LoginPage from './views/LoginPage.vue'


export default {

  name: 'App',
  components: {

    TutorsList,
    TutorHome,
    LoginPage,

  }
}
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
  background-color: #E5E5E5;
}

</style>