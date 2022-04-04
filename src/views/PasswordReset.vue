<template>
<div id="backgroundColor">
<link href='https://fonts.googleapis.com/css?family=M PLUS Rounded 1c' rel='stylesheet'>
   
  <div class= "topArt">
    <img src="src\images\TopLogo.png" alt="logo">
    <h3>PASSWORD RESET</h3>
  </div>
  
  <h2>Reset Password</h2>
  
  <div class ="form">
      <form id="passwordResetForm">
        <div class = "form">
          <label for="newPassword"> <strong> New Password: </strong> </label>
          <input class = "inputnewPassword" type = "password" id = "newPassword" placeholder= " " size = "30"> <br><br>
          <label for="passwordConfirm"> <strong> Confirm Password: </strong> </label>
          <input class = "inputconfirmPassword" type = "password" id = "passwordConfirm" placeholder= " " size = "30"> <br><br>
        </div>

        <button id = "verifyEmail" type="button" v-on:click="resetPassword()"> Reset Password </button>
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
        resetPassword() {
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


<style scoped>
#backgroundColor {
  background-color: #e5e5e5;
}
.wrapper {
  text-align: center;
}

.formli {
  text-align: left;
}

h2 {
  color: darkblue;
  font-family: "M PLUS Rounded 1c";
  text-align: center;
  font-weight: bolder;
}

h4 {
  font-family: "M PLUS Rounded 1c";
  text-align: right;
  font-weight: bold;
  display: inline-block;
  margin: 20;
}

label,
.inputemail {
  display: inline;
  flex-direction: column;
}

label {
  font-family: "M PLUS Rounded 1c";
  font-size: 14px;
  text-align: center;
  width: 200px;
  display: inline-block;
}

.inputemail {
  padding: 5px;
  text-align: left;
}

.topArt {
  background-color: #316879;
  min-height: 10vh;
}

h3 {
  font-family: "M PLUS Rounded 1c";
  color: #e5e5e5;
  text-align: center;
  font-weight: 600;
}

#verifyEmail {
  padding: 3px;
  width: 15%;
  font-weight: 750;
  font-size: 75%;
  font-family: "M PLUS Rounded 1c";
  color: grey;
}
.button:hover {
  background-color: rgb(214, 154, 211);
  box-shadow: 3px 2px purple;
}

#backButton {
  position: absolute;
  top: 65px;
  left: 10px;
}

html {
  padding: 0;
  margin: 0;
  width: 100%;
  min-height: 100%;
}
</style>
