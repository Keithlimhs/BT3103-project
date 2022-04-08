/* eslint-disable vue/no-dupe-keys */
<template>
  <div class="tutor-profile">
      <div class="left-container">

        <img class="tutor-img" src="@/assets/profilepicture.jpeg" alt=""> <!-- retreive photo from firestore database by auth().user.PhotoURL -->



      </div>
      <div class="middle-container">
          <div class="tutor-info">
              <div id="name">
                  {{user}}
              </div>
              <div id="year-course">

                  {{year}}, {{course}}

              </div>
          </div>
      </div>
      <div class="right-container">
          <div class="top-right">
            <button class="chat">
                <Chat class="icon" fillColor = 'white'/>
                <span class="text">Chat</span> <!-- link to chat interface -->
            </button>
            <!-- <router-link v-bind:to="'/tutors/' + this.user"> -->
                <button class="view-profile">
                    View Profile <!-- link to full profile -->               
                </button>
            <!-- </router-link> -->
          </div>
          <div class="bottom-right">
            <div class="reviews" style="display:inline-block;">
                {{count}} Reviews
                <star-rating :inline="true" :star-size="20" :read-only="true" :show-rating="false" :rating="rating" :increment="0.01"></star-rating>
            </div>
          </div>
      </div> 
  </div>
</template>

<script>
import Chat from "vue-material-design-icons/ChatProcessing.vue"
import StarRating from 'vue-star-rating';

export default {
    data(){
        return{
            user: "Shashank Shekhar Tripathi",
            year: "Year 4",
            course: "Business Analytics",

            count: 5,
            rating: 3,
        }
    },

    props: {
        // eslint-disable-next-line vue/no-dupe-keys
        user: String,
        // eslint-disable-next-line vue/no-dupe-keys
        year: Number,
        // eslint-disable-next-line vue/no-dupe-keys
        course: String,
        // count: Number,
        // rating: Number,
    },

    components: {
        Chat,
        StarRating,
    }
}
</script>

<style scoped>
.tutor-profile {
	background-color: #8D8D8D;
	padding: 30px;
    margin: 100px;
    margin-left: 170px;
    margin-right: 170px; 
	display: flex;
	flex-direction: row;
	border: 2px solid black;
    border-radius: 10px;
}



.left-container {
	width: 25%;
}


.tutor-img {
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
	font-size: 40px;
}

#year-course {
    font-weight: normal;
	font-size: 20px;
}

.right-container {
    width: 25%;
	display: flex;
	flex-direction: column;
    font-size: 18px;
}

.top-right {
    display:flex;
    justify-content:right;
    height: 50%;
}

.chat {
    margin-right: 5px;
    display: inline-block;
    border-radius: 10px;
    height: 30px;

}

.view-profile {
    margin-left: 5px;
    border-radius: 10px;
    display: inline-block;
    height: 30px;
}

.bottom-right {
    height: 50%;
    display: flex;
    flex-direction: row;
    justify-content:right;
}

.reviews {
    margin-top: 25px;
}

.material-design-icon.icon {
    /* color: white; */
    vertical-align: middle;
    line-height: 15px;

}
</style>