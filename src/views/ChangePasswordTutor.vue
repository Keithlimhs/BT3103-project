<template>
<TopHeader/>
    <NavBarTutor/>
    <div id="backgroundColor">
    </div>
<div class = 'emailVerification'>
    <link href='https://fonts.googleapis.com/css?family=M PLUS Rounded 1c' rel='stylesheet'>

    <br><br>
  
  <div class ="form">
      <form id="passwordResetForm">
        <div class = "form">
          <label for="oldPassword"> <strong> Old Password: </strong> </label>
          <input class = "inputOldPassword" type = "password" id = "oldPassword" placeholder= " " size = "30"> <br><br>
          <label for="newPassword"> <strong> New Password: </strong> </label>
          <input class = "inputnewPassword" type = "password" id = "newPassword" placeholder= " " size = "30"> <br><br>
          <label for="passwordConfirm"> <strong> Confirm Password: </strong> </label>
          <input class = "inputconfirmPassword" type = "password" id = "confirmPassword" placeholder= " " size = "30"> <br><br>
        </div>

        <button id = "resetPassword" type="button" v-on:click="resetPassword()"> CHANGE </button>
      </form>
  </div>

  <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

</div>
  
</template>

<script>



// import TopHeaderForSignIn from '@/components/TopHeaderForSignIn.vue'
import NavBarTutor from '@/components/NavBarTutor.vue';
import TopHeader from '@/components/TopHeader.vue'
//import { getAuth, sendSignInLinkToEmail } from "firebase/auth";


export default {


    components: {
        TopHeader,
        NavBarTutor
    },
    name: "ChangePasswordTutor",

    data() {
      return {
        FormData:{
          oldPassword: '',
          newPassword: '',
          confirmPassword: '',
        }
      }
    },

    methods: {
        
    },
    
    
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
  background-color: #E5E5E5
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

#resetPassword {
    background-color: green;;
  padding: 3px;
  width: 15%;
  font-weight: 750;
  font-size: 75%;
  font-family: "M PLUS Rounded 1c";
  color: white;
}
.button:hover {
  background-color: rgb(214, 154, 211);
  box-shadow: 3px 2px purple;
}


html {
  padding: 0;
  margin: 0;
  width: 100%;
  min-height: 100%;
}
</style>
