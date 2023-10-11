<script setup>
import Sidebar from "./components/sidebar/Sidebar.vue";
</script>

<template>
  <div class="w-screen h-screen">
    <div class="flex h-full">
      <div class="w-1/6 h-full">
        <Sidebar/>
      </div>
      <div class="w-5/6 text-white p-2">
        <router-view></router-view>
      </div>
    </div>

  </div>

</template>

<style scoped>
</style>
