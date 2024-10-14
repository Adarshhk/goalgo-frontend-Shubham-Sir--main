<script setup lang="ts">
const features = [
  {
    icon: "/images/svg/why1.svg",
    title: "Unmatched Speed and Precision",
    description: "Way2Algo Automates trades with lightning speed and pinpoint accuracy, ensuring you never miss an opportunity."
  },
  {
    icon: "/images/svg/why2.svg",
    title: "Advanced Risk Management",
    description: "Our platform incorporates sophisticated risk management tools to protect your investments and optimize your trading strategies."
  },
  {
    icon: "/images/svg/why3.svg",
    title: "Customizable Strategies",
    description: "Tailor your trading approach with our flexible, customizable algorithmic strategies to suit your unique trading style and goals."
  }
]

</script>

<template>
  <div class="container mt-5 mx-auto py-5 p-8 md:py-20 w-[95%] xs:mt-10 sm:mt-10">
    <div class="flex flex-col lg:flex-row justify-between items-center">
      <div class="w-full lg:w-1/2 mb-12 lg:mb-0">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-semibold mb-4">
          Why <span class="text-algo-orange">Way2algo</span>
        </h1>
        <p class="font-light text-[#8C8C8C] text-base md:text-lg mb-6 md:mb-6 max-w-2xl">
          At Way2Algo, we provide fast, precise trading automation, helping you optimize strategies and reduce risks. Our platform ensures data-driven execution to keep you ahead in the market.
        </p>
        <ul class="space-y-8">
          <li v-for="(feature, index) in features" :key="index" class="flex items-start">
            <img :src="feature.icon" :alt="feature.title" class="w-12 h-12 flex-shrink-0">
            <div class="ml-5 xl:mr-20 lg:mr-20 md:mr-20">
              <p class="text-white font-sans text-xl mb-2">{{ feature.title }}</p>
              <p class="text-sm md:text-base font-sans text-[#8C8C8C] max-w-xl">
                {{ feature.description }}
              </p>
            </div>
          </li>
        </ul>
      </div> 
      <div class="hidden lg:block md:block w-full p-8  lg:w-1/2">
        <img src="/public/why.png" alt="Way2Algo Platform" class="max-w-full h-auto rounded-lg shadow-lg">
      </div>
    </div>
  </div>
</template>

