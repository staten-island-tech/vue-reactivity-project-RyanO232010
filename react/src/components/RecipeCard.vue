<template>
  <div class="justify-center shadow-lg lg:min-h-150">
<h2 class="text-center xl:text-2xl font-serif xl:font-bold">{{ shoppingCart.name }}</h2>
<h3>{{ shoppingCart.category }}</h3>
<h3>{{ shoppingCart.id }}</h3>

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
