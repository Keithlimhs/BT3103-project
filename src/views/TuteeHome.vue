<template>
    <div class="tutee-home">
        <div class="header">
            <HomeHeader/>
        </div>
        <div class="welcome-msg">
            <p>Hello {{user}}, choose a module below to find a tutor</p> <br>
        </div>
        <div class="search-bar">
            <ModuleSearchBar :searchInput="this.search" @update:searchInput="newValue => this.search = newValue"/>
        </div>
        <div class="modules" >
            <div id="mod" v-for="module in filteredList" :key="module">
                <div class="mod-btn">
                    <router-link v-bind:to="'/tutors/' + module.moduleCode">
                        <moduleButton :code="module.moduleCode" :title="module.title" :faculty="module.faculty"/>   
                    </router-link>
                </div> 
            </div>
            <div id="mod-not-found" v-if="!filteredList.length">Sorry, the module cannot be found</div>
        </div>


        
    </div>
    
</template>

<script>
import "@fontsource/m-plus-rounded-1c";
import HomeHeader from '../components/HomeHeader.vue'
import ModuleSearchBar from '../components/ModuleSearchBar.vue'
import moduleButton from '../components/moduleButton.vue'
import firebaseApp from "@/firebase.js"
import { getFirestore } from "firebase/firestore"
import { collection, getDocs, } from "firebase/firestore"
import { getAuth, onAuthStateChanged } from "firebase/auth"

const db = getFirestore(firebaseApp)

const axios = require("axios")

export default {
    name: "TuteeHome",
    data() {
        return {
            user: "",
            modules: [],
            avail: [],
            search: "",
        }
    },
    components: {
        HomeHeader,
        ModuleSearchBar,
        moduleButton,
    },
    computed: {
        filteredList() {
            return this.modules.filter(x => {
                return this.avail.includes(x.moduleCode) && x.moduleCode.toLowerCase().includes(this.search.toLowerCase())
            })
        }
        
    },
    mounted() {
        const auth = getAuth()
        onAuthStateChanged(auth, (user) => {
            if (user) {
                this.user = user.Name;
                console.log("Signed in")
            } else {
                console.log("Sign out")
            }
        })
        axios
        .get('https://api.nusmods.com/v2/2021-2022/moduleInfo.json', {headers:{"accept": "application/json"}})
        .then(response => this.modules = response.data)

        async function getdata() {
            let t = await getDocs(collection(db, "Modules"))
            let modulesArray = []
            t.forEach((docs) => {
                let module = docs.id;
                modulesArray.push(module)
            })
            return modulesArray
        }
        getdata().then(data => this.avail = data);
        this.loading = true;
    },
}
</script>

<style scoped>
.tutee-home {
    background-color: #E5E5E5;
}
.welcome-msg {
    text-align: left;
    padding-left: 20px;
    font-family: "M PLUS Rounded 1c";
    font-size: 25px;
    font-weight: bold;
}

.modules {
    display: inline-grid;
    grid-template-columns: auto auto auto;
}

#mod-not-found {
    text-justify: center;
    padding-top: 250px;
    font-size: 40px;
    height: 500px;
}
</style>