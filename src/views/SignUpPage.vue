<template>
<div id="backgroundColor">
<link href='https://fonts.googleapis.com/css?family=M PLUS Rounded 1c' rel='stylesheet'>

  <div class= "topArt">
    <img src="@\images\TopLogo.png" alt="logo" width = 60>
  </div>
  
  <h1>Sign up for modsmatch@nus</h1>
  
  <div class ="form">
      <form id="signUpForm">
        <div class = "formli">
          <label for="email"> <strong> Email: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong> </label>
          <input type= "text" id= "email" required = "" placeholder= "Enter your email here" size = "30"> <br><br>

          <label for = "password"> <strong> Password: </strong> </label>
          <input type = "text" id = "password" required = "" placeholder = "Enter password here" size = "30"><br><br>

          <label for = "password2"> <strong> Confirm Password: </strong> </label>
          <input type = "text" id = "password2" required = "" placeholder = "Enter password again here" size = "30"><br><br>
        </div>
        <button class = "createAccountButton" onclick = "CreateAccount()"> CREATE ACCOUNT </button>
      </form>
  </div>
  
  <div class = "form2">
    <h4> <strong> Already have an account? &nbsp; &nbsp;</strong> </h4>

    <div id = "wrapper2">
        <router-link to ="/LoginPage"> Log in! </router-link>
    </div>
  </div>


</div>
</template>

<script>

export default {
    name: 'SignUpPage',

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
</style>

