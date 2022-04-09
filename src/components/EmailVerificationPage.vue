<template>
<div class = 'emailVerification'>
    
    <TopHeader/>
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
import TopHeader from '@/components/TopHeader.vue'
//import { getAuth, sendSignInLinkToEmail } from "firebase/auth";

export default {
    components: {
        TopHeader
    },

    // methods: {
    //     async sendEmailLink() {
    //         const auth = getAuth();
    //         const actionCodeSettings = {
    //     // URL you want to redirect back to. The domain (www.example.com) for this
    //     // URL must be in the authorized domains list in the Firebase Console.
    //         url: 'https://www.example.com/finishSignUp?cartId=1234',
        
    //         handleCodeInApp: false,
        
    //         };
    //         sendSignInLinkToEmail(auth, email, actionCodeSettings).then(() => {
    //             window.localStorage.setItem('emailForSignIn', email);
    //         })
    //     }
    // }


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