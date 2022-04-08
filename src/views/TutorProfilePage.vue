<template>
    <div id="backgroundColor">
        <link href='https://fonts.googleapis.com/css?family=M PLUS Rounded 1c' rel='stylesheet'>
        <TutorAbout/> <br>
        <TutorModules/> <br>
        <TutorWebsite/>
    </div>
</template>

<script>
import TutorAbout from '@/components/TutorAbout.vue'
import TutorModules from '@/components/TutorModules.vue'
import TutorWebsite from '@/components/TutorWebsite.vue'

export default {
    name: 'TutorProfilePage',
    components: {
        TutorAbout,
        TutorModules,
        TutorWebsite,
    }
    
}
</script>

<style scoped>
#backgroundColor {
  background-color: #E5E5E5 ;
}
</style>