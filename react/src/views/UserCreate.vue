<template>
  <div>
    <form action="submit" @submit.prevent="login(user)">
      <label for="username">Username</label>
      <input type="text" v-model="user.username" />
      <label for="password">Password</label>
      <input type="password" v-model="user.password" />
      <button type="submit" @click="loginCheck">Login</button>
    </form>
    <h2 v-if="loggedIn == true">Welcome back, {{ user.username }}</h2>
    <h2 v-else>Please log in to continue.</h2>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'

const user = reactive({ username: '', password: '' })

const loggedIn = ref(false)
function login(user) {
    console.log("user.username")
    loggedIn.value = true
}


</script>

<style scoped></style>
