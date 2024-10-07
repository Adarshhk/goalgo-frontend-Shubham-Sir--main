<script setup lang="ts">
const images = [
  {
    title: "Get started",
    desc: "Initiate by signing up or logging in your account",
    img: "/images/svg/how1.svg"
  },
  {
    title: "Select a plan",
    desc: "Pick the right subscription plan for yourself",
    img: "/images/svg/how2.svg"
  },
  {
    title: "Add a broker",
    desc: "Add a suitable broker to your account or open a demat account",
    img: "/images/svg/how3.svg"
  },
  {
    title: "Select strategy",
    desc: "Choose a strategy that fits your investment size and risk tolerance",
    img: "/images/svg/how4.svg"
  },
  {
    title: "Start trading",
    desc: "Ready set start trading with a click of a button",
    img: "/images/svg/how5.svg"
  },
]
</script>

<template>
  <section class="w-full p-6 md:p-10 font-sans relative 3xl:max-w-[85%] mx-auto">
    <div class="glow-effect hidden xl:block"></div>
    <div class="mt-16 text-center">
      <h1 class="text-4xl md:text-5xl lg:text-[64px] leading-tight md:leading-[65px]">
        How to
        <span class="text-algo-orange">start way2Algo</span>
      </h1>
      <div class="px-4 md:px-24">
        <p class="text-[#8C8C8C] text-base md:text-lg mt-5 mx-auto font-normal max-w-4xl">
          Our pricing plans are designed to suit traders of all levels, offering flexible options without hidden fees. Get access to premium features and expert tools that help you maximize your returns while minimizing costs.
        </p>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mt-10 w-full ">
        <div v-for="(img, index) in images" :key="index" class="flex flex-col items-center  ">
          <img :src="img.img" :alt="img.title" class=" w-18 h-18 mt-10 ">
          <p class="text-white font-sans text-lg mt-4 font-medium">{{ img.title }}</p>
          <div class="px-2 sm:px-4">
            <p class="text-base sm:text-lg font-medium mt-2 text-[#8C8C8C]">{{ img.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.glow-effect {
  background: radial-gradient(circle at top,
      rgba(39, 254, 165, 0.65),
      transparent 40%);
  width: 80%;
  right: 150px;
  overflow: hidden;
  position: absolute;
  height: 400px;
  opacity: 50%;
}
</style>