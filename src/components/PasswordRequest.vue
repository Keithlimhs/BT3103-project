<template>
<div id="backgroundColor">
<link href='https://fonts.googleapis.com/css?family=M PLUS Rounded 1c' rel='stylesheet'>
   
  <div class= "topArt">
    <button type="button"  id = "backButton" 
  @click="hasHistory() 
    ? $router.go(-1) 
    : $router.push('/')">&laquo; 
</button>
    <img src="src\images\TopLogo.png" alt="logo">
    <h3>PASSWORD RESET</h3>
  </div>
  
  <h2>Recover Password</h2>
  
  <div class ="form">
      <form @submit.prevent = "handleSubmit" id="PasswordRequest">
        <div class = "form">
          <label for="email"> <strong> Email: </strong> </label>
          <input type = "email" class = "form-control" v-model="email" id = "email" placeholder= "Enter your email here" size = "30"> <br><br>
        </div>

        <button id = "verifyEmail" type="button" v-on:click="verifyEmail()"> Email me a recovery link </button>
      </form>
  </div>

  <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

</div>
</template>

<script>
import axios from "axios"

export default {
    
    name: "PasswordRequest",

    data(){
        return {
            email: ''
        }      
    },

    methods: {
        async handleSubmit() {
            const response = await axios.post('forgot', {
                email: this.email
            });     
            console.log(response);     
        }
        
    }

}
</script>

<style>

</style>