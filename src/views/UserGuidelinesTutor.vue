<template>
<TopHeaderTutor/>
      <NavBarTutor/>
     <div id="backgroundColor">
       
     </div>
    
    <h3>This is an UserGuidelines Page</h3>
        <h2>Welcome to ModsMatch</h2>
        <h3>Modsmatch is a platform for students to enrich their learning experience<br>
        This is just a demo version and is made for learning purposes. Please use accordingly. <br></h3>
        <!-- <div v-if="user">
        <div > 
        <img src="@/assets/logo.png" style="width:75px;height:75px;border-radius:50%;border:4px solid #333" /> 
        </div>

        <div>
                <p> Name: <strong>{{user.displayName}}</strong><br/>
                Email: <strong>{{user.email}}</strong><br>
                Uid: <strong>{{user.uid}}</strong><br>
                Provider: <strong>{{user.providerData[0].providerId}}</strong></p>
            </div>

      </div>  -->
        
</template>

<script>

import NavBarTutor from '@/components/NavBarTutor.vue';
import TopHeaderTutor from '@/components/TopHeaderTutor.vue'

export default {

    name: "UserGuidelinesTutor",

    components: {
      TopHeaderTutor,
        NavBarTutor,
    },
}
</script>

<style scoped>

h1 {
  color: darkblue;
  font-family: "M PLUS Rounded 1c";
  text-align: center;
  font-weight: bolder;
}
#backgroundColor {
  background-color: #E5E5E5 ;
}
.top{
  background-color: #316879;
  min-height: 10vh;
}
#logo{
    float: left;
}
h1{
  color: white ;
  font-family: 'Rounded Mplus 1c Bold';
  text-align: center;
  font-weight: 700;
  font-style: normal;
  align-items: center;
  line-height: 74px;
}
.wrapper {
  text-align: center;
}

.form {
  text-align: center;
}



label {
  font-family: "M PLUS Rounded 1c";
  font-size: 14px;
  text-align: center;
  width: 200px;
  display: inline-block;
}

.updateProfilePictureBtn {
  border: none;
  background-color: inherit;
  cursor: pointer;
  color: red;
  font-size: 10px;
  font-family: 'M PLUS Rounded 1c';
  text-decoration: underline;
}
.editProfile {
  border: 1px solid #000000;
  background-color: #FFA500;
  cursor: pointer;
  color: black;
  display: flex;
  box-sizing: border-box;
  border-radius: 30px;
  font-family: 'M PLUS Rounded 1c';
  display: inline-block;
  width: 120px;
  height: 25px;
  font-size: 12px;
}

</style>