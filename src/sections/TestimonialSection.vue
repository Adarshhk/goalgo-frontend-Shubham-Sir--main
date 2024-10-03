<script setup>

import { ref } from 'vue';

const currentIndex = ref(0);

setInterval(() => {
    currentIndex.value++;
    if (currentIndex.value == 3) currentIndex.value = 0;
  }, 2000);
const testimonals = [
  {
    user: "Amit Yadav",
    message: "This platform's precision and speed have transformed my trading. I never miss an opportunity!"
  },
  {
    user: "Yuvraj Sinha",
    message: "Real-time insights and customizable strategies have helped me optimize my trades like never before."
  },
  {
    user: "Snehil Das",
    message: "Consistent results, free of emotional bias-this automation has taken my trading to the next level."
  },

]
</script>

<template>
  <section class="w-full p-6 md:p-10 font-Inter relative 3xl:max-w-[85%] mx-auto">
    <div class="glow-effect hidden xl:block">
    </div>
    <div class="z-10 flex flex-col xl:flex-row items-center justify-between space-y-14 xl:space-y-0  xl:py-20">
      <div class="space-y-6 w-full xl:w-[50%]">
        <p class="text-algo-orange">Testimonials</p>
        <h1 class="text-[54px] md:text-[64px] leading-[55px] md:leading-[65px]">
          Don't take <br />
          <span class="text-algo-orange">our word for it</span>
        </h1>
        <p class="text-[#8C8C8C] text-[16px] md:w-[80%] xl:w-full font-light">
          Our support team is available around the clock to help you with any
          questions or issues you may have.
        </p>
      </div>
      <div class="xl:w-[45%] flex flex-row justify-evenly overflow-hidden relative" >
        <div :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
          class="transition-transform duration-500 min-w-full font-Inter" v-for='(testimonial, index) in testimonals'
          :key='index'>
          <div class='p-8 rounded-2xl bg-white bg-opacity-10 border border-white border-opacity-25 space-y-5'>
            <div class="flex items-start gap-4">
              <img src="../assets/images/svg/dummy.svg" alt="" />

              <div class="">
                <p class="font-[19px]">{{ testimonial.user }}</p>
                <p class="font-light text-[#8C8C8C] text-[16px]">Invester</p>
              </div>
            </div>

            <p class="font-normal text-[22px] pt-4">
              {{ testimonial.message }}
            </p>
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
