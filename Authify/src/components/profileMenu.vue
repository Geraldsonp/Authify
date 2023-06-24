<template>
    <div class="flex items-center gap-3 relative">
        <img class="border rounded-e-md h-10 w-10" :src="userStore.user.imageUrl" alt="">
        <span class="">{{ userStore.user.name }}</span>
        <span @click="toggleDrawer" v-if="isOpen" class="material-icons input-icon hover:cursor-pointer">arrow_drop_down</span>
        <span  @click="toggleDrawer" v-else class="material-icons input-icon hover:cursor-pointer">arrow_drop_up</span>

        <div v-if="isOpen" class="absolute text-sm p-3 top-16 right-0 border rounded-md bg-slate-50 w-48">
            <ul>
                <li class="flex items-center mb-1 ">
                    <span class="material-icons icon ">person</span>
                    My Profile</li>
                <li class="flex items-center mb-1">
                    <span class="material-icons icon">group</span>
                    Group Chat</li>
                <li @click="logOut" class="flex items-center mb-1">
                    <span class="material-icons icon text-red-500">exit_to_app</span>
                    Logout</li>
            </ul>
        </div>
    </div>
</template>
<script>
    import { userStore } from '@/store/userStore';
    export default{
        data(){
            return{
                userStore,
                isOpen: false
            }
        },
        methods:{
            toggleDrawer(){
                this.isOpen = !this.isOpen;
            },
            logOut(){
                this.$router.push('/login');
                userStore.user = null;
                localStorage.removeItem('token')
                localStorage.removeItem('profile')
            }
        }
    }
</script>
<style scoped>
li{
    @apply hover:cursor-pointer hover:bg-purple-50 rounded-xl px-3 py-2
}
.icon{
    @apply text-xl mr-3 !important
}
    

</style>