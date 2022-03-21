<template>
  <div class="search-bar">
      <div class="search-icon">
        <Search/>
      </div>
      <div class="search-input">
          <input type="search" placeholder="Search for tutor..."/>
      </div>
  </div>
</template>

<script>
import Search from "vue-material-design-icons/Magnify.vue"

export default {
    data(){
        return
    },
    components:{
        Search,
    }
}
</script>

<style scoped>
.search-bar {
    display: flex;
    flex-direction: row;
    justify-content: center; 
    
}

.search-bar input {
    height: 40px;
    box-shadow: 5px 2px 2px grey;
    font-size: 20px;
    width: 1500px;
    border: 2px solid black;
    border-left-style: hidden;
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




</style>