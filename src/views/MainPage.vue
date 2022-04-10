<template>
<div id="backgroundColor">
  <link href='https://fonts.googleapis.com/css?family=M PLUS Rounded 1c' rel='stylesheet'>

  <div class= "topArt1">
    <img v-bind:src= "require('@/assets/logo_bg_removed.png')" alt="logo" height = "70">
    <div class="wrapper">
      <h1>Bringing you closer to the help you need </h1>
      <h2> By students, for students </h2>
    </div>
  </div>
  <div class="topArt2">
    <!-- <div class="wrapper2"> -->
      <h1 id = 'option'> SELECT AN OPTION TO BEGIN </h1>
    <!-- </div> -->
  </div>

  <div id ="parent">
    <button id="left" v-on:click="selectTutor()"> <h1>  TUTOR? </h1> <img v-bind:src="require('@/assets/Tutor_icon.png')" alt="tutor_icon" width = "400"> </button>
    <button id="right" v-on:click="selectTutee()"> <h1> TUTEE?</h1>  <img v-bind:src="require('@/assets/Tutee_icon.png')" alt="tutee_icon" width = "400"> </button>
  </div>
</div>
</template>

<script>
import "@fontsource/m-plus-rounded-1c";
export default {
  name: 'MainPage',

  methods: {
    selectTutor() {
      this.$router.push('/TutorLoginPage')
    },
    selectTutee() {
      this.$router.push('/TuteeLoginPage')
    }
  }
}
</script>

<style>

#backgroundColor {
  background-color: #E5E5E5 ;
}

#left:hover{
  color: rgb(243,236,236);
  background-color: rgba(199, 63, 131, 0.76);
  box-shadow: 3px 3px grey;
  cursor:pointer;
}
#right:hover{
  color: rgb(243,236,236);
  background-color: rgba(48, 151, 103, 0.76);
  box-shadow: 3px 3px grey;
  cursor: pointer;
}
#left{
  border: 1px solid rgb(161, 160, 160);
  background-color: pink;
  border-radius: 10px;
  font-family: 'M PLUS Rounded 1c';
  padding: 20px 50px;
}

#right{
  border: 1px solid rgb(161, 160, 160);
  background-color: rgb(53, 212, 165);
  border-radius: 10px;
  font-family: 'M PLUS Rounded 1c';
  margin-left: 10vw;
  padding: 20px 50px;
}


.topArt1{
  background-color: #316879;
  min-height: 25vh;
  margin-bottom: -21px; /*Removes space between margin*/
  /* text-align: left; */
  display: flex
}
.wrapper{
  color: white;
  font-family: 'M PLUS Rounded 1c';
  padding-top: 40px;
  padding-left: 480px;
}
.topArt2{
  background-color:aqua;
  min-height: 3vh;
  margin: 0;
  font-family: 'M PLUS Rounded 1c';
  height: 60px;
  text-align: center;
  font-size: 10px;
  margin-bottom: 20px;
  padding: 5px 0;
  padding-bottom: 15px;
}

/* .wrapper2{
  font-family: 'M PLUS Rounded 1c';
  height: 60px;
  text-align: center;
  font-size: 10px;
  margin-bottom: 20px;
  padding: 5px 0;
} */

#parent {
  padding-top: 20px;
}

#option {
  font-size: 28px;
}




</style>