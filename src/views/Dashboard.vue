<script setup>
  import { state } from "../store";
  import PageLoader from "../components/PageLoader.vue";
</script>

<template>
  <page-loader>
    <main class="px-4 mt-6 w-screen flex justify-center items-center">
      <section class="bg-white rounded-lg shadow-md p-4 text-center max-w-sm">
        <h1 class="text-4xl font-semibold font-mono tracking-wide text-slate-700">Welcome, {{ state.user.name }}</h1>
      </section>
    </main>
  </page-loader>
</template>
