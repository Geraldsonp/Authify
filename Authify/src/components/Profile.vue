<style scoped>
.fieldtext{
    @apply text-gray-300 text-2xl
}
</style>
<template>
    <EditProfile v-if="isEdit" profile="profile" @goBack="editToggle" @submit="updateProfile"/>


<div v-if="!isEdit">
        <div>
        <h1 class="text-center text-4xl mb-3">Personal info</h1>
        <p class="text-base">Basic info, loke your name and photo</p>
    </div>
    <div class="md:border container max-w-[848px] md:border-gray-200">
        <div class="flex justify-between px-9 py-8 align-middle ">
            <div class="max-w-[210px]">
                <h3 class="text-3xl my-1">Profile</h3>
                <p class="text-gray-500 text-base">Some info may be visible to other people</p>
            </div>
            <div class="">
                <button @click="editToggle" class="border border-gray-500 text-gray-500 font-semibold px-9 py-2 text-lg rounded-lg mt-[25%]">Edit</button>
            </div>
        </div>
        <div class="flex justify-between border border-gray-200 px-9 py-8">
            <div class="fieldtext">
                <span>Photo</span>
            </div>
            <img :src="profile.imageUrl" alt="">
        </div>
        <div class="flex justify-between border border-gray-200 px-9 py-8">
            <span>Name</span>
            <span>{{ profile.name }}</span>
        </div>
        <div class="flex justify-between border border-gray-200 px-9 py-8">
            <span>Bio</span>
            <span>{{ profile.bio }}</span>
        </div>
        <div class="flex justify-between border border-gray-200 px-9 py-8">
            <span>Email</span>
            <span>{{ profile.email }}</span>
        </div>
        <div class="flex justify-between border border-gray-200 px-9 py-8">
            <span>Password</span>
            <span>*******</span>
        </div>
    </div>
    </div>
    
</template>
<script>
import { getMyInfo, updateProfile } from '../services/profileService'
import EditProfile from './EditProfile.vue';



export default {
    components:{
    EditProfile,
    EditProfile
},
    beforeMount(){
        this.getProfileInfo();
    },

    data() {
        return{
            profile:{},
            isEdit: false
        }
    },

    methods:{
        getProfileInfo(){
            getMyInfo().then(response => {
                console.log(response.data);
                this.profile = response.data;
            })
        },
        updateProfile(profile){
            updateProfile(profile, this.profile.id)
                .then(response => {
                    this.profile = response.data;
                })
            this.editToggle();
        },
        editToggle(){
            this.isEdit = !this.isEdit;
        }
    }
}
</script>