<template>
      <TopHeader/>
      <NavBarTutee/>
      <br>
        <div class="profilePicture">
            <img v-bind:src="require('../assets/Noprofilepicture.jpeg')" >
        </div>

      <br>
      
         <div class = wrapper>
            <ProfilePic/>
        </div>
        

        <div class ="form">
            <form id="editProfile">
                <div class = "formli">
                    <label for="tuteename">Name:</label>
                    <input type= "text" id= "tuteeName" required = "" placeholder= "Enter your name here" size = "30"> <br><br>
                    <label for="tuteecourse">Course:</label>
                    <input type= "text" id= "tuteeCourse" required = "" placeholder= "Enter your course here" size = "30"> <br><br>
                    <label for="tuteeyear">Year of Study:</label>
                    <input type= "text" id= "tuteeYear" required = "" placeholder= "Enter your year of study here" size = "30"> <br><br>
                    <label for="tuteeabout">About Myself:</label>
                    <input type= "text" style="height: 60px" id= "tuteeAbout" required = "" placeholder= "Enter description" size = "30"> <br><br> 
                </div>
            </form>
        </div>

        <!-- <div v-if="user">
        <div > 
        <img src="@/assets/logo.png" style="width:75px;height:75px;border-radius:50%;border:4px solid #333" /> 
        </div>
        <div>
                <p> Name: <strong>{{user.displayName}}</strong><br/>
                Email: <strong>{{user.email}}</strong><br>
                Uid: <strong>{{user.uid}}</strong><br>
                Provider: <strong>{{user.providerData[0].providerId}}</strong></p>
            </div>
      </div>  -->
        <div class = wrapper>
            <button class="edit" v-on:click="editProfile()" >Edit Profile</button>
        </div>    
</template>

<script>
// import { getAuth } from "firebase/auth";
// import 'firebase/compat/auth';
// import 'firebaseui/dist/firebaseui.css'
// import 'firebase/firestore';
// import firebaseApp from '../firebase.js';
// import { getFirestore } from "firebase/firestore"
// // import { doc } from "firebase/firestore";
// import firebaseApp from '../firebase.js';
// import { getFirestore } from "firebase/firestore"
// import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { getAuth} from 'firebase/auth';
import firebaseApp from '../firebase.js';
import { doc, getFirestore } from "firebase/firestore";
import { getDoc } from "firebase/firestore";
import NavBarTutee from '@/components/NavBarTutee.vue'
import TopHeader from '@/components/TopHeader.vue'
const db = getFirestore(firebaseApp);
import ProfilePic from "../components/ProfilePicture.vue"
export default {
    name: "TuteeProfileInfo",
    components: {
      TopHeader,
      NavBarTutee,
      ProfilePic
    },
    
    data() {
        return {
            fbuser: "",
            name: '',
            course: '',
            year: '',
            about: '',
        }
    },
  mounted(){
  // this.fbuser = "hslim03@hotmail.com"; 
  const auth = getAuth();   
  
  this.fbuser = auth.currentUser.email;
  this.display(this.fbuser)},
  
    methods: {
    
    async display(user) {
      console.log(user)
      // const docRef = await getDocs(doc(db, "TuteeDetails", this.name))
      const docRef = doc(db, "Tutee", String(user))
      const userProfileDoc = await getDoc(docRef)
      const userProfile = userProfileDoc.data()
      console.log(userProfileDoc.data())
      
      // const docRef = await getDocs(collection(db, "hslim03@hotmail.com"))
//       if (userProfile.exists()) {
//   console.log("Document data:", userProfile.data());
// } else {
//   // doc.data() will be undefined in this case
//   console.log("No such document!");
// }
      var name = (userProfile.Name)
      var course = (userProfile.Course)
      var year = (userProfile.Year)
      var about = (userProfile.Description)
      document.getElementById('tuteeName').value = name;
      document.getElementById('tuteeCourse').value = course;
      document.getElementById('tuteeYear').value = year;
      document.getElementById('tuteeAbout').value = about;
      
    }
    }
    
}
  
    
</script>

<style scoped>

<style scoped>
#backgroundColor {
  background-color: #E5E5E5 ;
}
.top{
  background-color: #316879;
  min-height: 10vh;
}
/* #logo {
height: 5%;
width: 5%;
float: left;
} */
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
  margin-top: 200px;
}
.formli {
  text-align: right;
  display: inline-block;
  padding: 1rem 1rem;
  vertical-align: top;
  background-color:#E5E5E5;
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

#editProfile {
  background-color: #E5E5E5;

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

img {
  padding-top: 50px;
  padding-left: 350px;
  width: 10em;
  float: center;
}

.profilePicture {
  float: center;
  text-align: center;
  margin: auto;
  width: 800px;
}

label {
  padding-right: 10px;
}

#button {
  padding-top: 0px;
}

.edit {
  justify-content: center;
  align-items: left;
  border: 1px solid #000000;
  background-color: #FFA500;
  cursor: pointer;
  color: black;
  box-sizing: border-box;
  border-radius: 30px;
  font-family: 'M PLUS Rounded 1c';
  width: 120px;
  height: 25px;
  font-size: 12px;
} 


</style>