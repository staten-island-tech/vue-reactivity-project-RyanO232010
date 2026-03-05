<template>
  <RouterLink to="/"><img src="../../public/imgs/home.jpg" alt="" class="w-20 h-20" /></RouterLink>
  <h1 class="text-3xl text-center mb-6 p-12 font-serif">Your Shopping Cart</h1>
  <div>
    <CartCard
      class="flex flex-col justify-center place-items-center"
      v-for="shoppingCart in shoppingCarts"
      :key="shoppingCart.id"
      :shoppingCart="shoppingCart"
      ><button class="justify-center mt-10" @click="addToCart(shoppingCart)">
        Remove
      </button></CartCard
    >
  </div>
</template>

<script setup>
defineProps({
  shoppingCart: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped>
h1,
h2 {
  text-align: center;
  font-size: 50px;
}
</style>
