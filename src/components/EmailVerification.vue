<template>
<div id="backgroundColor">
<link href='https://fonts.googleapis.com/css?family=M PLUS Rounded 1c' rel='stylesheet'>
   
  <div class= "topArt">
    <button type="backbutton" id = "backbutton" 
  @click="hasHistory() 
    ? $router.go(-1) 
    : $router.push('/')">&laquo; 
    </button>

    <img src="src\images\TopLogo.png" alt="logo">
    <h3>PASSWORD RESET</h3>
  </div>
  
  <h2>Recover Password</h2>
  
  <div class ="form">
      <form id="emailVerificationForm">
        <div class = "form">
          <label for="email"> <strong> Email: </strong> </label>
          <input class = "inputemail" type = "text" id = "email" placeholder= "Enter your email here" size = "30"> <br><br>
        </div>

        <button id = "verifyEmail" type="button" v-on:click="verifyEmail()"> Email me a recovery link </button>
      </form>
  </div>

  <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

</div>
</template>

<script>

import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import 'firebase/compat/auth';
import 'firebase/firestore';
import firebaseApp from '../firebase.js';


export default {

    name: "EmailVerification",

    data() {
      return {
        FormData:{
          email: ''
        }
      }
    },

    methods: {
    hasHistory () { return window.history.length > 2 },

    async verifyEmail(){
      const auth = getAuth(firebaseApp)
      const email = document.getElementById("email").value

      if (email != "") {
         sendPasswordResetEmail(auth, email).then(function()
         {
            window.alert("Email has been sent to you, please check and verify");
         })
         .catch(function(error)
         {
             var errorCode = error.code;
             var errorMessage = error.message;

             console.log(errorCode);
             console.log(errorMessage);

             window.alert("Message : " + errorMessage);
         });
      }

      else {
          window.alert("Please enter your email")
      }
      
        
        }
        
    }
}

</script>


<style scoped>
#backgroundColor {
  background-color: #E5E5E5 ;
}
.wrapper {
  text-align: center;
}

.formli {
  text-align: left;
}

h2{
  color: darkblue ;
  font-family: 'M PLUS Rounded 1c';
  text-align: center;
  font-weight: bolder;
}

h4{
  font-family: 'M PLUS Rounded 1c';
  text-align: right;
  font-weight: bold;
  display: inline-block;
  margin: 20;
}

label, .inputemail{
  display: inline;
  flex-direction:column;
}

label {
    font-family: "M PLUS Rounded 1c";
    font-size: 14px;
    text-align: left;
    width: 100px;
}

.inputemail {
    padding: 5px;
    text-align: left;
}

.topArt{
  background-color: #316879;
  min-height: 10vh;
}

h3 {
    font-family: 'M PLUS Rounded 1c';
    color:#E5E5E5;
    text-align: center;
    font-weight: 600;
}

#verifyEmail {
    padding: 3px;
    width: 15%;
    font-weight: 750;
    font-size:75%;
    font-family: "M PLUS Rounded 1c";
    color: grey;
}
.button:hover {
    background-color: rgb(214, 154, 211);
    box-shadow: 3px 2px purple
}

#backButton {
  position:absolute; 
  top: 65px; 
  left: 10px;
  color: grey;
  padding: 1.5px;
  width: 2%;
  border-radius: 15px;
}

html {
  padding: 0;
  margin: 0;
  width: 100%;
  min-height: 100%; 
}

</style>

