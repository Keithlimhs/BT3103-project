<template>
  <TuteeSetUpPage/>
  <TutorSetUpPage/>
  <TutorProfilePage/>
</template>

<script>
import TuteeSetUpPage from './views/TuteeSetUpPage.vue';
import TutorSetUpPage from './views/TutorSetUpPage.vue';
import TutorProfilePage from './views/TutorProfilePage.vue';

export default {
  name: 'App',
  components: {
    TuteeSetUpPage,
    TutorSetUpPage,
    TutorProfilePage,
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
  
}
</style>
