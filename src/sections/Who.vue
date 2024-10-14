<script setup>
import { onMounted, ref } from 'vue';



const cards = [
  {
    title: 'About us',
    img : "/images/svg/who1.svg",
    description: 'Way2Algo develops advanced algorithmic trading software that automates complex strategies with speed and accuracy, helping traders achieve optimal results effortlessly.',
  },
  {
    title: 'Our mission',
    img : "/images/svg/who2.svg",
    description: 'We aim to provide innovative trading solutions that maximize profitability, minimize risks, and give traders an edge in todays fast-paced financial markets.',
  },
  {
    title: 'Our vision',
    img : "/images/svg/who3.svg",
    description: 'To be a global leader in algorithmic trading technology, driving innovation and delivering exceptional trading performance for traders at all levels.',
  },
]

const section = ref(null);
const show = ref(false);
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    show.value = entry.isIntersecting;
    
  });
});

onMounted(() => observer.observe(section.value));
</script>

<template>
  <div class="text-white">
    <div class="w-[80%] mx-auto text-center ">
      <h1 class="mt-10 text-6xl font-Inter mb-4">Who <span class="text-algo-orange">we are</span></h1>
     
      <div ref="section" class="mt-14 lg:flex-nowrap md:flex-nowrap xl:flex-nowrap flex justify-evenly gap-16 sm:gap-6 flex-wrap overflow-auto overflow-y-hidden">
        <div 
        :class="{'translate-y-16 lg:opacity-0 md:opacity-0' : !show , 'translate-y-0 opacity-100' : show}" 
          v-for="(card, index) in cards"
          :key="index"
          class="border w-full min-w-72 border-[#8C8C8C] rounded-3xl p-4 py-10 flex flex-col items-center text-center transition-all duration-300 "
        >
          <img :src="card.img" alt="" class="mt-6"/>
          <h2 class="mt-10 text-xl font-Inter mb-2 text-algo-orange">{{ card.title }}</h2>
          <div class="px-1">

              <p class="text-[#8C8C8C] text-normal">{{ card.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>