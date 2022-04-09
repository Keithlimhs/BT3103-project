<template>
    <div id = "header">
            <img id = "logo" v-bind:src = "require('@/assets/logo_bg_removed.png')" alt = "error">
            <img id = "profilePic" v-bind:src = "require('@/assets/logo.png')" alt = "error">
            <DropdownMenu/>
        
            
            
            <h1 id = "title">{{ pageName }}</h1> 
    </div>
</template>

<script>
import DropdownMenu from '../components/DropdownMenu.vue'
export default {
    props: {
        pageName: String
    },
    components: {
        DropdownMenu,
    }
}
</script>

<style scoped>
div {
    background-color: #316879;
    top: 0px;
    height: 75px;
}

h1 {
    margin-left:9vw;
    margin-top: 0px;
    padding-top: 10px;
    color: white;
    text-align: center;
}

#logo {
    width: 75px;
    float: left;
    height: auto;
}

#profilePic {
    width: 50px;
    float: right;
    height: auto;
}






</style>
