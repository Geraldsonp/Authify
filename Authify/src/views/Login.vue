<template>
    <div class="logIn-container">
            <img :src="logos.devChallenges" alt="">
           
            <Transition mode="out-in">
                <div  v-if="IsLogIn">
                    <LogInForm  @submit="logUserIn"/>
                </div>
                <div v-else>
                    <RegisterForm   @submit="registerUser"/>
                </div>
            </Transition>

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
    import { getMyInfo } from '@/services/profileService';
    import { userStore } from '@/store/userStore';
    import RegisterForm from '@/components/RegisterForm.vue';
    import LogInForm from '@/components/LogInForm.vue';
    

    
    export default {
        components:{
            RegisterForm,
            LogInForm
        },
        data(){
            return{
                logos:{
                    devChallenges: logo,
                    google: googleLogo,
                    github: githubLogo,
                    twitter: twitterLogo,
                    facebook: facebookLogo
                },
                IsLogIn: false,
                userStore
                
            }
        },
        computed: {
            submitBtnText(){
                return this.IsLogIn ? 'Login' : 'Start Coding Now'
            }
        },
        methods:{
            logUserIn(loginCredentials){
                logIn(loginCredentials).then(response => {
                        localStorage.setItem("token", response.data.token);
                        localStorage.setItem("profile", JSON.stringify(response.data.profile));
                        userStore.user = response.data.profile
                        this.$router.push('/profile');
                    })
            },
            registerUser(loginCredentials){
                    singUp(loginCredentials).then(response => {
                        localStorage.setItem("token", response.data.token);
                        localStorage.setItem("profile", JSON.stringify(response.data.profile));
                        userStore.user = response.data.profile
                        this.$router.push('/profile');
                    })
            }
        }
    }
</script>

<style scoped>
    .logIn-container{
        @apply mx-auto max-w-[475px] p-14 border rounded-2xl shadow-lg border-gray-300
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

    .v-enter-from {
    opacity: 0;
    translate: -100px 0;
    transition-duration: 200ms;
  }
  .v-enter-to {
    opacity: 1;
    translate: 0 0;
    transition-duration: 300ms;
  }
  .v-leave-from {
    opacity: 1;
    translate: 0 0;
    transition-duration: 100ms;
  }
  .v-leave-to {
    opacity: 0;
    translate: 100px 0;
    transition-duration: 100ms;
  }

</style>