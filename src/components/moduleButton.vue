<template>
  <!-- component for rectangle box -->
  <button id="moduleButton">
    <div id="buttonText">
      <h2> {{code}} </h2>
      <h3> {{title}} </h3>
      <h4> {{faculty}} </h4>
    </div>
  </button>
</template>

<script>
export default {
    name:'moduleButton',
    props: {
      code: String,
      title: String,
      faculty: String,
    },
}
</script>

<style>
#moduleButton {
  border: solid grey;
  background: white;
  font-size: 16px;
  margin-top: 40px;
  margin-left: 30px;
  margin-right: 30px;
  padding: 15px 32px;
  display: inline-block;
  width: 400px;
  height: 250px;
}

#moduleButton:hover{
  color: black;
  background-color: rgba(182, 177, 179, 0.76);
  box-shadow: 3px 3px grey;
  cursor: pointer;
}

#buttonText{
  font-family: 'M PLUS Rounded 1c';
  text-align: left;
}
</style>