<template>
  <div class="search-bar">
      <div class="search-icon">
        <Search/>
      </div>
      <div class="search-input">
          <input type="text" placeholder="Search for module..." :value="searchInput" @input="$emit('update:searchInput', $event.target.value)"/>
      </div>
      <button class="dropDownMenuButton">
        <Menu/>
      </button>
  </div>
</template>

<script>
import Search from "vue-material-design-icons/Magnify.vue"
import Menu from "vue-material-design-icons/Menu.vue"
import "@fontsource/m-plus-rounded-1c";

export default {
    data(){
        return {
            
        }
    },
    components:{
        Search,
        Menu,
    },
    props: ['searchInput'],
    emits: ['update:searchInput'],
}
</script>

<style scoped>
.search-bar {
    display: flex;
    flex-direction: row;
    justify-content: center; 
    padding-bottom: 50px;
}

.search-bar input {
    height: 40px;
    box-shadow: 5px 2px 2px grey;
    font-size: 20px;
    width: 1500px;
    border: 2px solid black;
    border-left-style: hidden;
    border-right-style: hidden;
    font-family: "M PLUS Rounded 1c";
}

.search-bar input:focus {
    outline: none;
}

.search-icon {
    display: flex;
    align-items: center;
    background-color: white;
    border: 2px solid black;
    border-right-style: hidden;
    box-shadow: 5px 2px 2px grey;
}

.dropDownMenuButton {
    display: flex;
    align-items: center;
    background-color: white;
    border: 2px solid black;
    border-left-style: hidden;
    box-shadow: 5px 2px 2px grey;
}



</style>