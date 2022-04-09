<template>
    <div id="backgroundColor">
        <link href='https://fonts.googleapis.com/css?family=M PLUS Rounded 1c' rel='stylesheet'>

        //<TopHeader/>
        //<TutorProfileDisplay/>
        //<TutorAbout/> 
        //<TutorModules/> 
        //<TutorWebsite/>

        <TopHeader pageName="PROFILE PAGE"/> <br>
        <NavBarTutor/>
        <TutorProfileMain :tutor="this.tutor"/>
        <div class="about">
            <TutorAbout/> 
        </div>
        <div class="modules">
            <TutorModules/> 
        </div>
        <div class="website">
            <TutorWebsite/>
        </div>
        

    </div>
</template>

<script>
import TopHeader from '@/components/TopHeader.vue'
import NavBarTutor from '@/components/NavBarTutor.vue';
import TutorProfileMain from '@/components/TutorProfileMain.vue'
import TutorAbout from '@/components/TutorAbout.vue'
import TutorModules from '@/components/TutorModules.vue'
import TutorWebsite from '@/components/TutorWebsite.vue'

import firebaseApp from "@/firebase.js"                                                 
import { getFirestore } from "firebase/firestore"
import { getDoc, doc } from "firebase/firestore"

// import { getAuth, onAuthStateChanged } from "firebase/auth"

const db = getFirestore(firebaseApp)


export default {
    name: 'TutorProfilePage',
    data() {
        return {
            tutorid: this.$route.params.id,
            tutor: ""
        }
    },
    components: {
        TopHeader,
        NavBarTutor,
        TutorProfileMain,
        TutorAbout,
        TutorModules,
        TutorWebsite,
    },
    mounted() {
        async function getdata(tutorid) {
            let t = await getDoc(doc(db, "Tutor", tutorid))
            return t.data()
        }
        getdata(this.tutorid).then(data => this.tutor = data);
    },
}
</script>

<style scoped>
#backgroundColor {
  background-color: #E5E5E5 ;
}

.about, .modules, .website {
    margin-left: 170px;
    margin-right: 170px;
    margin-top: 10px;
    margin-bottom: 10px;
}
</style>