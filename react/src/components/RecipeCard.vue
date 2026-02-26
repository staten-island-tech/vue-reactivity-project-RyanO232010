<template>
  <div>
<h2 class="shadow-lg">{{ shoppingCart.name }}</h2>
<!-- <h3>{{ shoppingCart.category }}</h3>
<h3>{{ shoppingCart.id }}</h3> -->

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

<style scoped>*
h2{
  font-size: 20px;
}

div{
  border: 2px;
}
</style>
