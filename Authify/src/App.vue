<template>
    <div class="px-1">
        <navBar class="mb-9"/>
        <router-view></router-view>
    </div>
</template>

<script setup>
    import navBar from './components/navBar.vue';
    components:{
        navBar
    }
</script>

<style scoped>

</style>
