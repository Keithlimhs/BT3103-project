<template>
    <div class="thirdcontainer">
        <div id="subheading3">
            Website
            <a v-bind:href="web">{{web}}</a>
        </div>  
    </div>
</template>

<script>
export default {
    data() {
        return {
            web: "https://www.linkedin.com"
        }
    }
    
    
}
</script>

<style scoped>
.thirdcontainer {
    background-color: #D4D4D4;
    border: 1px solid #000000;
    box-sizing: border-box;
}

#subheading3 {
font-family: 'Rounded Mplus 1c Bold';
font-weight: 700;
font-size: 15px;
text-align: left;
color: #8D8D8D;
}
</style>