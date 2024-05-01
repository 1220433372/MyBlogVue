import {createRouter, createWebHistory} from 'vue-router'
import Layout from '@/layout/index.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/:pathMatch(.*)*",
            component: () => import('@/views/error/404.vue'),
        },
        {
            path: '',
            name: 'home',
            component: Layout,
            redirect: '/index',
            children: [
                {
                    path: '/index',
                    name: 'Index',
                    component: () => import('@/views/index.vue'),
                    meta: {
                        title: '首页',
                        icon: 'el-icon-s-home',
                        keepLive: true,
                    }
                },
                {
                    path: '/article',
                    name: 'Article',
                    component: () => import('@/views/article/index.vue'),
                    meta: {
                        title: '文章列表',
                        icon: 'el-icon-s-home',
                        keepLive: true,
                    }
                }
            ]
        },
    ]
})

export default router
