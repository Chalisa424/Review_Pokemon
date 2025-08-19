import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue';
import DetailPage from '../views/DetailPage.vue';

const router = createRouter ({
    history: createWebHistory(),
    routes:[
        {
            path:'/', 
            name:'Home',
            component: HomePage
        },
        {
            path:'/pokemon/:id',
            name:'DetailPage',
            component: DetailPage
        }
    ]
})


export default router;