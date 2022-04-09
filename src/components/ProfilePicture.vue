<template>
    <div class="profilePic">
        <button class="choosePicture" v-on:click="choose()">Choose Picture</button>
        <input type="file" ref="input1"
            style="display: none"
            @change="previewImage" accept="image/*" >

        <div v-if="imageData!=null">                     
          <img class="preview" height="268" width="356" :src="img1">
       <br>
       </div>
        <button class = "updateProfilePicBtn" v-on:click="uploadImage()">Update profile picture (optional)</button>
    </div>
</template>

<script>
import firebaseApp from '../firebase.js';
import { getFirestore } from "firebase/firestore";
import 'firebase/storage';

const db = getFirestore(firebaseApp)

export default {
name: "ProfilePicture",

data () {
    return {
      img1: '',
      imageData: null
    }
  },
methods: {
    uploadImage() {
      alert("Saving New Profile Picture")
      const post = {
        photo: this.img1,        
      }
      db.database().ref('PhotoGallery').push(post)
      .then((response) => {
        console.log(response)
      })
      .catch(err => {
        console.log(err)
      })
    },
choose() {
  this.$refs.input1.click()   
},
previewImage(event) {
  this.uploadValue=0;
  this.img1=null;
  this.imageData = event.target.files[0];
  this.onUpload()
},
onUpload(){
  this.img1=null;
  const storageRef=db.storage().ref(`${this.imageData.name}`).put(this.imageData);
  storageRef.on(`state_changed`,snapshot=>{
  this.uploadValue = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
    }, error=>{console.log(error.message)},
  ()=>{this.uploadValue=100;
      storageRef.snapshot.ref.getDownloadURL().then((url)=>{
          this.img1 =url;
          console.log(this.img1)
        });
      }      
    );
 },
}
}
</script>

<style scoped>
.updateProfilePicBtn {
  border: none;
  background-color: inherit;
  cursor: pointer;
  color: red;
  font-size: 10px;
  font-family: 'M PLUS Rounded 1c';
  text-decoration: underline;
}

.profilePic {
    text-align: center;
}
</style>