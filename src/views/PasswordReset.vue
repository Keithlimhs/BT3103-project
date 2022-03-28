<template>
<div id="backgroundColor">
<link href='https://fonts.googleapis.com/css?family=M PLUS Rounded 1c' rel='stylesheet'>
   
  <div class= "topArt">
    <img src="src\images\TopLogo.png" alt="logo">
    <h3>PASSWORD RESET</h3>
  </div>
  
  <h2>rReset Password</h2>
  
  <div class ="form">
      <form id="passwordResetForm">
        <div class = "form">
          <label for="newPassword"> <strong> New Password: </strong> </label>
          <input class = "inputnewPassword" type = "text" id = "newPassword" placeholder= " " size = "30"> <br><br>
          <label for="passwordConfirm"> <strong> Confirm Password: </strong> </label>
          <input class = "inputconfirmPassword" type = "text" id = "passwordConfirm" placeholder= " " size = "30"> <br><br>
        </div>

        <button id = "verifyEmail" type="button" v-on:click="resetPassword()"> Email me a recovery link </button>
      </form>
  </div>

  <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

</div>
  
</template>

<script>
import { getAuth } from "firebase/auth";
import 'firebase/compat/auth';
import 'firebaseui/dist/firebaseui.css'
import 'firebase/firestore';
import firebaseApp from '../firebase.js';
export default {

    data: function() {
        return {
            newPassword: '',
            passwordConfirm: '',
        }
    },
    methods: {
        resetPassword: function() {
            var newPassword = this.newPassword
            const user = getAuth(firebaseApp)

            // var user = firebase.auth().currentUser;
            console.log ("  User:  "+ user );

            user.updatePassword(newPassword).then(function() {
              // Update successful.
              alert("Reset Password successful")
            }).catch(function(error) {
              var errorCode = error.code;
             var errorMessage = error.message;

             console.log(errorCode);
             console.log(errorMessage);

             window.alert("Message : " + errorMessage);
            });

        },
        checkPasswords: function () {

        }
    }

}
</script>

<style>

</style>