//

import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/nyheter',
            name: 'news-shoes',
            //Behöver inte importera uppe
            component: () => import('../views/NewsShoes.vue')
        },
        {
            path: '/cats',
            name: 'cats',
            component: () => import('../views/CatsApi.vue')
        }
    ]
});

export default router;
