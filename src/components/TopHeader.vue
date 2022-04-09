<template>
    <div id = "header">



        <img id = "back" v-bind:src="require('@/assets/backbutton.png')" alt="error" v-on:click = "back()">
        <img id = "profilePic" v-bind:src = "require('@/assets/logo.png')" alt = "error">

        <DropdownMenu/>



        <h1 id = "title">{{ pageName }}</h1>



    </div>
</template>

<script>
import DropdownMenu from '@/components/DropdownMenu.vue'

export default {




    props: {
            pageName: String

    },

    components: {
        DropdownMenu,
    },


    methods: {
        back() {
            history.back()
    },

    }



    
}
</script>

<style scoped>

#logo {
    width: 60px
}
div {
    margin-top: 0px;
    background-color: #316879;
    height: 70px;
}

h1 {

    padding-top: 10px;
    color: white;
    text-align: center;
}

img {
    width: 50px;
    float: right;
    height: auto;
}


#back {
    width: 40px;
    padding-top: 10px;
    margin-left: 10px;
    float: left;
}

</style>

