<template>
    <div class="secondcontainer">
        <div id="subheading2">Module Available</div>
        <div class="modules" v-for="mod in availablemods" :key="mod">
            <button @click="mod.isVisible=true" color="primary" type="border">{{mod.ModuleCode}}</button>
            <popup v-show="mod.isVisible">
                <p>
                    Grade Attained: {{mod.GradeAttained}} <br>
                    Year Taken: {{mod.AY}} <br>
                    Sem Taken: {{mod.SemTaken}} <br>
                    Professor: {{mod.ProfName}}
                    <button @click="mod.isVisible=false" color="primary" type="border">Close</button>
                </p>
            </popup>
        </div>
    </div>
</template>

<script>
import firebaseApp from '../firebase.js';
import { getFirestore } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";

const db = getFirestore(firebaseApp);

export default {
    data() {
        return {
            availablemods:[],
            module: "",
            grade: "",
            yearTaken: "",
            semTaken: "",
            prof: "",
        }
    },
    //props: {
    //    tutor: Object
    //},

    mounted() {
        this.tutor = "shashank@gmail.com"

        async function gettutor(tutor) {
            let t = await getDoc(doc(db, "Tutor", String(tutor)))
            let availablemods = t.data().ModulesAvailable
            let module = ''
            let grade = ''
            let yearTaken = ''
            let semTaken = ''
            let prof = ''
            availablemods.forEach((doc) => {
            module = doc.ModuleCode
            grade = doc.GradeAttained
            yearTaken = doc.AY
            semTaken = doc.SemTaken
            prof = doc.ProfName 
        })
        return module, grade, yearTaken, semTaken, prof, availablemods
        }
        gettutor(this.tutor).then(data => this.availablemods = data)
        gettutor(this.tutor).then(data => this.module = data)
        gettutor(this.tutor).then(data => this.grade = data)
        gettutor(this.tutor).then(data => this.yearTaken = data)
        gettutor(this.tutor).then(data => this.semTaken = data)
        gettutor(this.tutor).then(data => this.prof = data)

        /*
        async function gettutor() {
            let t = await getDoc(doc(db, "Tutor", this.tutor.Email))
            let availablemods = t.data().ModulesAvailable
            let module = ''
            let grade = ''
            let yearTaken = ''
            let semTaken = ''
            let prof = ''
            availablemods.forEach((doc) => {
            module = doc.ModuleCode
            grade = doc.GradeAttained
            yearTaken = doc.AY
            semTaken = doc.SemTaken
            prof = doc.ProfName 
        })
        return module, grade, yearTaken, semTaken, prof, availablemods
        }
        gettutor().then(data => this.availablemods = data)
        gettutor().then(data => this.module = data)
        gettutor().then(data => this.grade = data)
        gettutor().then(data => this.yearTaken = data)
        gettutor().then(data => this.semTaken = data)
        gettutor().then(data => this.prof = data)
        */
            

        /*
        async function display() {
            let z = await getDocs(collection(db,"Tutor","shashank@gmail.com"))
            let module = ''
            let grade = ''
            let yearTaken = ''
            let semTaken = ''
            let prof = ''
            z.forEach((docs) =>{
                let yy = docs.data()
                module = (yy.ModuleCode)
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
        */
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
font-family: 'Rounded Mplus 1c Bold';
font-weight: 700;
font-size: 20px;
text-align: left;
color: #8D8D8D;
}
button {
    border: 1px solid #000000;
    display: flex;
    justify-content: left;
    border: 1px solid #000000;
    box-sizing: border-box;
    border-radius: 30px;
}
p {
    text-align: left;
}

</style>