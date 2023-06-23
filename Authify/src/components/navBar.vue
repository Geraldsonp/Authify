<template>
    <nav>
        <div class="py-4 flex justify-center gap-4">
            <router-link class="link" to="/">Home</router-link>
            <router-link class="link" to="/login">LogIn</router-link>
            <router-link class="link" to="/profile">Profile</router-link>
        </div>
        <div class="flex justify-between md:px-12">
            <img :src="devLogo" alt="">
            <profileMenu class="z-20"/>
        </div>
    </nav>
</template>
<script>
    import logo from '@/assets/devchallenges.svg';
    import profileMenu from './profileMenu.vue';

    export default{
        components:{
            profileMenu
        },
        data(){
            return {
                devLogo : logo
            }
        }
    }
</script>
<style scoped>
.link{
    @apply px-2 rounded-sm hover:bg-slate-500 hover:text-white
}

</style>