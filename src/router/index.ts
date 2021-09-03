import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/home/index.vue'
import Product from '../views/product/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: '首页',
    component: Home,
  },
  {
    path: '/product',
    name: '商品',
    component: Product,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
