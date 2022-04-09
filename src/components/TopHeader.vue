<template>
    <div id = "header">

        <a href = "history.back()" class = "previous"><img id = "back" v-bind:src="require('@/assets/backbutton.png')" alt="error"></a>
        <img id = "profilePic" v-bind:src = "require('@/assets/logo.png')" alt = "error">
        <h2 id = "title">{{ pageName }}</h2>
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
#logo {
    width: 60px
}
div {
    background-color: #316879;
    height: 75px;
}

a {
    padding-top: 10px;
    margin-left: 10px;
    float: left;
    height: 0px;
}

h2 {
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
    width: 30px;
}
</style>
