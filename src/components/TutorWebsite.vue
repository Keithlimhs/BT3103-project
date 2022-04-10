<template>
    <div class="thirdcontainer">
        <div id="subheading3">
            Website
        </div>
        <div id="link-btn">
            <button v-on:click='btnClick'>{{tutor.Website}}</button>
        </div>  
    </div>
</template>

<script>

export default {
    name: "TutorWebsite",
    props: {
        tutor: Object
    },
    methods: {
        btnClick() {
            window.open(this.tutor.Website);
        }
    }
    
    
}
</script>

<style scoped>
.thirdcontainer {
    background-color: #D4D4D4;
    border: 1px solid #000000;
    box-sizing: border-box;
    padding: 20px;
    margin: 10px;
    margin-left: 170px;
    margin-right: 170px; 
	flex-direction: row;
    height: 50px;
    align-items: center;
    display: flex;
}

#subheading3 {
font-weight: 700;
font-size: 20px;
text-align: left;
color: #8D8D8D;
}

button {
    border-radius: 10px;
    margin-left: 20px;
    height: 30px;
    padding-left: 20px;
    padding-right: 20px;
}
</style>