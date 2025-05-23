import '@/assets/style.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from '@/App.vue'
import Layout from '@/pages/Layout.vue'
import TimeCalculator from '@/components/TimeCalculator/TimeCalculator.vue';
import PokeList from '@/components/PokeList/PokeList.vue';
import Typing from '@/components/Typing/Typing.vue';
import Pagination from '@/components/Pagination/Pagination.vue';
import Form from '@/components/Form/Form.vue';

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
        },
        {
            path:'/typing', 
            name:'Typing', 
            component: Typing
        },
        {
            path:'/pagination',
            name: 'Pagination',
            component: Pagination
        },
        {
            path:'/form',
            name: 'Form',
            component: Form
        }
    ]
})

createApp(App)
.use(router)
.mount('#app')
