<template>
  <div class = "container2">
      <form id = "makeoffer">
          <br><br>
          <h1><strong>How much do you wish to offer?</strong></h1>

          <div class = "form">
              <input type = "number" id = "offer" required placeholder = "Insert offer here..."> <br><br>
              <div class = "save">
                  <button class = "button" id = "savebutton" type = "button">Make offer</button><br><br><br><br>
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
    font-size:20px;
    text-align: center;
    font-family: "M PLUS Rounded 1c";
    font-weight: 2000;
}


.asterisk_input:after {
content:"*"; 
color: #e32;
position: absolute; 
font-size: x-large; 
}

input{
    font-family: "M PLUS Rounded 1c";
    text-align: center;
    font-size: 80%;
    padding: 20px;
    border: grey;
    border-radius: 5px;
    width: 15%;

}

.button {
    background-color: #F83F3F; 
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