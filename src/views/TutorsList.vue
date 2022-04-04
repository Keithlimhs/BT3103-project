<template> 
    <div class="header">
        <TopHeader/>
    </div>
    <div class="search-bar">
        <TutorSearchBar :searchInput="this.search" @update:searchInput="newValue => this.search = newValue"/>
    </div>
    <div class="tutors" v-for="tutor in filteredTutors" :key="tutor">
        <TutorProfileDisplay :user="tutor.Name" :year="tutor.year" :course="tutor.major"/>
    </div>
</template>

<script>
import TopHeader from '../components/TopHeader.vue'
import TutorSearchBar from '../components/TutorSearchBar.vue'
import TutorProfileDisplay from '../components/TutorProfileDisplay.vue'
import firebaseApp from "@/firebase.js"
import { getFirestore } from "firebase/firestore"
import { collection, getDocs, } from "firebase/firestore"
// import { getAuth, onAuthStateChanged } from "firebase/auth"

const db = getFirestore(firebaseApp)

export default {
    name: "TutorsList",
    components: {
        TopHeader,
        TutorSearchBar,
        TutorProfileDisplay,
    },
    data(){
        return {
            tutors: [],
            search: "",
            name: "",
            year: "",
            course: "",
        }
    },
    mounted() {
        async function getdata() {
            let t = await getDocs(collection(db, "Tutor"))
            let tutorsArray = []
            t.forEach((docs) => {
                let tutorinfo = docs.data();
                tutorsArray.push(tutorinfo)
            })
            return tutorsArray
        }
        getdata().then(data => this.tutors = data);
    },
    computed: {
        filteredTutors() {
            return this.tutors.filter(tutor => {
                return tutor.Name.toLowerCase().includes(this.search.toLowerCase())
            })
        }
    },
    
}
</script>

<style scoped>
.tutors {
    background-color: #E5E5E5;
}
</style>