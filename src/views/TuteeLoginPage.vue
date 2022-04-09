<template>
<div id="backgroundColor">
  <TopHeaderForSignIn/>
  
  <h1>Log in to modsmatch@nus</h1>
  
  <div class ="form">
      <form id="loginForm">
        <div class = "formli">
          <label for="email"> <strong> Email: </strong> </label>
          <input type= "text" id= "email" required = "" placeholder= "Enter your email here" size = "25"> <br><br>

          <label for = "password"> <strong> Password: </strong> </label>
          <input type = "text" id = "password" required = "" placeholder = "Enter password here" size = "25"><br><br>
        </div>
        <button class = "loginButton" type = "button" v-on:click ="Login()"> LOG IN </button>
      </form>
  </div>
  
  <div class = "form2">
    <h4> <strong> Don't have an account? &nbsp; &nbsp;</strong> </h4>
    <div id=wrapper2>
      <router-link to ="/TuteeSignUpPage"><a>Sign Up </a></router-link>
    </div>
  </div>

  <div class = wrapper>
    <button class = "forgotPasswordButton" v-on:click ="ForgotPassword()"> <strong> Forgot password? </strong> </button>
  </div>
</div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import firebaseApp from '../firebase.js';
import TopHeaderForSignIn from '../components/TopHeaderForSignIn.vue'

export default {
    name: 'TuteeLoginPage',
    components: {
      TopHeaderForSignIn,
    },

    data() {
      return {
        FormData: {
          email: '',
          password: '',
        }
      }
    },

    methods: {
      Login() {
        const auth = getAuth(firebaseApp)
        const email = document.getElementById("email").value
        const password = document.getElementById("password").value

        signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          console.log("Log in successful");
          // alert("Login succesful, you will be directed to the home page");
          this.$router.push('/TuteeHome');
        })
        .catch(error => {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorCode);
          console.log(errorMessage);
          if (errorCode == 'auth/invalid-email') {
            window.alert("Invalid email")
          }
          else if (errorCode == 'auth/wrong-password') {
            window.alert("Wrong password")
          }
        })
      },

      ForgotPassword(){
        this.$router.push('/EmailVerification');
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
  text-align: center;
}
.form {
  text-align: center;
}
h1{
  color: #1D427C ;
  font-family: 'M PLUS Rounded 1c';
  text-align: center;
  font-weight: bolder;
  padding: 10px;
}

h4{
  font-family: 'M PLUS Rounded 1c';
  text-align: right;
  font-weight: bold;
  display: inline-block;
  margin: 20;
}

#loginForm{
  padding: 10px;
  display: inline-block;
  text-align: center;
  font-family: 'M PLUS Rounded 1c';
  width: 50vw;
  margin-left: 25vs;
  background-color:inherit;
}

.topArt{
  background-color: #316879;
  min-height: 10vh;
  text-align: left;
}
.loginButton {
  color:white;
  background-color: #308C05;
  padding: 5px 10px;
  font-size: 100%;
  cursor: pointer;
  display: inline-block;
  font-family: 'M PLUS Rounded 1c';
  font-weight: bold;
}


#wrapper2{
  border: none;
  background-color: inherit;
  cursor: pointer;
  display: inline-block;
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

label {
  display: inline-block;
  float: left;
  clear: left;
  width: 20vw;
  text-align: right;
  padding-right: 20px;
}

input {
  display: inline-block;
  float: left;

}

.form2 {
  padding: 10px;
}



</style>

