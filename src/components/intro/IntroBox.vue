<template>
  <div class="inner-box">
    <div class="inner-box-container card-header" @click="() => isHidden = !isHidden" :class="isHidden ? 'hidden-container' : 'visible-container'">
      {{header}}
      <ul class="list-disc text-left" :class="isHidden ? 'hidden' : ''">
        <slot></slot>
      </ul>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";

const props = defineProps({
  header: String,

})

const isHidden = ref(true)
</script>

<style scoped>
.card-header{
  @apply text-2xl transition ease-in-out duration-300 lg:text-3xl text-center font-bold p-4 mb-2 hover:bg-gray-900 hover:text-white bg-gray-100
}



.inner-box{
  @apply whitespace-pre-wrap basis-1/2 mb-4 p-2 lg:p-4
}

.inner-box-container{
  @apply w-[75vw] lg:w-full bg-gray-100 rounded-lg p-4 lg:p-6 font-bold shadow-lg min-h-full align-middle hover:cursor-pointer

}

.hidden-container{
  @apply flex justify-center align-middle border-2 border-gray-900 border-double hover:bg-gray-900 hover:text-white transition ease-in-out duration-300 hover:scale-105
}

.visible-container{
  @apply border-2 border-gray-900
}

</style>
