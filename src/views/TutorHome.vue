<template>
  <div class="tutor-home">
    <div class="top-container">
      Hello {{user}}, here are your offers for today
    </div>
    <div class="bottom-container">
      <div class="ongoing">
        <div class="header">
          Ongoing
        </div>
        <TuteeProfileDisplay/>
      </div>
      <div class="accepted">
        <div class="header">
          Accepted
        </div>
        <TuteeProfileDisplay/>
      </div>
    </div>
  </div>
  
</template>

<script>
import TuteeProfileDisplay from '../components/TuteeProfileDisplay.vue'

export default {
  name: 'TutorHome',
  components: {
      TuteeProfileDisplay,
  },
  data(){
    return{
      user: "Shashank Shekhar Tripathi",
    }
  },
}
</script>

<style scoped>
.tutor-home {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
.top-container {
  text-align: left;
  font-size: 2vw;
  font-weight: bolder;
  padding: 0px 0px 10px 10px;
}

.bottom-container {
	display: flex;
	flex-direction: row;
  font-size: 1vw;
}

.ongoing, .accepted {
  border: 2px solid black;
  width: 50%;
  height: 100vh;
}

.header {
  font-weight: 600;
  font-size: 2vw;
  border-bottom: 2px solid black;
  padding: 15px;
}
</style>