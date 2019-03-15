//这里是动态路由

import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../components/home'
import Cart from '../components/cart'
import Lists from '../components/lists'
import Pinglun from '../components/pinglun'
import Mybar from '../components/mybar'
import Good from '../pages/good'
import Goods from '../pages/goods'
import List from '../pages/list'
import Login from '../pages/login'
import Reg from '../pages/reg'


Vue.use(VueRouter);

let router = new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/home'
            // 地址如果是/的话就自动跳转为首页
        },

        {
            // 这里的参数要在下面的全局路由守卫使用!!
            name: 'Cart',
            path: '/cart',
            component: Cart,
            meta: {
                requiresAuth: true
            }
        },
        {
            // 首页路由
            name: 'Home',
            path: '/home',
            component: Home
        },
        {
            // 列表页路由
            name: 'List',
            path: '/list',
            component: List
        },
        {
            // 详情页路由，这里要=传输ID
            name: 'Goods',
            path: '/goods',
            component: Goods,
        },
        {
            // 分页的路由
            name: 'Lists',
            path: '/lists',
            component: Lists
        },
        {
            // 首页跳转详情页的路由
            name: 'Good',
            path: '/good',
            component: Good,
        },
        {
            // 登录的路由
            name: 'Login',
            path: '/login',
            component: Login,
            beforeEnter(to, from, next) {
                // 鸿姐这里自己换, 我只是用了localStorage存 你弄一个token
                // 这里是单个路由的独享
                let username = localStorage.getItem('username')
                if (username) {
                    next({
                        name: 'Home'
                    })
                } else {
                    next();
                }
            }
        },

        {
            // 我的钱包路由
            name: 'Mybar',
            path: '/mybar',
            component: Mybar
        },
        {
            // 注册的路由
            name: 'Reg',
            path: '/reg',
            component: Reg
        },
        {
            // 评论区域的路由
            name: 'Pinglun',
            path: '/pinglun',
            component: Pinglun
        }
    ]
});


// 这里下面有一个全局守卫 登录页面做好了再做全局守卫验证

export default router;