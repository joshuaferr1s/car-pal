<script setup>
  import { state } from "../store";
  import AppBar from "./AppBar.vue";
</script>

<template>
  <template v-if="state.user">
    <app-bar />
    <slot />
  </template>
  <main v-else class="px-4 h-screen w-screen flex justify-center items-center">
    <div>
      <svg class="spinner w-32 h-32" viewBox="0 0 155 155" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle class="circleAnimation" cx="77.5" cy="77.5" r="60" stroke="currentColor" stroke-width="35"/>
        <path d="M120.329 35.48a59.998 59.998 0 0 1 6.712 75.868" stroke="currentColor" stroke-width="35"/>
      </svg>
    </div>
  </main>
</template>

<style scoped>
  .spinner {
    @apply text-amber-400;
    animation: spin 1500ms linear infinite;
  }
  .circleAnimation {
    opacity: .4;
  }
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>
