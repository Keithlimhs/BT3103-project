<template>
<div id="backgroundColor">
  <TopHeaderForSignIn/>
  
  <h1>Sign up for modsmatch@nus</h1>
  
  <div class ="form">
      <form id="signUpForm">
        <div class = "formli">
          <label for="email"> <strong> Email: </strong> </label>
          <input type= "text" id= "email" required = "" placeholder= "Enter your email here" size = "25"> <br><br>

          <label for = "password"> <strong> Password: </strong> </label>
          <input type = "text" id = "password" required = "" placeholder = "Enter password here" size = "25"><br><br>

          <label for = "password2"> <strong> Confirm Password: </strong> </label>
          <input type = "text" id = "password2" required = "" placeholder = "Enter password again here" size = "25"><br><br>
        </div>
        <button class = "createAccountButton" type = "button" v-on:click ="CreateAccount()"> CREATE ACCOUNT </button>
      </form>
  </div>
  
  <div class = "form2">
    <h4> <strong> Already have an account? &nbsp; &nbsp;</strong> </h4>

    <div id = "wrapper2">
        <router-link to ="/TuteeLoginPage"><a> Log in </a></router-link>
    </div>
  </div>


</div>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import TopHeaderForSignIn from '../components/TopHeaderForSignIn.vue'
// import { collection, getDocs, doc} from "firebase/firestore";
// import { getFirestore } from "firebase/firestore"

import firebaseApp from '../firebase.js';

// const db = getFirestore(firebaseApp);

export default {
    name: 'TuteeSignUpPage',
    components: {
      TopHeaderForSignIn
    },
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
            // alert("Sign up succesful, you will be directed to the login page");
            this.$router.push('/TuteeSetUpPage');
          })
          .catch(error => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
            if (errorCode == 'auth/email-already-in-use') {
              window.alert("This email has been registered already.")
            } else if (password == '' & password2 == '') {
              alert('Please key in a password')
            } 

            // window.alert("Message : " + errorMessage);
          })
        } else{
              alert("Passwords does not match. Please try again.")
        }
      },
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
.forgotPasswordButton {
  border: none;
  background-color: inherit;
  cursor: pointer;
  color: rgb(67, 151, 204);
  font-size: 18px;
  font-family: 'M PLUS Rounded 1c';
  text-decoration: underline;
  padding: 5px 10px;
  font-size: 100%;
}
.form2 {
  text-align: center;
  font-family: 'M PLUS Rounded 1c';
}
.formli {
  text-align: right;
  margin-right: 19vw;
  padding: 10px;
}
.form {
  text-align: center;
  padding: 25px;
}
h1{
  color: #1D427C ;
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
  background-color: inherit;

}

.topArt{
  background-color: #316879;
  min-height: 10vh;
  text-align: left;
}
.createAccountButton {
  color:white;
  background-color: #308C05;
  padding: 6px 20px;
  font-size: 18px;
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

input {
  height: 20px;
}
</style>

