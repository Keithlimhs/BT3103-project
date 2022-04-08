<template>
    <div id="backgroundColor">
        <link href='https://fonts.googleapis.com/css?family=M PLUS Rounded 1c' rel='stylesheet'>

        <div class="top">
            <img id="logo" v-bind:src="require('../assets/Logo.jpeg')" alt="logo" />
            <h1>SET UP PROFILE</h1>
        </div>

        <div class = wrapper>
            <ProfilePic/>
        </div>
    
        <div class ="form">
            <form id="setupForm">
                <div class = "formli">
                    <label for="tuteename">Name:</label>
                    <input type= "text" id= "tuteename" required = "" placeholder= "Enter your name here" size = "30"> 
                    <span class="asterisk_input">  </span><br><br>
                    <label for="tuteecourse">Course:</label>
                    <input type= "text" id= "tuteecourse" required = "" placeholder= "Enter your course here" size = "30"> 
                    <span class="asterisk_input">  </span><br><br>
                    <label for="tuteeyear">Year of Study:</label>
                    <input type= "text" id= "tuteeyear" required = "" placeholder= "Enter your year of study here" size = "30"> 
                    <span class="asterisk_input">  </span><br><br>
                    <label for="tuteeabout">About Myself:</label>
                    <input type= "text" style="height: 60px" id= "tuteeabout" required = "" placeholder= "Enter description" size = "30"> <br><br> 
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
import ProfilePic from "../components/ProfilePicture.vue"

const db = getFirestore(firebaseApp)

export default {
    name: "TuteeSetUpPage",

    components: {
        ProfilePic,
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
            this.name = document.getElementById("tuteename").value;
            this.course = document.getElementById("tuteecourse").value;
            this.year = document.getElementById("tuteeyear").value;
            this.about = document.getElementById("tuteeabout").value;
            alert("Saving data for Tutee: " + this.name);
            try{
                const docRef = await setDoc(doc(db, "TuteeDetails", this.name), {
                    Name: this.name,
                    Course: this.course,
                    Year: this.year,
                    AboutMe: this.about,
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
#logo {
height: 5%;
width: 5%;
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
  display: inline-block;
  padding: 1rem 1rem;
  vertical-align: top;
}
.form {
  text-align: center;
}
#setupForm{
  display: inline-block;
  background-color: #E5E5E5;
  text-align: center;
  padding: 1rem 1rem;
  vertical-align: top;
  font-family: 'M PLUS Rounded 1c';
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
position: absolute;
}
</style>