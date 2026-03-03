<template>
  <div class="shadow-lg lg:min-h-150">
<h2 class="text-center xl:text-2xl font-serif xl:font-bold">{{ shoppingCart.name }}</h2>
<h3 class='flex justify-center items-center'>{{ shoppingCart.category }}</h3>
<h3 class='flex justify-center items-center'>{{ shoppingCart.id }}</h3>
<img :src="shoppingCart.img" alt="" class="w-100 ml-12 mt-10">
<slot></slot>


  </div>
</template>

<script setup>
defineProps({
    shoppingCart:{
        type: Object,
        required: true,
    }
})
</script>

<style scoped>
</style>
