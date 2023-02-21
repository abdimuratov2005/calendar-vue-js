import { createRouter, createWebHashHistory } from "vue-router";
import January from '../views/January.vue';
import February from '../views/February.vue';
import March from '../views/March.vue';
import April from '../views/April.vue';
import May from '../views/May.vue';
import June from '../views/June.vue';
import July from '../views/July.vue';
import August from '../views/August.vue';
import September from '../views/September.vue';
import October from '../views/October.vue';
import November from '../views/November.vue';
import December from '../views/December.vue';

const routes = [{
        path: '/01',
        component: January,
        alias: '/'
    },

    {
        path: '/02',
        component: February
    },
    {
        path: '/03',
        component: March
    },
    {
        path: '/04',
        component: April
    },
    {
        path: '/05',
        component: May
    },
    {
        path: '/06',
        component: June
    },
    {
        path: '/07',
        component: July
    },
    {
        path: '/08',
        component: August
    },
    {
        path: '/09',
        component: September
    },
    {
        path: '/10',
        component: October
    },
    {
        path: '/11',
        component: November
    },
    {
        path: '/12',
        component: December
    },
]

const router = createRouter({
    routes,
    history: createWebHashHistory(),
})

export default router;