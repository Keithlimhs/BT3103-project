<template>
  <!-- component for rectangle box -->
  <button id="moduleButton" @click = "selectModule">
    <div id="buttonText">
      <h2> BT3103 </h2>
      <h4> Computing </h4>
    </div>
  </button>
</template>

<script>
export default {
    name:'moduleButton',
}
</script>

<style>
#moduleButton {
border: solid grey;
background: white;
font-size: 16px;
margin: 4px 2px;
padding: 15px 32px;
display: inline-block
}
#moduleButton:hover{
  color: black;
  background-color: rgba(182, 177, 179, 0.76);
  box-shadow: 3px 3px grey;
  cursor:pointer;
}

#buttonText{
  font-family: 'M PLUS Rounded 1c';
  text-align: center;
}
</style>