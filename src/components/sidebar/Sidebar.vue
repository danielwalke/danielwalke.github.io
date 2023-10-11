<template>
    <div class="flex gap-2 flex-col bg-gray-100 h-full p-2 shadow-md">
      <router-link class="router" to="/">Home</router-link>
      <router-link class="router" to="/blog">Blog</router-link>
      <router-link class="router" to="/site_notice">Site notice</router-link>
    </div>
</template>

<script>
import {useSidebarStore} from "../../main.js";
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router';

export default {
  name: "Sidebar",
  setup() {
    const store = useSidebarStore()
    const route = useRoute()
    const focus = ref(store.$state.focus)

    return{
      store
    }
  }
}
</script>

<style scoped>

.router{
  @apply font-semibold bg-gray-200 p-2 rounded-md
}

.router:not(.router-link-active){
  @apply cursor-pointer hover:bg-gray-400
}

.router-link-active{
  @apply bg-gray-700 text-white
}
</style>