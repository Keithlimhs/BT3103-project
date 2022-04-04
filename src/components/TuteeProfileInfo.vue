<template>
  <div id="backgroundColor">
    <link
      href="https://fonts.googleapis.com/css?family=M PLUS Rounded 1c"
      rel="stylesheet"
    />

    <div class="top">
      <div id="logo">
        <img src="src\images\TopLogo.png" alt="logo" />
      </div>
      <h1>SET UP PROFILE</h1>
    </div>

    <div class="profilePicture">
      <!-- <img src="./assets/Shashank300.jpg"> -->
    </div>

    <div class="wrapper">
      <button class="updateProfilePictureBtn">
        Update profile picture (optional)
      </button>

    </div>

    <div class="form">
      <form id="infoForm">
        <div class="formli">
          <label for="name">Name:</label>
          <input class = "name"
            {{ profileData.Name }}
          />
          <br /><br />
          <span class="asterisk_input"> </span>
          <label for="course">Course:</label>
          <input
            {{ profileData.Course }}
          />
          <br /><br />

          <label for="year">Year of Study:</label>
          <input
            {{ profileData.Year }}
          />
          <br /><br />
          <label for="about">About Myself:</label>
          <input
            {{ profileData.About }}
          />
          <br /><br />
          <label for="website">Website:</label>
          <input
            {{ profileData.Website }}
          />
          <label for="modules">Website:</label>
          <input
            {{ profileData.Modules }}
          />
        </div>
        <button class="saveBtn" v-on:click="handleSubmit()">SAVE</button>
      </form>
    </div>
    <!--
        <div class = wrapper>
            <button class = "saveBtn">SAVE</button>
        </div>  -->
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


export default {

    name: "TuteeProfileInfo",
    data() {
        return {
            fbuser:"",
            profilepicture: '',
            name: '',
            course: '',
            year: '',
            website: '',
            about: '',
        }
    },

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
}

</script>

<style scoped>
#backgroundColor {
  background-color: #e5e5e5;
}
.top {
  background-color: #316879;
  min-height: 10vh;
}
#logo {
  float: left;
}
h1 {
  color: white;
  font-family: "Rounded Mplus 1c Bold";
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
#infoForm {
  display: inline-block;
  text-align: center;
  font-family: "M PLUS Rounded 1c";
}
.updateProfilePictureBtn {
  border: none;
  background-color: inherit;
  cursor: pointer;
  color: red;
  font-size: 10px;
  font-family: "M PLUS Rounded 1c";
  text-decoration: underline;
}
.saveBtn {
  border: 1px solid #000000;
  background-color: #ffa500;
  cursor: pointer;
  color: black;
  display: flex;
  box-sizing: border-box;
  border-radius: 30px;
  font-family: "M PLUS Rounded 1c";
  display: inline-block;
  width: 120px;
  height: 25px;
  font-size: 12px;
}
.asterisk_input:after {
  content: "*";
  color: red;
  font-size: large;
}
</style>
