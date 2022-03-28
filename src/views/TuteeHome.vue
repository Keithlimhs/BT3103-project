<template>
    <div class="tutee-home">
        <div class="header">
            <TopHeader/>
        </div>
        <div class="welcome-msg">
            <p>Hello {{user}}, choose a module below to find a tutor</p> <br>
        </div>
        <div class="search-bar">
            <ModuleSearchBar :searchInput="this.search" @update:searchInput="newValue => this.search = newValue"/>
        </div>
        <div class="modules" >
            <div id="mod-not-found" v-if="!filteredList.length">Sorry, the module cannot be found</div>
            <div id="mod" v-for="module in filteredList" :key="module">
                <div class="mod-btn">
                    <ModuleButton :code="module.moduleCode" :title="module.title" :faculty="module.faculty"/>   
                </div> 
            </div>
        </div>
    </div>
    
</template>

<script>
import "@fontsource/m-plus-rounded-1c";
import TopHeader from '../components/TopHeader.vue'
import ModuleSearchBar from '../components/ModuleSearchBar.vue'
import ModuleButton from '../components/ModuleButton.vue'

const axios = require("axios")

export default {
    data() {
        return {
            user: "User",
            modules: [],
            search: "",
        }
    },
    components: {
        TopHeader,
        ModuleSearchBar,
        ModuleButton,
    },
    computed: {
        filteredList() {
            return this.modules.filter(module => {
                return module.moduleCode.toLowerCase().includes(this.search.toLowerCase())
            })
        }
    },
    mounted () {
    axios
      .get('https://api.nusmods.com/v2/2021-2022/moduleInfo.json', {headers:{"accept": "application/json"}})
      .then(response => this.modules = response.data)
  }
    
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