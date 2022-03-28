<template>
  <TuteeSetUpPage/>
  <TutorSetUpPage/>
</template>

<script>
import TuteeSetUpPage from './views/TuteeSetUpPage.vue';
import TutorSetUpPage from './views/TutorSetUpPage.vue';

export default {
  name: 'App',
  components: {
    TuteeSetUpPage,
    TutorSetUpPage,
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
