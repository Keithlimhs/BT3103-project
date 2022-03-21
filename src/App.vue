<template>
  <TutorsList/>
  <TutorHome/>
</template>

<script>
import TutorsList from './views/TutorsList.vue'
import TutorHome from './views/TutorHome.vue'

export default {
  name: 'App',
  components: {
    TutorsList,
    TutorHome,
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
