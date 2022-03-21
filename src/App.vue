<template>

  <TopHeader/>
</template>

<script>
import TopHeader from './components/TopHeader.vue'

export default {

  name: 'App',
  components: {
    TopHeader
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