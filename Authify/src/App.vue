<template>
    <div class="grid place-items-center align-middle h-[90vh] border rounded-md  shadow-gray-300 shadow-md">
        <Profile/>
    </div>
</template>

<script setup>
import LogIn from './components/LogIn.vue';
import Profile from './components/Profile.vue'

components:{
    LogIn
}
</script>

<style scoped>

</style>
