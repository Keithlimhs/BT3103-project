<template>
    <div class="topnav">
        <div id = "myTopnav">           
            <router-link to ="/TuteeProfileDisplayPage">Tutee Profile Display</router-link> 
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
    background-color: #316879;
    height: 50px;
    width: 100%;
    float: center;
   margin: 0;
     font-family: "M PLUS Rounded 1c";
}

/* Style the links inside the navigation bar */
.topnav a {
  float: left;
  font-family: "M PLUS Rounded 1c";
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 13px 250px;
  text-decoration: none;
  font-size: 16px;
  width: 100%,
}

/* Change the color of links on hover */
.topnav a:hover {
  background-color: lightblue;
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
    background-color: rgb(156, 172, 178);
    color: black;
}

</style>