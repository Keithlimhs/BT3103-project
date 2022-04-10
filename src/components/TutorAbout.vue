<template>
    <div class="firstcontainer">
        <div id="subheading1">About myself</div>
        <div id="about">
            {{tutor.About}}
        </div>
    </div>
</template>

<script>

import firebaseApp from '../firebase.js';
import { doc, getFirestore } from "firebase/firestore";
import { getDoc } from "firebase/firestore";
//import { getAuth, onAuthStateChanged } from "firebase/auth";

// import firebaseApp from '../firebase.js';
// import { getFirestore } from "firebase/firestore";
// import { collection, getDocs } from "firebase/firestore";
// //import { getAuth, onAuthStateChanged } from "firebase/auth";


const db = getFirestore(firebaseApp);

export default {
    name: "TutorAbout",

    data() {
        return {
            description: '',
        }
    },

    //props: {
    //    tutor: Object
    //},

    mounted() {
        this.tutor = "shashank@gmail.com"
        
        async function gettutor(tutor) {
            let t = await getDoc(doc(db, "Tutor", String(tutor)))
            return t.data()
        }
        gettutor(this.tutor).then(data => this.description = data.About)

        /*
        async function gettutor() {
            let t = await getDoc(doc(db, "Tutor", this.tutor.Email))
            return t.data()
        }
        gettutor(this.tutor).then(data => this.description = data.About)
        */

        /*
        async function display() {
            let z = await getDoc(doc(db,"Tutor", "shashank@gmail.com"))
            let description = ''
            z.forEach((docs) =>{
                let yy = docs.data()
                console.log(yy)
                description = (yy.About)
            })
            return description
        }
        display().then(data => this.description = data);
        */
    }

}

</script>

<style scoped>
.firstcontainer {
    background-color: #D4D4D4;
    border: 1px solid #000000;
    box-sizing: border-box;
    height: 100px;
    padding: 20px;
    margin: 10px;
    margin-left: 170px;
    margin-right: 170px; 
	flex-direction: row;
}

#subheading1 {
/* font-family: 'Rounded Mplus 1c Bold'; */

font-weight: 700;
font-size: 20px;
text-align: left;
color: #8D8D8D;
}

#about {
/* font-family: 'Rounded Mplus 1c Bold'; */
font-weight: 700;
font-size: 20px;
text-align: left;
color: #000000;
}
</style>