<template>
  <div class="inner-box">
    <div class="w-[75vw] lg:w-full">
      <h4 class="card-header">{{header}}</h4>
      <ul class="list-none">
        <slot></slot>
      </ul>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  header: String,

})
</script>

<style scoped>
.card-header{
  @apply text-2xl text-center font-bold p-4 mb-2
}

.inner-box{
  @apply bg-gray-100 rounded-lg p-4 lg:p-6 font-bold mb-4 shadow-lg whitespace-pre-wrap basis-1/2
}


</style>