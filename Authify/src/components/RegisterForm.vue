<template>
        <div class="header-container">
            <h3 class="header-text">Join thousands of learners from around the world</h3>
            <p class="header-paragraph">Master web development by making real-life projects. there are multiple paths for
                you to choose</p>
        </div>
        <div>
            <div class="w-full relative">
                <span class="material-icons input-icon">person</span>
                <input v-model="loginCredentials.name" class="field-input" type="text" placeholder="Your name">
            </div>
            <div class="form-container">
                <span class="material-icons input-icon">email</span>
                <input v-model="loginCredentials.email" class="field-input" type="text" placeholder="Email">
            </div>
            <div class="w-full relative">
                <span class="material-icons input-icon">lock</span>
                <input v-model="loginCredentials.password" class="field-input" type="password" placeholder="Password">
            </div>
            <button @click="submit" class="bg-blue-500 w-full rounded-md py-2 text-white font-semibold my-6"
                type="button">Start Coding Now</button>
        </div>
</template>

<script >
export default {
    emits:['submit'],
    data() {
        return {
            loginCredentials: {
                email: "",
                password: "",
                name:""
            },
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
.header-container {
    @apply my-5 pr-4
}

.header-text {
    @apply font-semibold text-gray-800 text-lg max-w-[318px] mb-3
}

.header-paragraph {
    @apply text-base text-gray-700
}

.form-container {
    @apply w-full relative my-4
}

.input-icon {
    @apply absolute top-2 left-2 text-gray-500
}

.field-input {
    @apply w-full px-10 py-2 border rounded-md
}</style>