
<template>
  <EmailVerification/>
  <PasswordReset/>

<!-- <router-view/> -->
</template>

<script>
import EmailVerification from "@/views/EmailVerification"
import PasswordReset from "@/views/PasswordReset"

console.log("in App")
export default {
  components: {
    EmailVerification,
    PasswordReset
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
