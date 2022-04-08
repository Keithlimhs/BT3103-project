<template>
<div id="backgroundColor">
<link href='https://fonts.googleapis.com/css?family=M PLUS Rounded 1c' rel='stylesheet'>

  <div class= "topArt">
    <img src="@/images/TopLogo.png" alt="logo" width = 60>
  </div>
  
  <h1>Sign up for modsmatch@nus</h1>
  
  <div class ="form">
      <form id="signUpForm">
        <div class = "formli">
          <label for="email"> <strong> Email: </strong> </label>
          <input type= "text" id= "email" required = "" placeholder= "Enter your email here" size = "30"> <br><br>

          <label for = "password"> <strong> Password: </strong> </label>
          <input type = "text" id = "password" required = "" placeholder = "Enter password here" size = "30"><br><br>

          <label for = "password2"> <strong> Confirm Password: </strong> </label>
          <input type = "text" id = "password2" required = "" placeholder = "Enter password again here" size = "30"><br><br>
        </div>
        <button class = "createAccountButton" type = "button" v-on:click ="CreateAccount()"> CREATE ACCOUNT </button>
      </form>
  </div>
  
  <div class = "form2">
    <h4> <strong> Already have an account? &nbsp; &nbsp;</strong> </h4>

    <div id = "wrapper2">
        <router-link to ="/TuteeLoginPage"><a> Log in! </a></router-link>
    </div>
  </div>


</div>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword} from "firebase/auth";

import firebaseApp from '../firebase.js';
export default {
    name: 'TuteeSignUpPage',

    data() {
      return {
        FormData: {
          email: '',
          password: '',
          password2: '',
        }
      }
    },

    methods: {
      
      CreateAccount() {
        const auth = getAuth(firebaseApp)
        const email = document.getElementById("email").value
        const password = document.getElementById("password").value
        const password2 = document.getElementById("password2").value
        console.log("Creating account now")

        if (password == password2){
          createUserWithEmailAndPassword(auth, email, password)
          .then(() => {
            console.log("Sign up successful");
            alert("Sign up succesful, you will be directed to the login page");
            this.$router.push('/TuteeLoginPage');
          })
          .catch(error => {
            var errorCode = error.code;
            var errorMessage = error.message;

            console.log(errorCode);
            console.log(errorMessage);

            window.alert("Message : " + errorMessage);
          })
        } else {
          alert("Second Password does not match please try again.")
        }
      },
    },
}

</script>

<style scoped>
#backgroundColor {
  background-color: #E5E5E5 ;
}
.wrapper {
  text-align: center;
}
.forgotPasswordButton {
  border: none;
  background-color: inherit;
  cursor: pointer;
  color: rgb(67, 151, 204);
  font-size: 18px;
  font-family: 'M PLUS Rounded 1c';
  text-decoration: underline;
}
.form2 {
  text-align: center;
  font-family: 'M PLUS Rounded 1c';
}
.formli {
  text-align: right;
  margin-right: 15vw;
}
.form {
  text-align: center;
}
h1{
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

#signUpForm{
  display: inline-block;
  text-align: center;
  font-family: 'M PLUS Rounded 1c';
  width: 50vw;
  margin-left: 25vs;
}

.topArt{
  background-color: #316879;
  min-height: 10vh;
  text-align: left;
}
.createAccountButton {
  color:white;
  background-color: #308C05;
  padding: 6px 6px;
  font-size: 20px;
  cursor: pointer;
  display: inline-block;
  font-family: 'M PLUS Rounded 1c';
  font-weight: bold;
}

#wrapper2 {
  border: none;
  background-color: inherit;
  cursor: pointer;
  display: inline-block;
  color: red;
  font-size: 18px;
  font-family: 'M PLUS Rounded 1c';
}

a {
  color: red;
  text-decoration: none;
  font-family: 'M PLUS Rounded 1c';
  font-weight: bold;
  font-size: 16px;
}
</style>

