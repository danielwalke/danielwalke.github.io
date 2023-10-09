<template>
  <div>This will be my personal portofolio page. For now this is just some hobby to keep my vue & tailwind skills sharp. Hopefully you will see soe more beautiful stuff here soon.</div>
  <div>Current date: 08.10.23 - Project initialization</div>
  <Sidebar/>
  <VueSetup/>
</template>

<script>
import VueSetup from "./blog/howTo/VueSetup.vue";
import Sidebar from "./sidebar/Sidebar.vue";
export default {
  name: "Main",
  components: {Sidebar, VueSetup}
}
</script>

<style scoped>

</style>