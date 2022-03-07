<script setup>
  import { ref } from "vue";
  import { logout } from "../store";

  const open = ref(false);
</script>

<template>
  <nav class="w-screen">
    <div class="w-full px-4 py-2 flex justify-between items-center">
      <div>
        <h1 class="font-mono text-3xl font-semibold text-slate-700">Car<span class="text-teal-400">Pal</span></h1>
      </div>
      <div class="hidden md:block">
        <nav class="flex flex-1 flex-row gap-2">
          <router-link to="/gas" class="block py-1 px-5 hover:bg-slate-300 rounded-lg text-center">Gas</router-link>
          <router-link to="/maintenance" class="block py-1 px-5 hover:bg-slate-300 rounded-lg text-center">Maintenance</router-link>
          <button @click="logout" class="block py-1 px-5 rounded-full bg-red-700 hover:bg-red-800 text-white font-medium duration-200">Log Out</button>
        </nav>
      </div>
      <div @click="open = !open" class="select-none md:hidden cursor-pointer">
        <svg v-if="open" key="open" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        <svg v-else key="closed" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
      </div>
    </div>
    <div v-if="open" class="px-4 w-full text-center flex flex-col gap-2">
      <router-link to="/gas" class="block w-full py-1 hover:bg-slate-300 rounded-lg">Gas</router-link>
      <router-link to="/maintenance" class="block w-full py-1 hover:bg-slate-300 rounded-lg">Maintenance</router-link>
      <button @click="logout" class="block py-1 px-5 rounded-full bg-red-700 hover:bg-red-800 text-white font-medium duration-200">Log Out</button>
    </div>
  </nav>
</template>
