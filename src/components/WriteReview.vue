<template>
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <div class = "container3">
      <form id = "reviewform">
          <h1>Write A Review</h1>

          <div class = "form">
              <label for = "rating"> Rating: </label>  
              <span class="fa fa-star checked"></span> &nbsp;
              <span class="fa fa-star checked"></span> &nbsp;
              <span class="fa fa-star checked"></span> &nbsp;
              <span class="fa fa-star"></span> &nbsp;      
              <span class="fa fa-star"></span> 
              <br><br>
              <label for = "modTaken">Module Taken: </label>
              <input class = "input2" type = "text" id = "modTaken"> <br><br>
              <label for = "feedback">Feedback for tutor: </label>
              <input class = "input2" type = "textarea" id = "feedback">
              <textarea class="Text1" cols="40" rows="5"></textarea> <br><br><br><br><br><br>
              
            
              <div class = "save">
                  <button class = "button" id = "savebutton" type = "button">Submit review</button><br><br>
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
#reviewform {
    text-align: center;
   background-color: #ACB3BF ;
}

h1 {
    text-align: center;
    font-family: "M PLUS Rounded 1c";
    font-weight: 900;
}


label {
    font-family: "M PLUS Rounded 1c";
    font-size: 14px;
    display: inline-block;
    text-align: left;
    width: 100px;
}

textarea {
    font-family: "M PLUS Rounded 1c";
    position: absolute;
    left: 600px;
    padding-left: 400ox;
}
.input2 {
    padding: 5px;
    text-align: left;
    border-radius: 0px;
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

.checked {
  color: yellow;
}

</style>