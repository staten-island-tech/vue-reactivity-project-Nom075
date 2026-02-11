import { createRouter, createWebHistory } from 'vue-router'
import mainCookie from '@/components/mainCookie.vue'
import cookieShop from '@/components/shop.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{
    path: '/',
    name: "/",
    component: mainCookie,
  },
  {
    path: '/cookieShop',
    name: "cookieShop",
    component: cookieShop,
  }
  ],
})

export default router
