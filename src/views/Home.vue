<script setup>
  import { state, login } from "../store";
</script>

<template>
  <main class="px-4 h-screen w-screen flex justify-center items-center">
    <section class="bg-white rounded-lg shadow-md p-4 text-center max-w-sm">
      <h1 class="text-4xl font-semibold font-mono tracking-wide text-slate-700">Car Pal</h1>
      <hr class="my-2">
      <p>An all-in-one app for tracking your car's fuel and maintenance records.</p>
      <button v-if="state.authenticating" :disabled="true" class="block w-full mt-2 py-1 rounded-md bg-slate-400 hover:cursor-not-allowed text-white btn-load">Loading</button>
      <button v-else-if="!state.user" @click="login" :disabled="state.authenticating" class="block w-full mt-2 py-1 rounded-md bg-amber-400 hover:bg-amber-600 hover:text-white duration-200">Log In With Google</button>
      <router-link v-else to="/dashboard" class="block w-full mt-2 py-1 rounded-md bg-amber-400 hover:bg-amber-600 hover:text-white duration-200">Enter App</router-link>
    </section>
  </main>
</template>

<style scoped>
.btn-load {
  position: relative;
  animation: pulse 1500ms cubic-bezier(0.76, 0.09, 0.17, 0.68) infinite;
}
.btn-load::after {
  content: "";
  position: absolute;
  animation: dots 1500ms ease-in-out infinite;
}
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  60% {
    opacity: .8;
  }
}
@keyframes dots {
  0% {
    content: ''
  }
  33% {
    content: '.'
  }
  66% {
    content: '..'
  }
  100% {
    content: '...'
  }
}
</style>
