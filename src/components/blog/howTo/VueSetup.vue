<template>
  <div>
    <div>
      Here is some list of contents
      (Attention information might be really simple here)
    </div>
    <div class="p-4">
      <ol class="list-decimal">
        <li>Webdevelopment</li>
        <li>Machine learning</li>
        <li>Others</li>
      </ol>
    </div>
    <BlogComponent>
      <div>
        How to setup Vue using Vite, tailwind, and Github pages?
      </div>
      <div>
        First of all: Why Vue?
        Vue is a great and light-weight Javascript Framework. You can easily create components and thereby create your complete application modular.
        Furthermore, I am most experienced in VueJS and less experienced in ReactJS.
      </div>
      <div class="red 3-xl">
        Why TailwindCSS?
        Tailwind makes styling your components much easier, faster and more consistent.
      </div>
      <div>
        Further libraries: Vue Routing, Vue Store (Pinia)
      </div>
    </BlogComponent>

    <BlogComponent>
      How to create an SSH connection?
      <ol class="list-decimal p-4">
        <li>Open a commoand window (cmd/powershell/batch on windows, terminal on macos and Linux)</li>
        <li>Type in the command window: ````ssh remote_username@remote_ip_address```</li>
      </ol>
    </BlogComponent>
  </div>
</template>

<script>
import BlogComponent from "../BlogComponent.vue";
export default {
  name: "VueSetup",
  components: {BlogComponent}
}
</script>

<style scoped>

</style>