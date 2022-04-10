<template>
    <TopHeader/>
      <NavBarTutor/>

      <div class="profilePicture">
            <img v-bind:src="require('../assets/Noprofilepicture.jpeg')" >
        </div>

      
         <div class = wrapper>
            <ProfilePic/>
        </div>
      
        <div class = wrapper>
            <button class = "updateProfilePictureBtn">Update profile picture (optional)</button>
        </div>
        
        <div class ="form">
            <form id="setupForm">
                <div class = "formli">
                    <label for="tutorname">Name:</label>
                    <input type= "text" id= "tutorName" placeholder= "Enter your name here" size = "30"> 
                    <span class="">  </span> <br><br>
                    <label for="tutorcourse">Course:</label>
                    <input type= "text" id= "tutorCourse" placeholder= "Enter your course here" size = "30">
                    <span class="">  </span> <br><br>
                    <label for="tutoryear">Year of Study:</label>
                    <input type= "text" id= "tutorYear"  placeholder= "Enter your year of study here" size = "30">
                    <span class="">  </span> <br><br>
                    <label for="tutorwebsite">Website:</label>
                    <input type= "text" id= "tutorWebsite" placeholder= "Enter your website here" size = "30"> <br><br>
                    <label for="tutorabout">About Myself:</label>
                    <input type= "text" style="height: 100px" id= "tutorAbout" placeholder= "You may inlude a brief description of yourself and your expected rate here" size = "40"> <br><br>
                </div>
            </form>
            <div class="modules">
                    <label for="modules">Modules Available:</label> 
                    <p>{{modules}} </p> <br>
                    
                    
            </div>
           

        </div>
       <div class = wrapper>
            <button class="edit" v-on:click="editProfile()" >Edit Profile</button>
        </div>    
</template>       

        

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
// import { getAuth} from 'firebase/auth';
import firebaseApp from '../firebase.js';
import { doc, getFirestore } from "firebase/firestore";
import { getDoc } from "firebase/firestore";
import NavBarTutor from '@/components/NavBarTutor.vue'
import TopHeader from '@/components/TopHeader.vue'
const db = getFirestore(firebaseApp);
export default {
    name: "TutorProfileInfo",
    components: {
      TopHeader,
      NavBarTutor,
    },
    
    data() {
        return {
            fbuser: "",
            name: '',
            course: '',
            year: '',
            website: '',
            about: '',
            modules:'',
        }
    },
  mounted(){
  // const auth = getAuth();   
  this.fbuser = "shashank@gmail.com"; 
  // this.fbuser = auth.currentUser.email;
  this.display(this.fbuser)},
  
    methods: {

    
    async display(user) {
      console.log(user)
      // const docRef = await getDocs(doc(db, "TuteeDetails", this.name))
      const docRef = doc(db, "Tutor", String(user))
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
      var about = (userProfile.About)
      var website = (userProfile.Website)
      var modules = (userProfile.ModulesAvailable)
      console.log(modules[0].ModuleCode)
      document.getElementById('tutorName').value = name;
      document.getElementById('tutorCourse').value = course;
      document.getElementById('tutorYear').value = year;
      document.getElementById('tutorWebsite').value = website;
      document.getElementById('tutorAbout').value = about;
      this.modules = modules[0].ModuleCode
      document.getElementById('tutorModules').value = modules;
      
    }
    }
    
}
  
    
    // mounted(){
    //     const auth = getAuth(firebaseApp);
    //     this.fbuser = 'hslim03@hotmail.com';
    //     this.display(this.fbuser);
    //   const db = getFirestore(firebaseApp);
    //   db.collection('Tutor Profile').doc(auth.currentUser.uid).
    //           onSnapshot(function(doc){
    //                 console.log('current data:', doc.data())
    //                 var newData = doc.data()
    //                 this.profileData = newData;
    //               })
    //         }
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
/* h1 {
  color: darkblue;
  font-family: "M PLUS Rounded 1c";
  text-align: center;
  font-weight: bolder;
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
/* .form {
  background-color: #E5E5E5
}

.formli {
  
  background-color: #E5E5E5;
    padding: 1rem 1rem;
  vertical-align: top;
}

.modules {
  display: inline-block;
  padding: 1rem 1rem;
  margin: 1rem;
  vertical-align: top;
}
#backgroundColor {
  background-color: #E5E5E5 ;
} */
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
.form {
  text-align: center;
}
label {
  font-family: "M PLUS Rounded 1c";
  font-size: 14px;
  text-align: center;
  width: 200px;
  display: inline-block;
}
.updateProfilePictureBtn {
  border: none;
  background-color: inherit;
  cursor: pointer;
  color: red;
  font-size: 10px;
  font-family: 'M PLUS Rounded 1c';
  text-decoration: underline;
}
.edit {
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

</style>