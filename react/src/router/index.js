import { createRouter, createWebHistory } from 'vue-router'
import UserCreate from '@/views/UserCreate.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: UserCreate,
    },
  ],
})

export default router
