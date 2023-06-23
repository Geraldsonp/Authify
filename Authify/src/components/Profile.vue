<style scoped>
.fieldtext {
    @apply text-gray-400 text-2xl
}
</style>
<template>
    <div class="">
        <div>
            <div class="flex border items-center border-gray-200 px-9 py-8">
                <span class="fieldtext w-1/2">Photo</span>
                <img class="h-16 w-16" :src="profile?.imageUrl" alt="">
            </div>
            <div class="flex border border-gray-200 px-9 py-8">
                <span class="text-gray-400 w-1/2">Name</span>
                <span>{{ profile?.name }}</span>
            </div>
            <div class="flex border border-gray-200 px-9 py-8">
                <span class="text-gray-400 w-1/2">Bio</span>
                <span>{{ profile?.bio }}</span>
            </div>
            <div class="flex  border border-gray-200 px-9 py-8">
                <span class="text-gray-400 w-1/2">Email</span>
                <span>{{ profile?.email }}</span>
            </div>
            <div class="flex  border border-gray-200 px-9 py-8">
                <span class="text-gray-400 w-1/2">Password</span>
                <span>*******</span>
            </div>
        </div>
    </div>
</template>
<script>
import { getMyInfo, updateProfile } from '../services/profileService'

export default {
    props: {
        user: {},
    },
    data() {
        return {
            profile: this.user,
        }
    },
}
</script>