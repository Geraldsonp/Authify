<style scoped>
.fieldtext{
    @apply text-gray-300 text-2xl
}
</style>
<template>
    <div class="">
            <div>
            <h1 class="text-center text-4xl mb-3">Personal info</h1>
            <p class="text-base">Basic info, loke your name and photo</p>
            </div>
            <div>
            <div class="flex justify-between border border-gray-200 px-9 py-8">
                <div class="fieldtext">
                    <span>Photo</span>
                </div>
                <img :src="profile?.imageUrl" alt="">
            </div>
            <div class="flex justify-between border border-gray-200 px-9 py-8">
                <span>Name</span>
                <span>{{ profile?.name }}</span>
            </div>
            <div class="flex justify-between border border-gray-200 px-9 py-8">
                <span>Bio</span>
                <span>{{ profile?.bio }}</span>
            </div>
            <div class="flex justify-between border border-gray-200 px-9 py-8">
                <span>Email</span>
                <span>{{ profile?.email }}</span>
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

export default {
    props:{
     user:{},
    },
    data() {
        return{
            profile:this.user,
        }
    },
}
</script>