<template>
    <div id="backgroundColor">
      <TopHeaderForSignIn pageName = "SET UP PROFILE"/>
        <div class="profilePicture">
            <img v-bind:src="require('../assets/Noprofilepicture.jpeg')" >
        </div>
        <div class = wrapper>
            <ProfilePicture/>
        </div>
        
        <div class ="form">
            <form id="setupForm">
                <div class = "formli">
                    <label for="tutorname">Name:</label>
                    <input type= "text" id= "tutorname" placeholder= "Enter your name here" size = "30"> 
                    <span class="asterisk_input">  </span> <br><br>
                    <label for="tutorcourse">Course:</label>
                    <input type= "text" id= "tutorcourse" placeholder= "Enter your course here" size = "30">
                    <span class="asterisk_input">  </span> <br><br>
                    <label for="tutoryear">Year of Study:</label>
                    <input type= "text" id= "tutoryear"  placeholder= "Enter your year of study here" size = "30">
                    <span class="asterisk_input">  </span> <br><br>
                    <label for="tutorwebsite">Website:</label>
                    <input type= "text" id= "tutorwebsite" placeholder= "Enter your website here" size = "30"> <br><br>
                    <label for="tutorabout">About Myself:</label>
                    <input type= "text" style="height: 100px" id= "tutorabout" placeholder= "You may inlude a brief description of yourself and your expected rate here" size = "40"> <br><br>
                </div>
            </form>
            <div class="modules">
                    <label for="modules">Modules Available:</label> 
                    &nbsp;
                    <AddModulePopup/>
            </div>
            <div class="list" v-for="module in modules" :key="module">
              <button>{{module}}</button>
            </div>

        </div>
        <div class = wrapper>
            <button class="saveBtn" v-on:click="handleSubmit()" >SAVE</button>
        </div>        
    </div>
</template>

<script>
import firebaseApp from '../firebase.js';
import { getFirestore } from "firebase/firestore";
import { doc, setDoc, getDoc } from "firebase/firestore";
import AddModulePopup from "@/views/AddModulePopup.vue";
import ProfilePicture from "../components/ProfilePicture.vue"
import TopHeaderForSignIn from "../components/TopHeaderForSignIn"
import { getAuth, onAuthStateChanged} from "firebase/auth";

const db = getFirestore(firebaseApp)

export default {
    name: "TutorSetUpPage",

    components: {
        AddModulePopup,
        ProfilePicture,
        TopHeaderForSignIn
    },

    data() {
        return {
            name: "",
            course: "",
            year: "",
            website:"",
            about: "",
            modules: [],
        }
    },
    mounted() {
        const auth = getAuth()
        this.fbuser = auth.currentUser.email;
        async function getmodules(user) {
          let m = await getDoc(doc(db, "Tutor", String(user)))
          return m.data().ModulesAvailable
        }
        onAuthStateChanged(auth, (user) => {
            if (user) {
                this.fbuser = user.email;
                getmodules(this.fbuser).then(data => this.modules = data)
                console.log(this.user)
                // console.log(this.fbuser)
                console.log("Signed in")
            } else {
                console.log("Sign out")
            }
        })
    },
    methods: {
        async handleSubmit() {
            this.name = document.getElementById("tutorname").value;
            this.course = document.getElementById("tutorcourse").value;
            this.year = document.getElementById("tutoryear").value;
            this.website = document.getElementById("tutorwebsite").value;
            this.about = document.getElementById("tutorabout").value;
            if (this.name == '' || this.course == '' || this.year == '') {
              alert('Please fill in all required fields')
            } else {
              alert("Saving data for Tutor: " + this.name);
              try{
                const docRef = await setDoc(doc(db, "Tutor", this.fbuser), {
                    Email: this.fbuser,
                    Name: this.name,
                    Course: this.course,
                    Year: this.year,
                    Website: this.website,
                    About: this.about,
                    ModulesAvailable: []
                })
                let documentRefString = await getDoc(doc(db, "Tutor", this.fbuser))
                console.log(documentRefString)
                let tutorRef = documentRefString.path
                console.log(tutorRef)
                const docRef2 = await setDoc(doc(db, "Modules", this.course), {
                  TutorIds: [tutorRef]
                })
                console.log(docRef)
                console.log(docRef2)
                document.getElementById("setupForm").reset();
                this.$emit("added")
                // this.$router.push('/TutorHome')
            }
            catch(error) {
                console.error("Error adding document: ", error)
            }
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
.modules {
  display: inline-block;
  padding: 1rem 1rem;
  margin: 1rem;
  vertical-align: top;
}
.addModuleBtn{
  border-radius: 5px;
  background: #308C05;
  border: 0.5px solid #000000;
  cursor: pointer;
  color: white;
  box-sizing: border-box;
  width: 100px;
  height: 25px;
  font-size: 12px;
  font-family: 'M PLUS Rounded 1c';
  font-weight: 500;
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
.asterisk_input::after {
content:"*"; 
color: red;
font-size: large; 
}
::-webkit-input-placeholder { 
  white-space:pre-line;  
  position: center;
  top:-7px;

}
img {
  padding: 10px;
  width: 10em;

}
</style>