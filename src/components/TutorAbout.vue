<template>
    <div class="firstcontainer">
        <div id="subheading1">About myself</div>
        <div id="about">
            {{description}}
        </div>
    </div>
</template>

<script>
import firebaseApp from '../firebase.js';
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";

const db = getFirestore(firebaseApp);

export default {
    name: "TutorAbout",

    data() {
        return {
            description: '',
        }
    },

    mounted() {
        async function display() {
            let z = await getDocs(collection(db,"TutorDetails"))
            let description = ''
            z.forEach((docs) =>{
                let yy = docs.data()
                description = (yy.About)
            })
            return description
        }
        display().then(data => this.description = data);
    }


}
</script>

<style scoped>
.firstcontainer {
    background-color: #D4D4D4;
    border: 1px solid #000000;
    box-sizing: border-box;
    height: 100px;
}

#subheading1 {
font-family: 'Rounded Mplus 1c Bold';
font-weight: 700;
font-size: 15px;
text-align: left;
color: #8D8D8D;
}

#about {
font-family: 'Rounded Mplus 1c Bold';
font-weight: 700;
font-size: 15px;
text-align: left;
color: #000000;
}
</style>