import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Play from '../views/Play.vue';
import Rule from '../views/Rule.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/play',
        name: 'Play',
        component: Play
    },
    {
        path: '/rule',
        name: 'Rule',
        component: Rule
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router