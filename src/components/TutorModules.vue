<template>
    <div class="secondcontainer">
        <div id="subheading2">Modules Available</div>
        <div class="modules">
            <button @click="popup=true" color="primary" type="border">{{module}}</button>
            <popup v-show="popup">
                <p>
                    {{grade}} <br>
                    {{yearTaken}} <br>
                    {{semTaken}} <br>
                    {{prof}}
                    <button @click="popup=false" color="primary" type="border">Close</button>
                </p>
            </popup>
        </div>
    </div>
</template>

<script>
import firebaseApp from '../firebase.js';
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";

const db = getFirestore(firebaseApp);

export default {
    data() {
        return {

            module: "",
            grade: "",
            yearTaken: "",
            semTaken: "",
            prof: "",
            popup:false,
        }
    },

    mounted() {
        async function display() {
            let z = await getDocs(collection(db,"Tutor","shashank@gmail.com"))
            let details = []
            let module = ''
            let grade = ''
            let yearTaken = ''
            let semTaken = ''
            let prof = ''
            z.forEach((docs) =>{
                let yy = docs.data()
                details.push(yy.ModulesAvailable)
                module = details.ModuleCode
                grade = (yy.GradeAttained)
                yearTaken = (yy.AY)
                semTaken = (yy.SemTaken)
                prof = (yy.ProfName)

            })
            return module, grade, yearTaken, semTaken, prof
        }
        display().then(data => this.module = data);
        display().then(data => this.grade = data); 
        display().then(data => this.yearTaken = data); 
        display().then(data => this.semTaken = data); 
        display().then(data => this.prof = data); 
    }

}
</script>

<style scoped>
.secondcontainer {
    background-color: #D4D4D4;
    border: 1px solid #000000;
    box-sizing: border-box;

    padding: 30px;
    margin: 10px;
    margin-left: 170px;
    margin-right: 170px; 
	flex-direction: row;

}
#subheading2 {
/* font-family: 'Rounded Mplus 1c Bold'; */
font-weight: 700;
font-size: 20px;
text-align: left;
color: #8D8D8D;
}
button {
    border: 1px solid #000000;
    background-color: white;
    display: flex;
    justify-content: left;
    border: 1px solid #000000;
    box-sizing: border-box;
    border-radius: 30px;
    margin-left: 20px;
    font-size: 18px;
}
p {
    text-align: left;
}
</style>