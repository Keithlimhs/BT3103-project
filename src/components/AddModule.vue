<template>
  <div class = "container1">
      <form id = "myform">
          <h1><U>Add Module</U></h1>

          <div class = "form">
            <input class = "input1" type = "text" id = "modulecode" placeholder = "Module Code">
            <span class="asterisk_input">  </span>   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                   
            <input class = "input1" type = "text" id = "gradeattained" placeholder = "Grade Attained">
            <span class="asterisk_input">  </span> <br><br><br>
            <input class = "input1" type = "text" id = "enteray" placeholder = "AY (e.g. 21/22)">
            <span class="asterisk_input">  </span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   
            <input class = "input1" type = "text" id = "profname" placeholder = "Prof Name"> <br><br><br>
            <input class = "input1" type = "text" id = "semtaken" placeholder = "Sem Taken">
            <span class="asterisk_input">  </span> <br><br><br>   
            
            <div class = "options">
                <div class = "add">
                    <button class = "button" id = "addbutton" type = "button" v-on:click="addmodule()">Add</button><br><br>
                </div>
                <div class = "exit">
                    <button class = "button" id = "exitbutton" type = "button" v-on:click="TogglePopup()">Exit</button><br><br> 
                </div>
            </div>  
          </div>
      </form>
  </div> 
</template>

<script>
import "@fontsource/m-plus-rounded-1c";
import firebaseApp from "@/firebase.js"
import { getFirestore } from "firebase/firestore"

import { doc, updateDoc, arrayUnion } from "firebase/firestore"
import { getAuth, } from "firebase/auth"
const db = getFirestore(firebaseApp)

export default {
    data(){
        return{
            code:"", grade:"", ay:"", prof:"", sem:""
        }
    },
    props: ['TogglePopup'],

    mounted() {
        const auth = getAuth()
        this.fbuser = auth.currentUser.email;
    },

    methods: {
        async addmodule() {
            this.code = document.getElementById("modulecode").value;
            this.grade = document.getElementById("gradeattained").value;
            this.ay = document.getElementById("enteray").value;
            this.prof = document.getElementById("profname").value;
            this.sem = document.getElementById("semtaken").value;
            if (this.code == '' || this.grade == '' || this.ay == '' || this.sem == '') {
                alert("Please fill in required fills");
            } else {
                alert("Saving data for module: " + this.code);
                try{
                    const docRef = await updateDoc(doc(db, "Tutor", this.fbuser), {
                        ModulesAvailable: arrayUnion({
                        ModuleCode: this.code, 
                        GradeAttained: this.grade,
                        AY: this.ay,
                        ProfName: this.prof,
                        SemTaken: this.sem, 
                        isVisible: false})

                    })
                    console.log(docRef)
                    document.getElementById("myform").reset();
                    this.$emit("added")
                
                }
                catch(error) {
                    console.error("Error adding document: ", error)
                }
            }
        }
    }
}
</script>



<style>
.container1 {
    display: flex;
    flex-direction: row;
    justify-content: center;
    
}

form {
    background-color: #ACB3BF ;
}

h1 {
    text-align: center;
    font-family: "M PLUS Rounded 1c";
    font-weight: 900;
}

.asterisk_input:after {
content:"*"; 
color: #e32;
position: absolute; 
font-size: x-large; 
}

.input1{
    font-family: "M PLUS Rounded 1c";
    text-align: center;
    font-size: 80%;
    padding: 5px;
    border: grey;
    border-radius: 5px;

} 

.options {
    display: flex;
    flex-direction: row;
    justify-content: center;

}


.button {
    
    padding: 7px;
    border-radius: 10px;
    width: 100px;
    font-weight: 750;
    font-size:75%;
    font-family: "M PLUS Rounded 1c";
}

#addbutton {
    background-color: greenyellow;
    margin-right: 40px;
}



#exitbutton {
    background-color: #d45b5b;
    margin-left: 40px;
}




.button:hover {
    background-color: rgb(214, 154, 211);
    box-shadow: 3px 2px purple
}

</style>