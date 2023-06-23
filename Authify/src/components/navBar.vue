<template>
    <nav>
        <div class="py-4 flex justify-center gap-4">
            <router-link class="link" to="/">Home</router-link>
            <router-link class="link" to="/login">LogIn</router-link>
            <router-link class="link" to="/profile">Profile</router-link>
        </div>
    </nav>
</template>
<script>

    export default{
        
    }
</script>
<style scoped>
.link{
    @apply px-2 rounded-sm hover:bg-slate-500 hover:text-white
}

</style>