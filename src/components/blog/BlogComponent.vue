<template>
  <div class="blog">
    <slot></slot>
  </div>
</template>

<script setup>
const props = defineProps(['text'])

</script>

<style scoped>
.blog{
  @apply p-4 rounded-md backdrop-blur-sm bg-gray-600 mb-4
}
</style>