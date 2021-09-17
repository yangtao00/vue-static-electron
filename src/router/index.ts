import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: '首页',
    component: () => import('@/views/home/index.vue'),
  },
  {
    path: '/product',
    name: '商品',
    redirect: '/product/list',
    component: () => import('@/views/product/index.vue'),
    children: [
      {
        path: 'list',
        name: '商品',
        component: () => import('@/views/product/list.vue'),
      },
      {
        path: 'detail/:id',
        name: 'productDetail',
        props: true,
        component: () => import('@/views/product/detail.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
