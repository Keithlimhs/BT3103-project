<template>
    <div class = "tutors-list">
        <div class="header">
            <TopHeader :pageName="this.code"/>
        </div>
        <div class="search-bar">
            <TutorSearchBar :searchInput="this.search" @update:searchInput="newValue => this.search = newValue"/>
        </div>
        <div class="tutors">
            <div id="loading" v-if="!loading">Loading tutors...</div>
            <div id="tutor-found" v-for="tutor in filteredTutors" :key="tutor">
                <TutorProfileDisplay :tutor="tutor"/>
            </div>
            <div id="tutor-not-found" v-if="!filteredTutors.length && loading">Sorry, the tutor cannot be found</div>
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
            loading: false,
        }
    },
    mounted() {
        async function getdata(code) {
            let t = await getDoc(doc(db, "Modules", code))
            let tutorsArray = []
            let tutorids = t.data().TutorIds
            
            for (let key in tutorids) {
                let t2 = await getDoc(doc(db, tutorids[key].tutorRef))
                let tutorinfo = t2.data()
                tutorsArray.push(tutorinfo)
            }
            return tutorsArray
        }
        getdata(this.code).then(data => {this.tutors = data
        this.loading = true});
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
#tutor-not-found, #loading {
    text-justify: center;
    padding-top: 250px;
    font-size: 40px;
    height: 500px;
}
</style>