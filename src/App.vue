<script setup>
import Bottombar from "./components/sidebar/Bottombar.vue";
</script>

<template>
  <div class="w-screen h-screen overflow-hidden select-none">
    <div class="flex flex-col h-full">
      <div class="w-full overflow-y-auto main-container h-full">
        <router-view></router-view>
      </div>
      <div class="h-[50px] w-full">
        <Bottombar/>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main-container{
  height: calc(100% - 50px)
}
</style>
