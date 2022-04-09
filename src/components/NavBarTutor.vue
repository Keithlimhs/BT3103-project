<template>
    <div class="topnav">
        <div id = "myTopnav">           
            <router-link to ="/TutorProfile">Tutor Profile Display</router-link> 
            <router-link to ="/ChangePassword">Change Password</router-link> 
            <router-link to ="/UserGuidelines">User Guidelines</router-link>
        </div>
    </div>
</template>

<script> 
import { getAuth, onAuthStateChanged } from 'firebase/auth';
export default {
    name: 'NavBar',
    data() {
        return {
            user: false,
        }
    },
    mounted() {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                this.user = user;
            }
        })
    }
}
</script>

<style scoped>
.topnav {
    background-color: grey;
    height: 3.5vw;
    float: center;
     font-family: "M PLUS Rounded 1c";
}
/* Style the links inside the navigation bar */
.topnav a {
  float: left;
  font-family: "M PLUS Rounded 1c";
  display: block;
  color: black;
  text-align: center;
  padding: 1vw 12.3vw;
  text-decoration: none;
  font-size: 1vw;
}
/* Change the color of links on hover */
.topnav a:hover {
  background-color: lightgrey;
  color: black;
}
/* Add an active class to highlight the current page */
.topnav a.active {
  background-color: #04AA6D;
  color: white;
}
/* Hide the link that should open and close the topnav on small screens */
.topnav .icon {
  display: none;
}
.topnav a.router-link-exact-active {
    background-color: rgba(192, 192, 192, 0.851);
    color: black;
}
</style>