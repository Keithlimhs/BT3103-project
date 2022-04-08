<template>
    <div class = "tutors-list">
        <div class="header">
            <TopHeader :pageName="this.code"/>
        </div>
        <div class="search-bar">
            <TutorSearchBar :searchInput="this.search" @update:searchInput="newValue => this.search = newValue"/>
        </div>
        <div class="tutors">
            <!-- <div id="tutor-not-found" v-if="!filteredTutors.length">Sorry, the tutor cannot be found</div>
            <div class = "list" v-for="tutor in filteredTutors" :key="tutor">
                <TutorProfileDisplay :user="tutor.Name" :year="tutor.year" :course="tutor.major"/>
            </div> -->
            <div class = "list" v-for="tutor in tutors" :key="tutor">
                <div id="tutor-found" v-if="filteredTutors.includes(tutor)">
                    <TutorProfileDisplay :user="tutor.Name" :year="tutor.year" :course="tutor.major"/>
                </div>
                <div id="tutor-not-found" v-else-if="!filteredTutors.length">Sorry, the tutor cannot be found</div>
            </div>
        </div>
    </div>
</template>

<script>
import TopHeader from '../components/TopHeader.vue'
import TutorSearchBar from '../components/TutorSearchBar.vue'
import TutorProfileDisplay from '../components/TutorProfileDisplay.vue'
import firebaseApp from "@/firebase.js"
import { getFirestore } from "firebase/firestore"
import { getDoc, doc } from "firebase/firestore"
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
            code: this.$route.params.moduleCode,
            name: "",
            year: "",
            course: "",
        }
    },
    mounted() {
        async function getdata(code) {
            let t = await getDoc(doc(db, "Modules", code))
            let tutorsArray = []
            let tutorids = t.data().TutorIds
            
            for (let key in tutorids) {
                let t2 = await getDoc(doc(db, "Tutor", tutorids[key].id))
                tutorsArray.push(t2.data())
            }
            return tutorsArray
        }
        getdata(this.code).then(data => this.tutors = data);
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
#tutor-not-found {
    text-justify: center;
    padding-top: 250px;
    font-size: 40px;
    height: 500px;
}
</style>