<template>
  <RouterLink to="/">
    <img src="/imgs/home.jpg" class="w-20 h-20" />
  </RouterLink>

  <h1 class="text-3xl text-center mb-6 p-12 font-serif">Your Shopping Cart</h1>

  <div class="flex flex-wrap justify-center gap-4">
    <CartCard v-for="item in cart" :key="item.id" :shoppingCart="item" />
  </div>
</template>

<script setup>
import { cart } from './cart.js'
import CartCard from '../components/CartCard.vue'
</script>
