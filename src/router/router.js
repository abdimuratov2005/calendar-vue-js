import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {
        path: '/01',
        component: () => import('../views/January.vue'),
        alias: '/'
    },
    {
        path: '/02',
        component: () => import ('../views/February.vue'),
    },
    {
        path: '/03',
        component: () => import ('../views/March.vue'),
    },
    {
        path: '/04',
        component: () => import ('../views/April.vue'),
    },
    {
        path: '/05',
        component: () => import ('../views/May.vue'),
    },
    {
        path: '/06',
        component: () => import ('../views/June.vue'),
    },
    {
        path: '/07',
        component: () => import ('../views/July.vue'),
    },
    {
        path: '/08',
        component: () => import ('../views/August.vue'),
    },
    {
        path: '/09',
        component: () => import ('../views/September.vue'),
    },
    {
        path: '/10',
        component: () => import ('../views/October.vue'),
    },
    {
        path: '/11',
        component: () => import ('../views/November.vue'),
    },
    {
        path: '/12',
        component: () => import ('../views/December.vue'),
    },
]

const router = createRouter({
    routes,
    history: createWebHashHistory(),
})

export default router;