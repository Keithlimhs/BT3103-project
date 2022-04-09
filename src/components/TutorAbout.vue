<template>
    <div class="firstcontainer">
        <div id="subheading1">About myself</div>
        <div id="about">
            {{description}}
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            description: "I am a seasoned tutor and was a TA for several mods in the past semesters. I know the ins and outs of the mods I’ll be teaching and will definitely coach you to the best of my abilities so you can trust me to help you attain your desired grades."
        }
    }
}
</script>

<style scoped>
.firstcontainer {
    background-color: #D4D4D4;
    border: 1px solid #000000;
    box-sizing: border-box;
    height: 100px;
}

#subheading1 {
/* font-family: 'Rounded Mplus 1c Bold'; */
font-weight: 700;
font-size: 20px;
text-align: left;
color: #8D8D8D;
}

#about {
/* font-family: 'Rounded Mplus 1c Bold'; */
font-weight: 700;
font-size: 18px;
text-align: left;
color: #000000;
}
</style>