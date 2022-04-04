
<template>
  <TuteeProfileInfo/>
<!-- <router-view/> -->
</template>

<script>
import TuteeProfileInfo from "@/components/TuteeProfileInfo"

console.log("in App")
export default {
  components: {
    TuteeProfileInfo
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
