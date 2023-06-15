<template>
        <div class="logIn-container">
            <img :src="logos.devChallenges" alt="">
            <div v-if="!IsLogIn" class="header-container">
                <h3 class="header-text">Join thousands of learners from around the world</h3>
                <p class="header-paragraph">Master web development by making real-life projects. there are multiple paths for you to choose</p>
            </div>
            <div v-if="IsLogIn" class="my-5">
                <h3 class="header-text">Login</h3>
            </div>
            <div>
                <div class="form-container">
                    <span class="material-icons input-icon">email</span>
                    <input v-model="loginCredentials.email" class="field-input" type="text" placeholder="Email">
                </div>
                <div class="w-full relative">
                    <span class="material-icons input-icon">lock</span>
                    <input v-model="loginCredentials.password" class="field-input" type="password" placeholder="Password">
                </div>
                <button @click="submit" class="bg-blue-500 w-full rounded-md py-2 text-white font-semibold my-6" type="button">{{ submitBtnText }}</button>
            </div>
            <div class=" flex-row justify-items-center w-2/3 mx-auto text-gray-400">
                <p class="text-center text-sm">or continue with these solcial profile</p>
                <div class="flex justify-between my-5">
                    <a href="#" class="social-icon">
                        <img :src="logos.google" alt="">
                    </a>
                    <a href="#">
                        <img :src="logos.facebook" alt="">
                    </a><a href="#">
                        <img :src="logos.twitter" alt="">
                    </a><a href="#">
                        <img :src="logos.github" alt="">
                    </a>
                </div>
                <p class="text-center">{{ IsLogIn ? 'Dont have an account yet?' : 'Already a member? '}}<a class="text-blue-500" href="#" @click="IsLogIn = !IsLogIn">{{ IsLogIn ? 'Register' : "Login" }}</a></p>
            </div>
        </div>
</template>

<script >
    import {singUp, logIn} from '@/services/authService.js'
    import logo from '@/assets/devchallenges.svg';
    import googleLogo from '@/assets/Google.svg';
    import githubLogo from '@/assets/Gihub.svg';
    import twitterLogo from '@/assets/Twitter.svg';
    import facebookLogo from '@/assets/Facebook.svg';

    

    
    export default {
        
        data(){
            return{
                loginCredentials: {
                    email:"",
                    password:"",
                    name:"JohnDoe"
                },
                logos:{
                    devChallenges: logo,
                    google: googleLogo,
                    github: githubLogo,
                    twitter: twitterLogo,
                    facebook: facebookLogo
                },
                IsLogIn: false
                
            }
        },
        computed: {
            submitBtnText(){
                return this.IsLogIn ? 'Login' : 'Start Coding Now'
            }
        },
        methods:{
            submit(){
                if(this.IsLogIn){
                    logIn(this.loginCredentials).then(response => {
                        localStorage.setItem("token", response.data);
                    })
                }else{
                    singUp(this.loginCredentials).then(response => {
                        localStorage.setItem("token", response.data);
                    })
                }
                
            }
        }
    }
</script>

<style scoped>
    .logIn-container{
        @apply max-w-[475px] p-14 border rounded-2xl shadow-lg border-gray-300
    }
    .header-container{
        @apply my-5 pr-4
    }
    .header-text{
        @apply font-semibold text-gray-800 text-lg max-w-[318px] mb-3
    }

    .header-paragraph{
        @apply text-base text-gray-700
    }

    .form-container{
        @apply w-full relative my-4
    }
    .input-icon{
        @apply absolute top-2 left-2 text-gray-500
    }

    .field-input{
        @apply w-full px-10 py-2 border rounded-md
    }

</style>