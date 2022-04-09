<template>
    <div id = "header">

        <a href = "history.back()" class = "previous"><img id = "back" v-bind:src="require('@/assets/backbutton.png')" alt="error"></a>
        

        <div class="dropdown">
                <img id = "profilePic" v-bind:src = "require('@/assets/logo.png')" alt = "error">
                <button class="dropbtn">
                    <i class="fa fa-caret-down"></i>
                </button>
                <div class="dropdown-content">
                    <a href="#"> 
                        <img id = "home_icon" v-bind:src = "require('@/assets/home_icon.png')" alt = "error" width = 20>
                        Home</a>
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
                        Log Out</a>
                </div>
            </div>


        <h2 id = "title">{{ pageName }}</h2>
    </div>
</template>

<script>
export default {


    props: {
            pageName: String

    }

    
}
</script>

<style scoped>
#logo {
    width: 60px
}
div {
    background-color: #316879;
    height: 75px;
}

a {
    padding-top: 10px;
    margin-left: 10px;
    float: left;
    height: 0px;
}

h2 {
    padding-top: 10px;
    color: white;
    text-align: center;
}

img {
    width: 50px;
    float: right;
    height: auto;
}

#back {
    width: 30px;
}





.dropdown {
  float: right;
  overflow: hidden;
  display:inline;
  background-color: white;
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
}
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
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
</style>
