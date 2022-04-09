<template>
    <div class="thirdcontainer">
        <div id="subheading3">
            Website
        </div>
        <div id="link-btn">
            <!-- <a v-bind:href="web">{{web}}</a> -->
            <button v-on:click='btnClick'>{{web}}</button>
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

    },
    methods: {
        btnClick() {
            window.open(this.web);
        }

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

    height: 50px;
    align-items: center;
    display: flex;

}

#subheading3 {
/* font-family: 'Rounded Mplus 1c Bold'; */
font-weight: 700;
font-size: 20px;
text-align: left;
color: #8D8D8D;
}

button {
    border-radius: 10px;
    font-size: 16px;
    padding: 5px;
    padding-left: 45px;
    padding-right: 45px;
    margin-left: 20px;
}
</style>