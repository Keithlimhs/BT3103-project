<template>
  <div class="tutor-home">
    <div class="header">
      <TopHeader/>
    </div>
    <div class="top-container">
      Hello {{user}}, here are your offers for today
    </div>
    <div class="bottom-container">
      <div class="ongoing">
        <div class="status-header">
          Ongoing
        </div>
        <div class="profiles" v-for="tutee in tutees" :key='tutee'>
          <!-- <TuteeProfileDisplay/> -->
          <TuteeProfileDisplay :user="tutee.Name"/>
        </div>
      </div>
      <div class="accepted">
        <div class="status-header">
          Accepted
        </div>
        <div class="profiles" v-for="tutee in tutees" :key='tutee'>
          <!-- <TuteeProfileDisplay/> -->
          <TuteeProfileDisplay :user="tutee.Name"/>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
import TopHeader from '../components/TopHeader.vue'
import TuteeProfileDisplay from '../components/TuteeProfileDisplay.vue'
import firebaseApp from "@/firebase.js"
import { getFirestore } from "firebase/firestore"
import { collection, getDocs, } from "firebase/firestore"
// import { getAuth, onAuthStateChanged } from "firebase/auth"

const db = getFirestore(firebaseApp)

export default {
  name: 'TutorHome',
  components: {
    TopHeader,
    TuteeProfileDisplay,
  },
  data(){
    return{
      user: "Shashank Shekhar Tripathi",
      tutees: [],
    }
  },
  mounted() {
    async function getdata() {
            let t = await getDocs(collection(db, "Tutee"))
            let tuteesArray = []
            t.forEach((docs) => {
                let tuteeinfo = docs.data();
                tuteesArray.push(tuteeinfo)
            })
            return tuteesArray
    }
    getdata().then(data => this.tutees = data);
  }
}
</script>

<style scoped>
.top-container {
  text-align: left;
  font-size: 30px;
  font-weight: bolder;
  padding: 10px 0px 10px 10px;
}

.bottom-container {
	display: flex;
	flex-direction: row;
  font-size: 1vw;
}

.ongoing, .accepted {
  border: 2px solid black;
  width: 50%;
  height: 100vh;
}

.status-header {
  font-weight: 600;
  font-size: 30px;
  border-bottom: 2px solid black;
  padding: 30px;
}
</style>