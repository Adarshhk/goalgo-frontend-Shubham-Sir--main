<script setup>
import { ref } from "vue";
import Sidebar from "primevue/sidebar";
import Button from "./Button.vue";

const visible = ref(false);

const navbarHeight = 50; // Adjust this to your navbar height

const scrollToSection = (sectionId) => {
  if (sectionId === '#who') {
    const section = document.querySelector(sectionId);
    const sectionPosition = section.offsetTop - 100;
    window.scrollTo({
      top: sectionPosition,
      behavior: "smooth",
    });
    visible.value = false;
  }
  else {
    const section = document.querySelector(sectionId);
    if (section) {
      const sectionPosition = section.offsetTop - navbarHeight;
      window.scrollTo({
        top: sectionPosition,
        behavior: "smooth",
      });
      visible.value = false; // Close the sidebar after scroll
    }
  }
};

const redirectToLogin = () => {
  window.location.href = "https://app.way2algo.com/";
};
</script>

<template>
  <nav
    class="text-white px-6 md:px-10 py-4 flex items-center justify-between mx-auto sticky top-0 z-20 bg-[#102F2A] drop-shadow-md">
    <a href="/" class="w-[45%] md:w-[25%] xl:w-[12%]">
      <img src="/images/Logo.png" alt="" />
    </a>

    <div
      class="font-NeueMontreal-Light hidden xl:flex items-center gap-8 text-[16px] tracking-wider xs:hidden sm:block ">
      <a href="#" class="font-thin hover:font-semibold cursor-pointer transition-all">Home</a>
      <a href="#beginner" class="font-thin hover:font-semibold cursor-pointer transition-all">Why Algo</a>
      <a @click="() => scrollToSection('#feature')"
        class="font-thin hover:font-semibold cursor-pointer transition-all">Features</a>
      <a href="#pricing" class="font-thin hover:font-semibold cursor-pointer transition-all">Pricing</a>
      <a href="#who" class="font-thin hover:font-semibold cursor-pointer transition-all">About Us</a>
      <a href="#why" class="font-thin hover:font-semibold cursor-pointer transition-all">Why Us</a>
    </div>

    <Button @click="redirectToLogin" class="hidden xl:block" title="Login/Signup" />
    <button class="xl:hidden" @click="visible = true">
      <i class="pi pi-bars text-[25px]"></i>
    </button>
    <Sidebar v-model:visible="visible" position="right">
      <div class="flex flex-col space-y-4 mt-8 text-[19px]">
        <a href="#" class="font-thin hover:font-semibold cursor-pointer transition-all">Home</a>
        <a @click="() => scrollToSection('#beginner')"
          class="font-thin hover:font-semibold cursor-pointer transition-all">Why Algo</a>
        <a @click="() => scrollToSection('#feature')"
          class="font-thin hover:font-semibold cursor-pointer transition-all">Features</a>
        <a @click="() => scrollToSection('#pricing')"
          class="font-thin hover:font-semibold cursor-pointer transition-all">Pricing</a>
        <a @click="() => scrollToSection('#who')"
          class="font-thin hover:font-semibold cursor-pointer transition-all">About Us</a>
        <a @click="() => scrollToSection('#why')"
          class="font-thin hover:font-semibold cursor-pointer transition-all">Why Us</a>
      </div>
      <Button class="mt-10" @click="redirectToLogin" title="Login/Signup" />
    </Sidebar>
  </nav>
</template>

<style scoped>
/* Add any styles if needed */
</style>
