<template>
    <div class="flex items-center gap-3 relative">
        <img class="border rounded-e-md h-10 w-10" :src="userStore.user.imageUrl" alt="">
        <span class="">{{ userStore.user.name }}</span>
        <span @click="toggleDrawer" v-if="isOpen" class="material-icons input-icon hover:cursor-pointer">arrow_drop_down</span>
        <span  @click="toggleDrawer" v-else class="material-icons input-icon hover:cursor-pointer">arrow_drop_up</span>

        <div v-if="isOpen" class="absolute p-3 top-16 right-0 border rounded-md bg-slate-50">
            <ul>
                <li>My Profile</li>
                <li>Group Chat</li>
                <li>Logout</li>
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
            }
        }
    }
</script>
<style scoped>
li{
    @apply hover:cursor-pointer hover:bg-slate-400 rounded-md px-3 py-1
}
  
    

</style>