<template>
    <div class="px-1 h-full">
        <navBar v-if="!isLogInPage" class="mb-9"/>
        <router-view></router-view>
    </div>
</template>

<script >
    import navBar from './components/navBar.vue';

    export default{
        components:{
            navBar
        },
        computed: {
            isLogInPage(){
                console.log(this.$route.name == 'Login')
                return this.$route.name == 'Login'
                
            }
        }
    }
    
</script>

<style scoped>

</style>
