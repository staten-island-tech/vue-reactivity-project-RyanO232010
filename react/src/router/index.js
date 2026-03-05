import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/views/MainPage.vue'
import ShoppingCart from '@/views/ShoppingCart.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainPage,
    },
     {
      path: '/cart',
      name: 'cart',
      component: ShoppingCart,
    },
  ],
})

export default router
