import '@/assets/style.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from '@/App.vue'
import Layout from '@/pages/Layout.vue'
import TimeCalculator from '@/components/TimeCalculator/TimeCalculator.vue';
import PokeList from '@/components/PokeList/PokeList.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path:'/', 
            name:'Layout', 
            component: Layout
        },
        {
            path:'/time-calculator', 
            name:'TimeCalculator', 
            component: TimeCalculator
        },
        {
            path:'/poke-list', 
            name:'PokeList', 
            component: PokeList
        }
    ]
})

createApp(App)
.use(router)
.mount('#app')
