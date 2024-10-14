<script setup>
import { onMounted, ref } from 'vue';
import Button from '../components/Button.vue';
import BorderButton from '../components/BorderButton.vue';

const pricingPlans = {
  monthly: [
    {
      name: "Retail",
      price: 3000,
      strategy: "4 STRATEGY",
      capital: "CAPITAL 30,000",
      segment: "Segment NFO",
      multiplier: "2x Multiplier",
      support: "Support - Whatsapp"
    },
    {
      name: "Retail PLUS",
      price: 5000,
      strategy: "6 STRATEGY",
      capital: "CAPITAL 3,00,000",
      segment: "Segment NFO & MCX",
      multiplier: "5x Multiplier",
      support: "Support - Whatsapp & Voice Call"
    },
    {
      name: "HNI",
      price: 10000,
      strategy: "11+ STRATEGIES",
      capital: "CAPITAL 10,00,000",
      segment: "Segment NFO & MCX",
      multiplier: "20x Multiplier",
      support: "Support - Whatsapp & Voice Call"
    }
  ],
  quarterly: [
    {
      name: "Retail",
      price: 6000,
      strategy: "4 STRATEGY",
      capital: "CAPITAL 30,000",
      segment: "Segment NFO",
      multiplier: "2x Multiplier",
      support: "Support - Whatsapp"
    },
    {
      name: "Retail PLUS",
      price: 10000,
      strategy: "6 STRATEGY",
      capital: "CAPITAL 3,00,000",
      segment: "Segment NFO & MCX",
      multiplier: "5x Multiplier",
      support: "Support - Whatsapp & Voice Call"
    },
    {
      name: "HNI",
      price: 20000,
      strategy: "11+ STRATEGIES",
      capital: "CAPITAL 10,00,000",
      segment: "Segment NFO & MCX",
      multiplier: "20x multiplier",
      support: "Support - Whatsapp & Voice Call"
    }
  ]
};

const redirectToLogin = () => {
  window.location.href = "https://app.way2algo.com/";
}

const isMonthly = ref(true)
const isAnimating = ref(false)

const togglePlan = () => {
  isAnimating.value = true
  setTimeout(() => {
    isMonthly.value = !isMonthly.value
    setTimeout(() => {
      isAnimating.value = false
    }, 300)
  }, 150)
}

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
  <section class="px-4 sm:px-6 md:px-10 py-12 sm:py-20 font-Inter 3xl:max-w-[85%] mx-auto">
    <div class="text-center">
      <h1 class="text-4xl sm:text-5xl xl:text-[64px] mb-2">Our <span class="text-algo-orange">Pricing</span></h1>
      <p class="text-[#8C8C8C] mx-auto w-full sm:w-[90%] xl:w-[70%] font-light text-sm sm:text-base md:-mb-6 xl:-mb-6 lg:-mb-6 ">Our pricing plans are designed to suit
        traders of all levels, offering flexible options without hidden fees. Get access to premium features and expert
        tools that help you maximize your returns while minimizing costs.</p>
    </div>

    <!-- <div class="flex justify-center mt-4 sm:mt-10">
      <div
        class="inline-flex justify-evenly items-center border-[#8C8C8C] border-2 rounded-full p-1 text-xs sm:text-sm font-medium relative">
        <button @click="togglePlan" class="px-3 sm:px-4 py-2 rounded-full transition-colors duration-200 z-10 relative"
          :class="isMonthly ? 'text-black' : 'text-[#8C8C8C]'">
          Monthly
        </button>
        <button @click="togglePlan" class="px-3 sm:px-4 py-2 rounded-full transition-colors duration-200 z-10 relative"
          :class="!isMonthly ? 'text-black' : 'text-[#8C8C8C]'">
          Quarterly
        </button>
        <div
          class="absolute inset-[4px] w-[calc(50%-4px)] rounded-full bg-algo-orange transition-all duration-300 ease-in-out"
          :class="[
            isMonthly ? 'left-1 right-[calc(50%+0.25rem)]' : 'left-[calc(50%-0.25rem)] right-1',
            isAnimating ? 'scale-x-110' : 'scale-x-100'
          ]"></div>
      </div>
    </div> -->

    <div class="flex justify-center mt-4 sm:mt-10">
  <div
    class="inline-flex justify-evenly items-center border-[#8C8C8C] border-2 rounded-full p-0.5 text-xs sm:text-xs font-medium relative">
    <button @click="togglePlan" class="px-2 sm:px-3 py-1.5 rounded-full transition-colors duration-200 z-10 relative"
      :class="isMonthly ? 'text-black' : 'text-[#8C8C8C]'">
      Monthly
    </button>
    <button @click="togglePlan" class="px-2 sm:px-3 py-1.5 rounded-full transition-colors duration-200 z-10 relative"
      :class="!isMonthly ? 'text-black' : 'text-[#8C8C8C]'">
      Quarterly
    </button>
    <div
      class="absolute inset-[2px] w-[calc(50%-2px)] rounded-full bg-algo-orange transition-all duration-300 ease-in-out"
      :class="[isMonthly ? 'left-0.5 right-[calc(50%+0.125rem)]' : 'left-[calc(50%-0.125rem)] right-0.5', isAnimating ? 'scale-x-110' : 'scale-x-100']"></div>
  </div>
</div>



    <div class=" mt-2 sm:mt-2 overflow-x-auto md:overflow-x-auto">
      <div ref="section" class="flex overflow-y-hidden flex-col sm:flex-row gap-6 w-full sm:w-max mx-auto pt-4 sm:pb-4">
        <div :class="{'translate-y-16 lg:opacity-0 md:opacity-0' : !show , 'translate-y-0 opacity-100' : show}" v-for="(plan, index) in (isMonthly ? pricingPlans.monthly : pricingPlans.quarterly)" :key="index"
          class="flex text-center flex-col flex-shrink-0 w-full sm:mx-6 sm:w-[300px] md:w-[350px] p-6 sm:p-8 lg:hover:scale-105 md:hover:scale-105 transform transition-all hover:duration-300 duration-500 hover:shadow-lg bg-white bg-opacity-5 rounded-xl border border-white border-opacity-20">
          <div class="space-y-1 mb-4">
            <h3 class="font-Inter text-xl sm:text-2xl">{{ plan.name }}</h3>
            <p class="font-light text-sm sm:text-base">{{ plan.strategy }}</p>
          </div>
          <div class="flex-grow flex flex-col justify-between">
            <div class="space-y-2 mb-4">
              <p class="font-semibold text-3xl sm:text-4xl md:text-[56px]">₹{{ plan.price }}</p>
              <p class="font-light text-xs sm:text-sm">/ {{ isMonthly ? 'Month' : '3 Months' }}</p>
            </div>
            <div class="text-center space-y-4 mb-4">
              <li v-for="(feature, featureIndex) in [plan.capital, plan.segment, plan.multiplier, plan.support]"
                :key="featureIndex" class="flex justify-center items-center gap-2">
                <img src="/images/svg/right.svg" alt="" class="w-4 h-4">
                <p class="text-sm sm:text-base">{{ feature }}</p>
              </li>
            </div>
            <div>
              <Button v-if="plan.multiplier == '5x Multiplier'" @click="redirectToLogin" :title="'Get Started Now'"
                class="rounded-sm w-full text-sm" />
              <BorderButton v-else @click="redirectToLogin" :title="'Get Started Now'" class="rounded-sm w-full text-sm" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@media (max-width: 1023px) {
  .overflow-x-auto {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }

  .overflow-x-auto::-webkit-scrollbar {
    display: none;
  }
}

@media (min-width: 640px) and (max-width: 1023px) {
  .sm\:w-max {
    width: max-content;
  }
}

.scale-x-110 {
  transform: scaleX(1.1);
}

.scale-x-100 {
  transform: scaleX(1);
}
</style>