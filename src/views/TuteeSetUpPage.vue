<template>
    <div id="backgroundColor">
        <link href='https://fonts.googleapis.com/css?family=M PLUS Rounded 1c' rel='stylesheet'>

        <div class="top">
            <div id="logo">
            <img src="../assets/Logo.jpeg" alt="logo">
            </div>
            <h1>SET UP PROFILE</h1>
        </div>

        <div class="profilePicture">
            <img src="./assets/Noprofilepicture.jpeg">
        </div>

        <div class = wrapper>
            <button class = "updateProfilePictureBtn">Update profile picture (optional)</button>
        </div>
        
        <div class ="form">
            <form id="setupForm">
                <div class = "formli">
                    <span class="asterisk_input">  </span>
                    <label for="name">Name:</label>
                    <input type= "text" id= "name" required = "" placeholder= "Enter your name here" size = "30"> <br><br>
                    <span class="asterisk_input">  </span>
                    <label for="course">Course:</label>
                    <input type= "text" id= "course" required = "" placeholder= "Enter your course here" size = "30"> <br><br>
                    <span class="asterisk_input">  </span>
                    <label for="year">Year of Study:</label>
                    <input type= "text" id= "year" required = "" placeholder= "Enter your year of study here" size = "30"> <br><br>
                    <label for="about">About Myself:</label>
                    <input type= "text" style="height: 60px" id= "about" required = "" placeholder= "Enter description" size = "30"> <br><br>
                </div>
            </form>
        </div>
        
        <div class = wrapper>
            <button class = "saveBtn">SAVE</button>
        </div>        
    </div>
</template>

<script>
export default {
    name: "TuteeSetUpPage",
}
</script>

<style scoped>
#backgroundColor {
  background-color: #E5E5E5 ;
}
.top{
  background-color: #316879;
  min-height: 10vh;
}
#logo{
    float: left;
}
h1{
  color: white ;
  font-family: 'Rounded Mplus 1c Bold';
  text-align: center;
  font-weight: 700;
  font-style: normal;
  align-items: center;
  line-height: 74px;
}
.wrapper {
  text-align: center;
}
.formli {
  text-align: right;
}
.form {
  text-align: center;
}
#setupForm{
  display: inline-block;
  text-align: center;
  font-family: 'M PLUS Rounded 1c';
}
.updateProfilePictureBtn {
  border: none;
  background-color: inherit;
  cursor: pointer;
  color: red;
  font-size: 10px;
  font-family: 'M PLUS Rounded 1c';
  text-decoration: underline;
}
.saveBtn {
  border: 1px solid #000000;
  background-color: #FFA500;
  cursor: pointer;
  color: black;
  display: flex;
  box-sizing: border-box;
  border-radius: 30px;
  font-family: 'M PLUS Rounded 1c';
  display: inline-block;
  width: 120px;
  height: 25px;
  font-size: 12px;
}
.asterisk_input:after {
content:"*"; 
color: red;
font-size: large; 
}
</style>