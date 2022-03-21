<template>
  <TutorAbout/><br>
  <TutorModules/><br>
  <TutorWebsite/><br>
  <TutorReviews/><br>
</template>

<script>
import TutorAbout from './components/TutorAbout.vue';
import TutorModules from './components/TutorModules.vue';
import TutorWebsite from './components/TutorWebsite.vue';
import TutorReviews from './components/TutorReviews.vue'

export default {
  name: 'App',
  components: {
    TutorAbout,
    TutorModules,
    TutorWebsite,
    TutorReviews
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color: #e5e5e5;
}
</style>
