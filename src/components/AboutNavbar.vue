<script setup>
import { ref } from "vue";
import Sidebar from "primevue/sidebar";
import Button from "./Button.vue";


const visible = ref(false);

const redirectToLogin = () => {
  window.location.href = "https://app.way2algo.com/";
}
</script>

<template>
  <nav class="text-white px-6 md:px-10 py-4 flex items-center justify-between 3xl:max-w-[85%] mx-auto sticky top-0 z-20 bg-[#102F2A] drop-shadow-md">
   <a href="/" class="w-[45%] md:w-[25%] xl:w-[12%]">
    <img
      src="/images/Logo.png"
      alt=""
    />
    
   </a>
   
    <div
      class="font-NeueMontreal-Light hidden xl:flex items-center gap-8 text-[16px] tracking-wider"
    >
      <a href="#disclaimer" class="font-thin hover:font-semibold cursor-pointer transition-all">Disclaimer</a>
      <a href="#privacy" class="font-thin hover:font-semibold cursor-pointer transition-all">Privacy Policy</a>
      <a href="#" class="font-thin hover:font-semibold cursor-pointer transition-all">Terms and Conditions</a>
     
    </div>
     <Button  @click="redirectToLogin" class="hidden xl:block" title="Login/Signup"/>
    <button class="xl:hidden" @click="visible = true">
      <i class="pi pi-bars text-[25px]"></i>
    </button>
    <Sidebar v-model:visible="visible" position="right">
      <div class="flex flex-col space-y-4 mt-8 text-[19px]">
        <a href="#disclaimer" class="font-thin hover:font-semibold cursor-pointer transition-all">Disclaimer</a>
      <a href="#privacy" class="font-thin hover:font-semibold cursor-pointer transition-all">Privacy Policy</a>
      <a href="#" class="font-thin hover:font-semibold cursor-pointer transition-all">Terms and Conditions</a>
      </div>
      <Button class="mt-10" @click="redirectToLogin" title="Login/Signup"/>

    </Sidebar>
  </nav>
</template>

<style scoped>

</style>
