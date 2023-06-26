<style scoped>
    .label{
        @apply block mb-2 text-sm font-medium text-gray-900
    }
    .input{
        @apply bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
    }

</style>
<template>
    <div class="my-7">
        <div class="my-6 relative">
            <img :src="profileModel.imageUrl" alt="profile image" class="h-8 w-8">
            <label for="image" class="label absolute">ImageUrl</label>
            <input id="image" type="file"  class="hidden" required>
        </div>
        <div class="my-6">
            <label for="name" class="label">Name</label>
            <input v-model="profileModel.name" id="name" type="text"  class="input" required>
        </div>
        <div class="my-6">
            <label for="Bio" class="label">Bio</label>
            <textarea v-model="profileModel.bio" id="Bio" type="text"  class="input " required></textarea>
        </div>
        <div class="my-6">
            <label for="Phone" class="label">Phone</label>
            <input v-model="profileModel.phone" id="Phone" type="tel" class="input " required>
        </div>
        <div class="my-6">
            <label for="Email" class="label">Email</label>
            <input v-model="profileModel.email" id="Email" type="email"  class="input " required>
        </div>
        <div class="my-6">
            <label  for="password" class="label">Password</label>
            <input v-model="profileModel.password" id="password" type="password"  class="input " required>
        </div>

        <button @click="handleSubmit" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save</button>
    </div>

</template>
<script >


export default {
    props:{
        profile: {}
    },
    data(){
        return{
            profileModel: {
                imageUrl: this.profile.imageUrl,
                name: this.profile.name,
                bio: this.profile.bio,
                email: this.profile.email,
                password: "",
                phone:"",
            }
        }
    },
    emits:['submit'],
    methods:{
        handleSubmit(){
            this.$emit('submit', this.profileModel)
        }
    }
}

</script>
