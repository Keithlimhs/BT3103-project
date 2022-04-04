<template>
    <div id="backgroundColor">
        <link href='https://fonts.googleapis.com/css?family=M PLUS Rounded 1c' rel='stylesheet'>
        <TopHeader/> <br>
        <TutorProfileDisplay/> <br>
        <TutorAbout/> <br>
        <TutorModules/> <br>
        <TutorWebsite/>
    </div>
</template>

<script>
import TopHeader from '@/components/TopHeader.vue'
import TutorProfileDisplay from '@/components/TutorProfileDisplay.vue'
import TutorAbout from '@/components/TutorAbout.vue'
import TutorModules from '@/components/TutorModules.vue'
import TutorWebsite from '@/components/TutorWebsite.vue'

export default {
    name: 'TutorProfilePage',
    components: {
        TopHeader,
        TutorProfileDisplay,
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