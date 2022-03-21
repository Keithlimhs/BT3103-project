<template>
<div id="backgroundColor">
<link href='https://fonts.googleapis.com/css?family=M PLUS Rounded 1c' rel='stylesheet'>

  <div class= "topArt">
    <img src="src\images\TopLogo.png" alt="logo">
  </div>
  
  <h1>Log in to modsmatch@nus</h1>
  
  <div class ="form">
      <form id="loginForm">
        <div class = "formli">
          <label for="email"> <strong> Email: </strong> </label>
          <input type= "text" id= "email" required = "" placeholder= "Enter your email here" size = "30"> <br><br>

          <label for = "password"> <strong> Password: </strong> </label>
          <input type = "text" id = "password" required = "" placeholder = "Enter password here" size = "30"><br><br>
        </div>
        <button class = "loginButton"> LOG IN </button>
      </form>
  </div>
  
  <div class = "form2">
    <h4> <strong> Don't have an account? </strong> </h4>
    <button class = "signUpButton"> <strong> Sign up! </strong> </button>
  </div>

  <div class = wrapper>
    <button class = "forgotPasswordButton"> <strong> Forgot password? </strong> </button>
  </div>
</div>
</template>

<script>
export default {
    name: 'LoginPage',
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

#loginForm{
  display: inline-block;
  text-align: center;
  font-family: 'M PLUS Rounded 1c';
  width: 50vw;
  margin-left: 25vs;
}

.topArt{
  background-color: #316879;
  min-height: 10vh;
}
.loginButton {
  color:white;
  background-color: #308C05;
  padding: 6px 6px;
  font-size: 20px;
  cursor: pointer;
  display: inline-block;
  font-family: 'M PLUS Rounded 1c';
  font-weight: bold;
}

.signUpButton {
  border: none;
  background-color: inherit;
  cursor: pointer;
  display: inline-block;
  color: red;
  font-size: 18px;
  font-family: 'M PLUS Rounded 1c';
}
</style>

