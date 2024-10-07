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
  <div class="container mx-auto px-4 py-5 md:py-24 w-[90%]">
    <div class="flex flex-col lg:flex-row justify-between items-center">
      <div class="w-full lg:w-1/2 mb-12 lg:mb-0">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-semibold mb-4">
          Why <span class="text-algo-orange">Way2algo</span>
        </h1>
        <p class="font-light text-[#8C8C8C] text-base md:text-lg mb-12 md:mb-20 max-w-2xl">
          At Way2Algo, we provide fast, precise trading automation, helping you optimize strategies and reduce risks. Our platform ensures data-driven execution to keep you ahead in the market.
        </p>
        <ul class="space-y-12">
          <li v-for="(feature, index) in features" :key="index" class="flex items-start">
            <img :src="feature.icon" :alt="feature.title" class="w-12 h-12 flex-shrink-0">
            <div class="ml-5">
              <p class="text-white font-sans text-xl mb-2">{{ feature.title }}</p>
              <p class="text-sm md:text-base font-sans text-[#8C8C8C] max-w-xl">
                {{ feature.description }}
              </p>
            </div>
          </li>
        </ul>
      </div> 
      <div class="hidden lg:block md:block w-full lg:w-1/2">
        <img src="/public/why.png" alt="Way2Algo Platform" class="max-w-full h-auto rounded-lg shadow-lg">
      </div>
    </div>
  </div>
</template>

<template>
    <div class="inline-flex items-center bg-white rounded-full p-1 text-sm font-medium relative">
      <button
        @click="togglePlan"
        class="px-4 py-2 rounded-full transition-colors duration-200 z-10 relative"
        :class="isYearly ? 'text-white' : 'text-gray-900'"
      >
        Yearly
        <span class="ml-1 text-green-500 text-xs font-normal" :class="{ 'opacity-0': !isYearly }">Save 25%</span>
      </button>
      <button
        @click="togglePlan"
        class="px-4 py-2 rounded-full transition-colors duration-200 z-10 relative"
        :class="!isYearly ? 'text-white' : 'text-gray-900'"
      >
        Monthly
      </button>
      <div
        class="absolute top-1 bottom-1 rounded-full bg-gray-900 transition-all duration-300 ease-in-out"
        :class="[
          isYearly ? 'left-1 right-[calc(50%+0.25rem)]' : 'left-[calc(50%-0.25rem)] right-1',
          isAnimating ? 'scale-x-110' : 'scale-x-100'
        ]"
      ></div>
    </div>
  </template>
  

  
 
  
