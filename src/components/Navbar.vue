<script setup>
import { ref } from "vue";
import Sidebar from "primevue/sidebar";
import Button from "./Button.vue";

const visible = ref(false);

const props = defineProps({
  handleScroll : Function,
})

</script>

<template>
  <nav class="text-white px-6 md:px-10 py-4 flex items-center justify-between 3xl:max-w-[85%] mx-auto sticky top-0 z-20 bg-[#102F2A] drop-shadow-md">
   <a href="/" class="w-[45%] md:w-[25%] xl:w-[12%]">
    <img
      src="../assets/images/Logo.png"
      alt=""
      
    />
    
   </a>
   
    <div
      class="font-NeueMontreal-Light hidden xl:flex items-center gap-8 text-[16px] tracking-wider"
    >
      <a href="#hero" class="font-thin hover:font-semibold cursor-pointer transition-all">Home</a>
      <a href="#beginner" class="font-thin hover:font-semibold cursor-pointer transition-all">Why Algo</a>
      <a href="#feature1" class="font-thin hover:font-semibold cursor-pointer transition-all">Features</a>
      <a href="#pricing" class="font-thin hover:font-semibold cursor-pointer transition-all">Pricing</a>
      <a href="#testimonal" class="font-thin hover:font-semibold cursor-pointer transition-all">Testimonials</a>
     
    </div>
     <Button class="hidden xl:block" title="Login/Signup"/>
    <button class="xl:hidden" @click="visible = true">
      <i class="pi pi-bars text-[25px]"></i>
    </button>
    <Sidebar v-model:visible="visible" position="right">
      <div class="flex flex-col space-y-4 mt-8 text-[19px]">
        <p>Home</p>
        <p>Services</p>
        <p>Strategy</p>
        <p>About Us</p>
        <p>Blog</p>
        <p>Contact</p>
      </div>
      <Button class="mt-10" title="Login/Signup"/>
    </Sidebar>
  </nav>
</template>

<style scoped>

</style>
