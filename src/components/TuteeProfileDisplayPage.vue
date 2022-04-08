<template>
    <div id="backgroundColor">
        <link href='https://fonts.googleapis.com/css?family=M PLUS Rounded 1c' rel='stylesheet'>

        <div class="top">
            <div id="logo">
            <img src="../assets/Logo.jpeg" alt="logo">
            </div>
            <h1>PROFILE</h1>
        </div>

        <div class="profilePicture">
            <img src="../assets/Noprofilepicture.jpeg">
        </div>

        <div class = wrapper>
            <button class = "updateProfilePictureBtn">Update profile picture (optional)</button>
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
            <button class="edit" v-on:click="editProfile()" >SAVE</button>
        </div>    
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
// import { getAuth} from 'firebase/auth';
import firebaseApp from '../firebase.js';
import { doc, getFirestore } from "firebase/firestore";
import { getDoc } from "firebase/firestore";

const db = getFirestore(firebaseApp);

export default {

    name: "TuteeProfileInfo",
    data() {
        return {
            fbuser: "hslim03@hotmail.com",
            name: '',
            course: '',
            year: '',
            about: '',
        }
    },

  mounted(){
  // const auth = getAuth();   
  this.fbuser = "hslim03@hotmail.com"; 
  // this.fbuser = firebase.auth().currentUser.email
  this.display(this.fbuser)},
  

    methods: {
    
    async display(user) {
      console.log(user)
      // const docRef = await getDocs(doc(db, "TuteeDetails", this.name))
      const docRef = doc(db, String(user), "tuteeprofile")
      const userProfileDoc = await getDoc(docRef)
      const userProfile = userProfileDoc.data()
      console.log(userProfile)
      
      // const docRef = await getDocs(collection(db, "hslim03@hotmail.com"))

//       if (userProfile.exists()) {
//   console.log("Document data:", userProfile.data());
// } else {
//   // doc.data() will be undefined in this case
//   console.log("No such document!");
// }
      var name = (userProfile.name)
      var course = (userProfile.course)
      var year = (userProfile.year)
      var about = (userProfile.About)
      document.getElementById('tuteeName').value = name;
      document.getElementById('tuteeCourse').value = course;
      document.getElementById('tuteeYear').value = year;
      document.getElementById('tuteeAbout').value = about;
      
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

h1 {
  color: darkblue;
  font-family: "M PLUS Rounded 1c";
  text-align: center;
  font-weight: bolder;
}
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
.editProfile {
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