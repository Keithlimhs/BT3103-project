<template>
<link href='https://fonts.googleapis.com/css?family=M PLUS Rounded 1c' rel='stylesheet'>
  <div class="dropdown">
                <button class="dropbtn">
                    <i class="fa fa-caret-down"></i>
                </button>
                <div class="dropdown-content">
                    <a href="#"> 
                        <img id = "home_icon" v-bind:src = "require('@/assets/home_icon.png')" alt = "error" width = 20>
                        <button id="goToHomePage" @click="GoToHomePage()"> Home </button></a>
                    <a href="#"> 
                        <img id = "chat_icon" v-bind:src = "require('@/assets/chat_icon.png')" alt = "error" width = 30>
                        Chat</a>
                    <a href="#">
                        <img id = "settings_icon" v-bind:src = "require('@/assets/settings_icon.png')" alt = "error" width = 20>
                        Settings</a> 
                        <div id="wrapper"><button id="profile" @click="GoToProfile()">Profile Information</button> <button id="privacy">Privacy</button> <button id="user_guidelines">User Guidelines</button></div>
                    <a href="#">
                        <img id = "switch_account_icon" v-bind:src = "require('@/assets/switch_account_icon.png')" alt = "error" width = 20>
                        <button id="switchAccount" @click="SwitchAccount()"> Switch Account </button></a>
                    <a href="#">
                        <img id = "logout_icon" v-bind:src = "require('@/assets/logout_icon.png')" alt = "error" width = 20>
                        <button id="logout" @click="LogOut()"> Log Out </button></a>
                </div>
            </div>
</template>

<script>
import { getAuth, signOut } from "firebase/auth";
import firebaseApp from '../firebase.js';
import { doc, getDoc, getFirestore } from "firebase/firestore";
const db  = getFirestore(firebaseApp)
export default {
    name: "DropdownMenu",
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
            this.$router.push('/TuteeHome');
        },

        SwitchAccount(){
            const auth = getAuth(firebaseApp)
            const email = auth.currentUser.email
            getDoc(doc(db, "Tutor", email)).then(docSnap => {
                console.log('checking for docsnap now')
                if (docSnap.exists()) {
                    console.log(docSnap.exists())
                    this.$router.push('/TutorHome')
                } else {
                    alert('You do not have a tutor account set up')
                }
            })
        },

        GoToProfile(){
            this.$router.push('TuteeProfileDisplayPage');
        },
    }
}
</script>

<style>
#wrapper{
    text-align: left;
    justify-content: center;
    font-family: 'M PLUS Rounded 1c';
    font-size: 13px;
}
#user_guidelines:hover, #profile:hover, #privacy:hover{
    background-color: #ddd;
}
#user_guidelines, #profile, #privacy{
    text-align: left;
    border: none;
    background-color:inherit ;
    cursor: pointer;
    display: inline-block;
    margin-left: 3vw;
    font-size: 13px;
    font-family: 'M PLUS Rounded 1c';
    
}
.dropdown {
  float: right;
  overflow: hidden;
  display:inline;
  margin-right: 0px;
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
  min-width: 10vw;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  margin-top: -3vw;
  font-family: 'M PLUS Rounded 1c';
  outline: solid;
  outline-color: black;
  margin-right:3vw;
}

.dropdown-content a {
  float: none;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
  font-size: 13px;
}

.dropdown-content a:hover {
  background-color: #ddd;
} 

.dropdown:hover .dropdown-content {
  display: block;
}

#logout, #goToHomePage, #switchAccount{
    border: none;
    background-color: inherit;
    padding: 14px 20px;
    font-size: 16px;
    cursor: pointer;
    display: inline-block;
    font-family: 'M PLUS Rounded 1c';
    font-size: 13px;
    
}
</style>