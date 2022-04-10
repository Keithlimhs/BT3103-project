<template>
    <div class="secondcontainer">

        <div id="subheading2">Modules Available</div>
        <div class="modules" v-for="module in tutor.ModulesAvailable" :key="module">
            <button @click="module.isVisible=true" color="primary" type="border">{{module.ModuleCode}}</button>
            <popup v-show="module.isVisible">
                <p>
                    Grade Attained: {{module.GradeAttained}} <br>
                    Year Taken: {{module.AY}} <br>
                    Sem Taken: {{module.SemTaken}} <br>
                    Professor: {{module.ProfName}}
                    <button @click="module.isVisible=false" color="primary" type="border">Close</button>
                </p>
            </popup>
        </div>
    </div>
</template>

<script>

export default {
    props: {
       tutor: Object
    },
}
</script>

<style scoped>
.secondcontainer {
    background-color: #D4D4D4;
    border: 1px solid #000000;
    box-sizing: border-box;
    padding: 20px;
    margin: 10px;
    margin-left: 170px;
    margin-right: 170px;
    display: flex;
	flex-direction: row;
}
#subheading2 {
font-weight: 700;
font-size: 20px;
text-align: left;
color: #8D8D8D;
}
button {
    border: 1px solid #000000;
    display: flex;
    justify-content: left;
    border: 1px solid #000000;
    box-sizing: border-box;
    border-radius: 30px;
    margin-left: 20px;
    margin-top: 5px;
}
p {
    text-align: left;
}

</style>