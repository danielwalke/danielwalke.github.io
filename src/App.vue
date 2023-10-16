<script setup>
import Bottombar from "./components/sidebar/Bottombar.vue";
</script>

<template>
  <div class="w-screen h-screen">
    <div class="flex h-full flex-col">
      <div class="text-white p-2 w-full h-full overflow-y-auto">
        <router-view></router-view>
      </div>
      <div class="h-1/12 w-full">
        <Bottombar/>
      </div>
    </div>

  </div>

</template>

<style scoped>
</style>
