<template>
  <div>
    <div class="flex gap-2 flex-col bg-white">
      <router-link to="/">Home</router-link>
      <router-link to="/blog">Blog</router-link>
      <router-link to="/site_notice">Site notice</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar"
}
</script>

<style scoped>

</style>