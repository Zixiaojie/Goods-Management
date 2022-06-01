import Vue from "vue";
import VueRouter from "vue-router";
//import * as path from "path";
//第一种方式：直接引入；import Home from "../views/Home";component: Home

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Main',
        component: () => import("../views/Main"),//第二种方式：按需引入
        children: [
            // {
            //     path: '/home',
            //     name: 'home',
            //     component: () => import('../views/home')
            // },
            // {
            //     path: '/User',
            //     name: "user",
            //     component: () => import("../views/User/User"),
            // },
            // {
            //     path: '/mall',
            //     name: "mall",
            //     component: () => import("../views/mall"),
            // },
            // {
            //     path: '/page1',
            //     name: "page1",
            //     component: () => import("../views/other/pageOne"),
            // },
            // {
            //     path: '/page2',
            //     name: "page2",
            //     component: () => import("../views/other/pageTwo"),
            // },
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/Login/login.vue')
    }

]

const router = new VueRouter({
    mode: 'history',
    routes
});

export default router;