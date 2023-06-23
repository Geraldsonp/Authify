import './assets/main.css'
import 'material-icons/iconfont/material-icons.css';


import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import Profile from '@/views/Profile.vue'


const router = createRouter({
    history: createWebHistory(),
    routes:[
        {path: '/', name:'Home', component:Home},
        {path: '/login', name:'Login', component:Login},
        {path: '/profile', name:'profile', component:Profile},
    ]
})

createApp(App)
.use(router)
.mount('#app')
