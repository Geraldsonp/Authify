<template>
        <div class="my-5">
            <h3 class="header-text">Login</h3>
        </div>
        <div>
            <div class="form-container">
                <span class="material-icons input-icon">email</span>
                <input v-model="loginCredentials.email" class="field-input" type="text" placeholder="Email">
            </div>
            <div class="w-full relative">
                <span class="material-icons input-icon">lock</span>
                <input v-model="loginCredentials.password" class="field-input" type="password" placeholder="Password">
            </div>
            <button @click="submit" class="bg-blue-500 w-full rounded-md py-2 text-white font-semibold my-6" type="button">Log In</button>
        </div>
</template>

<script >
export default {
    emits:['submit'],
    data(){
        return{
            loginCredentials: {
                email:"",
                password:""
            }
        }
    },
    methods:{
        submit(){
            this.$emit('submit', this.loginCredentials);
        }
    }
}
</script>

<style scoped>




.form-container{
    @apply w-full relative my-4
}
.input-icon{
    @apply absolute top-2 left-2 text-gray-500
}

.field-input{
    @apply w-full px-10 py-2 border rounded-md
}

</style>