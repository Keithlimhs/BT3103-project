<template>
<link href='https://fonts.googleapis.com/css?family=M PLUS Rounded 1c' rel='stylesheet'>

<div class="parent">
  <input type="text" id="filterBar" onkeyup="myFunction()" title="type to filter modules">
</div>




</template>

<script>
export default {
  name: 'filterBar',

  methods: {
    myFunction() {
      var input, filter, ul, li, a, i, txtValue;
      input = document.getElementById("myInput");
      filter = input.value.toUpperCase();
      ul = document.getElementById("myUL");
      li = ul.getElementsByTagName("li");
      for (i = 0; i < li.length; i++) {
          a = li[i].getElementsByTagName("a")[0];
          txtValue = a.textContent || a.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
              li[i].style.display = "";
          } else {
              li[i].style.display = "none";
          }
      }
    }
  }
}
</script>

<style>



.parent {
  display: grid;
  place-items: center;
}

#filterBar{
  background-image: url('@/images/searchicon.png');
  background-position: 10px 12px;
  background-repeat: no-repeat;
  width: 80%;
  font-size: 16px;
  padding: 12px 20px 12px 40px;
  border: 1px solid #ddd;
  margin-bottom: 12px;
  text-align:left;
  font-family: 'M PLUS Rounded 1c';
  box-shadow: 1px 1px #888888;
}
</style>