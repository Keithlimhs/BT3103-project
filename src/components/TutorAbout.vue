<template>
    <div class="firstcontainer">
        <div id="subheading1">About myself</div>
        <div id="about">
            {{tutor.About}}
        </div>
    </div>
</template>

<script>


export default {
    name: "TutorAbout",
    props: {
       tutor: Object
    },
}

</script>

<style scoped>
.firstcontainer {
    background-color: #D4D4D4;
    border: 1px solid #000000;
    box-sizing: border-box;
    height: 100px;
    padding: 20px;
    margin: 10px;
    margin-left: 170px;
    margin-right: 170px; 
	flex-direction: row;
}

#subheading1 {
font-weight: 700;
font-size: 20px;
text-align: left;
color: #8D8D8D;
}

#about {
font-weight: 700;
font-size: 20px;
text-align: left;
color: #000000;
}
</style>