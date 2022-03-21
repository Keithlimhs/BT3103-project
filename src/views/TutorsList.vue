<template> 
    <TutorSearchBar/>
    <TutorProfileDisplay/>
</template>

<script>
import TutorSearchBar from '../components/TutorSearchBar.vue'
import TutorProfileDisplay from '../components/TutorProfileDisplay.vue'

export default {
    name: "TutorsList",
    components: {
        TutorSearchBar,
        TutorProfileDisplay,
    },
    data(){
        return
    },
}
</script>

<style scoped>

</style>