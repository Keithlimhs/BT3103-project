<template>
<div id="backgroundColor">
  <link href='https://fonts.googleapis.com/css?family=M PLUS Rounded 1c' rel='stylesheet'>

  <div class= "topArt1">
    <img src="@\images\logo_bg_removed.png" alt="logo" height = "50">
    <div class="wrapper">
      <h3><strong> Bringing you closer to the help you need </strong></h3>
      <h4><strong> By students, for students </strong></h4>
    </div>
  </div>
  <div class="topArt2">
    <div class="wrapper2">
      <h3> <strong> SELECT AN OPTION TO BEGIN </strong> </h3>
    </div>
  </div>

  <div id ="parent">
    <button id="left" @click = "selectTutor()"> <h3> <strong> TUTOR? </strong> </h3> <img src="@\images\Tutor_icon.png" alt="tutor_icon" width = "200"> </button>
    <button id="right" @click = "selectTutee()"> <h3> <strong> TUTEE? </strong> </h3>  <img src="@\images\Tutee_icon.png" alt="tutee_icon" width = "200"> </button>
  </div>
</div>
</template>

<script>
export default {
  name: 'MainPage',

  methods: {
    
  }
}
</script>

<style>

#backgroundColor {
  background-color: #E5E5E5 ;
}
#parent {
  display:block;
  justify-content: space-around;
  font-family: 'M PLUS Rounded 1c';
  text-align: center;
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
  margin-left: 40vw;
}

#right{
  border: 1px solid rgb(161, 160, 160);
  background-color: rgb(53, 212, 165);
  border-radius: 10px;
  font-family: 'M PLUS Rounded 1c';
  margin-left: 40vw;
}

.topArt1{
  background-color: #316879;
  min-height: 25vh;
  margin-bottom: -21px; /*Removes space between margin*/
}
.wrapper{
  color: white;
  font-family: 'M PLUS Rounded 1c';
  text-align: center;
}
.topArt2{
  background-color:aqua;
  min-height: 3vh;
  margin: 0;
}
.wrapper2{
  font-family: 'M PLUS Rounded 1c';
  text-align: center;
  font-size: 10px;
}
</style>