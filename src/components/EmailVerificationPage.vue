<template>
<div class = 'emailVerification'>
    <TopHeaderForSignIn/>
    <div>
        <h1>Check your email for the verification link</h1>
    </div>
    <div>
        <p><strong>Did not receive the link?</strong></p>
        <button type = "button" id = "emailLink" v-on:click="sendEmailLink()">Send link</button>
    </div>
</div>
</template>

<script>
import TopHeaderForSignIn from '@/components/TopHeaderForSignIn.vue'

export default {
    components: {
        TopHeaderForSignIn
    }


}
</script>

<style scoped>

#emailVerification {
    background-color: #ced7d8;
    position: absolute;
}

h1{
    margin: 50px;
    padding: 75px;
    color: #1D427C;
    font-size: 36px;
}

p {
    margin: 50px;
    display: inline;
    font-size: 24px;
}

button {
    background-color: white;
    display: inline-block;
    border: none;
    box-shadow: 2px 2px 2px 2px grey;
    font-size: 20px;
    padding: 20px 44px;
    font-weight: bold;
}

</style>