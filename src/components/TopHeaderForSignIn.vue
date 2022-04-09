<template>
    <div id = "header">
       <img id = "logo" v-bind:src = "require('@/assets/logo_bg_removed.png')" alt = "error">
       <h1 id = "title">{{ pageName }}</h1> 
    </div>
</template>

<script>
export default {


    props: {
            pageName: String

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
    margin-top: 0px;
    padding-top: 10px;
    color: white;
    text-align: center;
}

img {
    width: 75px;
    float: left;
    height: auto;
}

</style>