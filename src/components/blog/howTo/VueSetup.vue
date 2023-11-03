<template>
  <div>
    <div class="flex justify-between p-4">
      <h1 class="text-3xl font-bold">Short-Blogs (at least in the future)</h1>
      <input placeholder="Search..." type="text" v-model="search" class="h-12 w-60 rounded-md p-2"/>
    </div>

    <div v-for="blogItem in filteredBlogItems" :key="uuid" class="p-4">
      <h3 class="text-2xl font-semibold">
        {{blogItem.question}}
      </h3>
      <p>
        {{blogItem.answer}}
      </p>
    </div>
  </div>
  <!--
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
-->
  <!--    <BlogComponent>
        How to connect to a remote server/computer (create an SSH connection)?
        <ol class="list-decimal p-4">
          <li>Make sure you are in the same network (e.g., by using a VPN)</li>
          <li>Open a commoand window (cmd/powershell/batch on windows, terminal on macos and Linux)</li>
          <li>Type in the command window: ````ssh remote_username@remote_ip_address```</li>
        </ol>
      </BlogComponent>
      <blog-component>
        <CreateWebapplication/>
      </blog-component>-->
</template>

<script setup>
//import BlogComponent from "../BlogComponent.vue";
//import CreateWebapplication from "./webdev/CreateWebapplication.vue";
import {computed, ref} from "vue";
import { v4 as uuid } from 'uuid';


const search = ref("")

const blogItems = [
  {
    "id": uuid(),
    "question": "How to build an interactive web application?",
    "answer": "One of the best approaches in my experience is using a so-called web framework..."
  },
  {
    "id": uuid(),
    "question": "When is this blog complete?",
    "answer": "Potentially never because I will hopefully learn new things every day and try to update this page as good as I can"
  }
]

const filteredBlogItems = computed(()=>{
  return blogItems.filter(blogItem => blogItem.question.includes(search.value))
})
</script>

<style scoped>

</style>