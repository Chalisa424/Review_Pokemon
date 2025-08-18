import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue';
import DetailPage from '../views/DetailPage.vue';
import SearchPage from '../views/SearchPage.vue';

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {path:'/', component: HomePage}, //หน้าหลัก
        {path:'/detail/:id', component: DetailPage, props: true},//หน้าค้นหา
        {path:'/search', component: SearchPage}//หน้ารายละเอียดของแต่ละ ID
    ]
})

export default router;