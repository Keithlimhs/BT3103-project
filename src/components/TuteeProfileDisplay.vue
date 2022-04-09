<template>
  <div class="tutee-profile">
      <div class="left-container">
        <img class="tutee-img" src="@/assets/Shashank300.jpg" alt=""> <!-- retreive photo from firestore database -->
      </div>
      <div class="middle-container">
          <div class="tutee-info">
              <div id="name">
                  {{user}}
              </div>
              <div id="module">
                  {{mod}}
              </div>
          </div>
      </div>
      <div class="right-container">
        <button class="chat">
            <Chat class="icon"/> 
            <span class="text">Chat</span> <!-- link to chat interface -->
        </button>
        <button class="view-profile">
            View Profile <!-- link to full profile -->
        </button>
      </div> 
  </div>
</template>

<script>
import Chat from "vue-material-design-icons/ChatProcessing.vue"

export default {
    data(){
        return{
            // user: "Tan Shi Min",
            mod: "BT3103",
        }
    },
    components: {
        Chat,
    },
    props: {
        user: String,
        // mod: String,
    }
}
</script>

<style scoped>
.tutee-profile {
	background-color: #D4D4D4;
	padding: 25px;
	display: flex;
	flex-direction: row;
    border: 1px solid black;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.left-container {
	width: 25%;
}

.tutee-img {
	border-radius:50%;
    height: 100px;
    width: 100px;
    float: left;
}

.middle-container {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}

#name {
    font-weight: bold;
	font-size: 2vw;
}

#module {
    font-weight: normal;
	font-size: 1vw;
}

.right-container {
    width: 25%;
	display: flex;
	flex-direction: row;
    font-size: 1vw;
    justify-content: right;
}

.chat {
    margin-right: 5px;
    border-radius: 10px;
    display: inline-block;
    height: 30px;
}

.view-profile {
    margin-left: 5px;
    border-radius: 10px;
    display: inline-block;
    height: 30px; 
}

.material-design-icon.icon {
    /* color: white; */
    vertical-align: middle;
    line-height: 15px;
}
</style>