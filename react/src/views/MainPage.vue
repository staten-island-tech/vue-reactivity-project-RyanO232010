<template>
  <div>
    <h1>The Recipe Book</h1>
    <div class="bcontainer"></div>
  </div>
</template>

<script setup>
const alp = "abcdefghijklmnopqrstuvwxyz".split("");

function injectButtons() {
  bcontainer.innerHTML = "";

  alp.forEach(letter => {
    bcontainer.insertAdjacentHTML(
      "beforeend",
      `<button class="letter-btn p-2 bg-red-600 m-1 px-3 py-1.5 rounded" data-letter="${letter}">
        ${letter.toUpperCase()}
      </button>`
    );
  });
}

injectButtons();
</script>

<style scoped>
h1,
h2 {
  text-align: center;
}
</style>
