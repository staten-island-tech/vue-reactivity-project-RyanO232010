<template>
  <div class="border p-6 m-4 w-64 flex flex-col items-center">
    <img :src="shoppingCart.img" class="w-40 h-40 object-cover mb-4" />
    <h2 class="text-xl font-bold">{{ shoppingCart.name }}</h2>
    <p>Price: ${{ shoppingCart.price }}</p>
    <p>Quantity: {{ shoppingCart.quantity }}</p>
  </div>
</template>

<script setup>
defineProps({
  shoppingCart: { type: Object, required: true },
})
</script>
