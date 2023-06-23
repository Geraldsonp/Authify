<template>
    <div class="max-w-lg mx-auto">
        <div class="">
            <div class="flex justify-between align-middle ">
                <div class="max-w-[210px]">
                    <h3 class="text-3xl my-1">Profile</h3>
                    <p class="text-gray-500 text-base">Some info may be visible to other people</p>
                </div>
                <div class="grid place-content-center">
                    <Transition name="slide-up" mode="out-in">
                        <button v-if="!isEdit" @click="editToggle"  class="border border-gray-500 text-gray-500 font-semibold px-9 py-2 text-lg rounded-lg">Edit</button>
                        <button v-else @click="editToggle"  class="border bg-red-500 border-gray-500 text-white font-semibold px-9 py-2 text-lg rounded-lg ">Cancel</button>
                    </Transition>
                </div>
            </div>
        </div>
        <Profile :user="userStore.user" v-if="!isEdit"/>
        <EditProfile v-if="isEdit" :profile="userStore.user" @submit="updateProfile"/>
    </div>
</template>
<script>
import Profile from '@/components/Profile.vue';
import {userStore} from '@/store/userStore'
import EditProfile from '@/components/EditProfile.vue';
import { getMyInfo, updateProfile } from '@/services/profileService';

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
    beforeMount(){
        this.getProfileInfo();
    },
    methods:{
        getProfileInfo(){
            getMyInfo().then(response => {
                console.log(response.data);
                userStore.user = response.data;
            })
        },
        updateProfile(profile){
            updateProfile(profile, userStore.user.id)
                .then(response => {
                    userStore.user = response.data;
                })
            this.editToggle();
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