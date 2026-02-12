<template>
  <div>
    <h1>The Recipe Book</h1>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const recipes = ref([])

async function getData(){
  try {
    for (let i = 0; i < 3; i++) {
      const res = await fetch(
        "https://www.themealdb.com/api/json/v1/1/random.php"
      );
      const data = await res.json();

      if (!data.meals || !data.meals.length) {
        container.innerHTML = "<p>No meal found.</p>";
        return;
      }

      meals.push(data.meals[0]);
      savedMeals.push(data.meals[0])
      console.log(data.meals[0]);
    }
}
}

</script>

<style scoped>
h1,
h2 {
  text-align: center;
}
</style>
