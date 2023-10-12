<script setup>
import Sidebar from "./components/sidebar/Sidebar.vue";
</script>

<template>
  <div class="w-screen h-screen">
    <div class="flex h-full">
      <div class="lg:w-1/6 h-full w-1/3">
        <Sidebar/>
      </div>
      <div class="lg:w-5/6 text-white p-2 w-2/3">
        <router-view></router-view>
      </div>
    </div>

  </div>

</template>

<style scoped>
</style>
