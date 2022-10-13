import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: 'mycards',
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/modules/Home.vue'),
  },
  {
    path: '/mycards',
    name: 'cards1',
    component: () => import('@/views/modules/Cards.vue'),
  },
  {
    path: '/payments',
    name: 'payments',
    component: () => import('@/views/modules/Payments.vue'),
  },
  {
    path: '/credit',
    name: 'credit',
    component: () => import('@/views/modules/Credit.vue'),
  },
  {
    path: '/settings',
    name: 'settings',
    component: () => import('@/views/modules/Settings.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
