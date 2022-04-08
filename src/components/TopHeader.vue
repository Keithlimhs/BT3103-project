<template>
    <div id = "header">
<<<<<<< HEAD
        <!-- <a href = "history.back()" class = "previous"><img id = "back" v-bind:src="require('../assets/backbutton.png')" alt="error"></a> -->
        <!-- <a href = "history.back()" class = "previous"><img id = "back" src="../assets/backbutton.png" alt="error"></a> -->
        <!-- <img id = "profilePic" src = "../assets/logo.png" alt = "error"> -->
        <h2 id = "title">{{pageName}}</h2>
=======
        <a href = "history.back()" class = "previous"><img id = "back" src="@/assets/backbutton.png" alt="error"></a>
        <img id = "profilePic" src = "@/assets/logo.png" alt = "error">
        <h2 id = "title">{{ pageName }}</h2>
>>>>>>> d7ce82e6a02340b56b409605311a5fc0cd7a18b1
    </div>
</template>

<script>
export default {
<<<<<<< HEAD
    data(){
        return{
            pageName: "PASSWORD RESET"
        }
    },
=======

    props: {
            pageName: String

    }
>>>>>>> d7ce82e6a02340b56b409605311a5fc0cd7a18b1
    
}
</script>

<style scoped>
#logo {
    width: 60px
}
div {
    background-color: #316879;
    height: 50px;
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
