<template>
    <div class="max-w-3xl mx-auto">
        <div class="">
            <div>
                <h1 class="text-center text-4xl mb-3">Personal info</h1>
                <p class="text-lg text-center text-gray-600">Basic info, loke your name and photo</p>
            </div>
            <div class="flex justify-between align-middle ">
                <Transition name="slide-up" mode="out-in">
                <div v-if="!isEdit" class="">
                    <h3 class="text-3xl my-1">Profile</h3>
                    <p class="text-gray-500 text-base">Some info may be visible to other people</p>
                </div>
                <div v-else>
                    <h3 class="text-3xl my-1">Change Info</h3>
                    <p  class="text-gray-500 text-base">Changes will be reflected to every services</p>
                </div>
                </Transition>
                <div class="grid place-content-center">
                    <Transition name="slide-up" mode="out-in">
                        <button v-if="!isEdit" @click="editToggle"  class="border border-gray-500 text-gray-500 font-semibold px-9 py-2 text-lg rounded-lg">Edit</button>
                        <button v-else @click="editToggle"  class="border bg-red-500 border-gray-500 text-white font-semibold px-9 py-2 text-lg rounded-lg ">Cancel</button>
                    </Transition>
                </div>
            </div>
        </div>
        <Profile :user="userStore.user" v-if="!isEdit"/>
        <EditProfile v-else :profile="userStore.user" @submit="updateProfile"/>
    </div>
</template>
<script>
import Profile from '@/components/Profile.vue';
import {userStore} from '@/store/userStore'
import EditProfile from '@/components/EditProfile.vue';
import { updateProfile } from '@/services/profileService';

 export default{
    components:{
        Profile,
        EditProfile
    },
    data(){
        return {
            userStore,
            isEdit: false
        }
    },
    methods:{
        updateProfile(profile){
            updateProfile(profile, userStore.user.id)
                .then(response => {
                    userStore.user = response.data;
                    this.editToggle();
                }).catch(console.log)
        },
        editToggle(){
            this.isEdit = !this.isEdit;
        }
    }
}   
</script>
<style scoped>
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.15s ease-out;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

</style>