<template>
    <div id="backgroundColor">
        <TopHeaderForSignIn pageName = "SET UP PROFILE"/>

        <div class="profilePicture">
            <img v-bind:src="require('../assets/Noprofilepicture.jpeg')" >
        </div>

        <div class = wrapper>
            <button class = "updateProfilePictureBtn">Update profile picture (optional)</button>
        </div>
        
        <div class ="form">
            <form id="setupForm">
                <div class = "formli">
 
                    <label for="tuteename">Name:</label>
                    <input type= "text" id= "tuteename" required = "" placeholder= "Enter your name here" size = "30">  <span class="asterisk_input">  </span><br><br>
  
                    <label for="tuteecourse">Course:</label>
                    <input type= "text" id= "tuteecourse" required = "" placeholder= "Enter your course here" size = "30"> <span class="asterisk_input">  </span><br><br>
    
                    <label for="tuteeyear">Year of Study:</label>
                    <input type= "text" id= "tuteeyear" required = "" placeholder= "Enter your year of study here" size = "30"> <span class="asterisk_input">  </span><br><br>
                    <label for="tuteeabout">About Myself:</label>
                    <input type= "text" style="height: 100px" id= "tuteeabout" required = "" placeholder= "Enter description" size = "30">&nbsp; &nbsp;<br><br> 
                </div>
            </form>
        </div>
        <div class = wrapper>
            <button class="saveBtn" v-on:click="handleSubmit()" >SAVE</button>
        </div>    
    </div>
</template>

<script>
import firebaseApp from '../firebase.js';
import { getFirestore } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";
import TopHeaderForSignIn from '../components/TopHeaderForSignIn.vue'
import {getAuth, onAuthStateChanged} from 'firebase/auth';

const db = getFirestore(firebaseApp)

export default {
    name: "TutorSetUpPage",
    components: {
      TopHeaderForSignIn
    },

    data() {
        return {
            name: "",
            course: "",
            year: "",
            about: "",
        }
    },
    methods: {
        async handleSubmit() {
            const auth = getAuth(firebaseApp);
            onAuthStateChanged(auth, (user) => {
              if (user) {
              this.fbuser = user.email;
              console.log("Signed in")
              } else {
                console.log("Sign out")
              }
            })
            this.name = document.getElementById("tuteename").value;
            this.course = document.getElementById("tuteecourse").value;
            this.year = document.getElementById("tuteeyear").value;
            this.about = document.getElementById("tuteeabout").value;
            alert("Saving data for Tutee: " + this.name);
            try{
                let docRef = await setDoc(doc(db, "Tutee", this.fbuser), {
                    Email: this.fbuser,
                    Name: this.name,
                    Course: this.course,
                    Year: this.year,
                    AboutMe: this.about,
                    tutorIds: [],
                    profilePic: ""
                })
                console.log(docRef)
                document.getElementById("setupForm").reset();
                this.$emit("added")
            }
            catch(error) {
                console.error("Error adding document: ", error)
            }
        }
    
  }
}
</script>

<style scoped>
#backgroundColor {
  background-color: #E5E5E5 ;
}
.top{
  background-color: #316879;
  min-height: 10vh;
}
#logo{
    float: left;
}
h1{
  color: white ;
  font-family: 'Rounded Mplus 1c Bold';
  text-align: center;
  font-weight: 700;
  font-style: normal;
  align-items: center;
  line-height: 74px;
}
.wrapper {
  text-align: center;
}
.formli {
  text-align: right;
}
.form {
  text-align: center;
}
#setupForm{
  display: inline-block;
  text-align: center;
  font-family: 'M PLUS Rounded 1c';
}
.updateProfilePictureBtn {
  border: none;
  background-color: inherit;
  cursor: pointer;
  color: red;
  font-size: 10px;
  font-family: 'M PLUS Rounded 1c';
  text-decoration: underline;
  padding-bottom: 30px;
}
.saveBtn {
  border: 1px solid #000000;
  background-color: #FFA500;
  cursor: pointer;
  color: black;
  display: flex;
  box-sizing: border-box;
  border-radius: 30px;
  font-family: 'M PLUS Rounded 1c';
  display: inline-block;
  width: 120px;
  height: 25px;
  font-size: 12px;
}
.asterisk_input:after {
content:"*"; 
color: red;
font-size: large; 
}

img {
  padding: 10px;
  width: 10em;

}

label {
  padding-right: 10px;
}
</style>