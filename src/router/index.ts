import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path      : '/',
    name      : 'home',
    component : ()=> import("../views/HomeView.vue"),
  },
  {
    path      : '/transparencia',
    name      : 'clarity',
    component : ()=> import("../views/ClarityView.vue"),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
