<template>
    <div class="thirdcontainer">
        <div id="subheading3">
            Website
            <a v-bind:href="web">{{web}}</a>
        </div>  
    </div>
</template>

<script>
import firebaseApp from '../firebase.js';
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";

const db = getFirestore(firebaseApp);

export default {
    name: "TutorWebsite",

    data() {
        return {
            web: ""
        }
    },
    
    mounted() {
        async function display() {
            let z = await getDocs(collection(db,"Tutor"))
            let web = ''
            z.forEach((docs) =>{
                let yy = docs.data()
                web = (yy.Website)
            })
            return web
        }
        display().then(data => this.web = data);
    }
    
    
}
</script>

<style scoped>
.thirdcontainer {
    background-color: #D4D4D4;
    border: 1px solid #000000;
    box-sizing: border-box;
    padding: 30px;
    margin: 10px;
    margin-left: 170px;
    margin-right: 170px; 
	flex-direction: row;
}

#subheading3 {
font-family: 'Rounded Mplus 1c Bold';
font-weight: 700;
font-size: 15px;
text-align: left;
color: #8D8D8D;
}
</style>