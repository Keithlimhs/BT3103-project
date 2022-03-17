<template>
  <div class = "container1">
      <form id = "myform">
          <h1><U>Add Module</U></h1>

          <div class = "form">
              <input class = "input1" type = "text" id = "modulecode" required placeholder = "Module Code">
              <span class="asterisk_input">  </span>   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                   
              <input class = "input1" type = "text" id = "gradeattained" required placeholder = "Grade Attained">
              <span class="asterisk_input">  </span> <br><br><br>
              <input class = "input1" type = "text" id = "enteray" required placeholder = "Enter AY here">
              <span class="asterisk_input">  </span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   
              <input class = "input1" type = "text" id = "profname" placeholder = "Prof Name"> <br><br><br>
              <input class = "input1" type = "text" id = "semtaken" required placeholder = "Sem Taken">
              <span class="asterisk_input">  </span> <br><br><br>   
            
              <div class = "save">
                  <button class = "button" id = "savebutton" type = "button">Add</button><br><br>
              </div>
          </div>

      </form>
  </div>
      
</template>

<script>
import "@fontsource/m-plus-rounded-1c";
export default {

}
</script>



<style>
form {
   background-color: #ACB3BF ;
}

h1 {
    text-align: center;
    font-family: "M PLUS Rounded 1c";
    font-weight: 900;
}


.asterisk_input:after {
content:"*"; 
color: #e32;
position: absolute; 
font-size: x-large; 
}

.input1{
    font-family: "M PLUS Rounded 1c";
    text-align: center;
    font-size: 80%;
    padding: 5px;
    border: grey;
    border-radius: 5px;

} 

.button {
    background-color: #d45b5b;
    padding: 7px;
    border-radius: 10px;
    width: 100px;
    font-weight: 750;
    font-size:75%;
    font-family: "M PLUS Rounded 1c";
}

.button:hover {
    background-color: rgb(214, 154, 211);
    box-shadow: 3px 2px purple
}

</style>