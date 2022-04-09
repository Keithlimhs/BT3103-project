<template>
  <div class="dropdown">
                <button class="dropbtn">
                    <i class="fa fa-caret-down"></i>
                </button>
                <div class="dropdown-content">
                    <a href="#"> 
                        <img id = "home_icon" v-bind:src = "require('@/assets/home_icon.png')" alt = "error" width = 20>
                        <button id="goToHomePage" @click="GoToHomePage()"> Home </button></a>
                    <a href="#"> 
                        <img id = "chat_icon" v-bind:src = "require('@/assets/chat_icon.png')" alt = "error" width = 20>
                        Chat</a>
                    <a href="#">
                        <img id = "settings_icon" v-bind:src = "require('@/assets/settings_icon.png')" alt = "error" width = 20>
                        Settings</a>
                    <a href="#">
                        <img id = "switch_account_icon" v-bind:src = "require('@/assets/switch_account_icon.png')" alt = "error" width = 20>
                        Switch Accounts</a>
                    <a href="#">
                        <img id = "logout_icon" v-bind:src = "require('@/assets/logout_icon.png')" alt = "error" width = 20>
                        <button id="logout" @click="LogOut()"> Log Out </button></a>
                </div>
            </div>
</template>

<script>
import { getAuth, signOut } from "firebase/auth";
import firebaseApp from '../firebase.js';
export default {
    name: "DropdownMenuTutor",
    methods:{
        
        LogOut(){
            const auth = getAuth(firebaseApp)
            signOut(auth).then(() => {
                alert("Sign out successful, you will be directed to main page now");
                this.$router.push('/');
            })
            .catch(error => {
                var errorCode = error.code;
                var errorMessage = error.message;

                console.log(errorCode);
                console.log(errorMessage);
            });
        },

        GoToHomePage(){
            this.$router.push('/TutorHome');
        }
    }
}
</script>

<style>
.dropdown {
  float: right;
  overflow: hidden;
  display:inline;
}

.dropdown .dropbtn {
  font-size: 16px;  
  border: none;
  outline: none;
  color: white;
  padding: 14px 16px;
  background-color: inherit;
  font-family: inherit;
  margin: 0;
  margin-right: 5vw;
  margin-top: 5vw;
}
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  margin-top: -3vw;
}

.dropdown-content a {
  float: none;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdown-content a:hover {
  background-color: #ddd;
}

.dropdown:hover .dropdown-content {
  display: block;
}

#logout, #goToHomePage{
    border: none;
    background-color: inherit;
    padding: 14px 28px;
    font-size: 16px;
    cursor: pointer;
    display: inline-block;
    max-height: 3%;
}
</style>