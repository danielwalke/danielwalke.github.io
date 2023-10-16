<template>
<div>
  Let's switch to german for this component, since this component is mainly for private reason. However, provided information are not sensitive and its really convenient to include those inforation public.
  Furthermore, this component might include some basic sqlite refreshments.
  <h2 class="bold text-lg p-2">Wunschliste Lilli</h2>
  <ul class="p-2">
    <li class="flex items-center">
      <input checked id="checked-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
      <label for="checked-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Narnia Bücher</label>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  name: "LilliList"
}
</script>

<style scoped>

</style>