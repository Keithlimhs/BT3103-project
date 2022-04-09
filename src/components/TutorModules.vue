<template>
    <div class="secondcontainer">
        <div id="subheading2">Modules Available</div>
        <div class="modules">
            <button @mouseover="popupActivo=true" @mouseleave="popupActivo=false" color="primary" type="border">{{module}}</button>
            <popup v-show="popupActivo">
                <p>
                    {{grade}} <br>
                    {{yearTaken}}
                </p>
            </popup>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            module: "BT3103",
            grade: "Grade Attained: A+",
            yearTaken: "Year Taken: 2",
            popupActivo: false,
        }
    },
    
}
</script>

<style scoped>
.secondcontainer {
    background-color: #D4D4D4;
    border: 1px solid #000000;
    box-sizing: border-box;
    display: flex;
    height: 50px;
    align-items: center;
}
#subheading2 {
/* font-family: 'Rounded Mplus 1c Bold'; */
font-weight: 700;
font-size: 20px;
text-align: left;
color: #8D8D8D;
}
button {
    border: 1px solid #000000;
    background-color: white;
    display: flex;
    justify-content: left;
    border: 1px solid #000000;
    box-sizing: border-box;
    border-radius: 30px;
    margin-left: 20px;
    font-size: 18px;
}
p {
    text-align: left;
}
</style>