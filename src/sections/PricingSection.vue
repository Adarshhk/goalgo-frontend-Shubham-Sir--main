<script setup>
import { ref } from 'vue';
import Button from '../components/Button.vue';
import BorderButton from '../components/BorderButton.vue';

const isMonthly = ref(true);
const show = ref(false);

const pricingPlans = {
  monthly: [
    {
      name: "RETAIL",
      price: 3000,
      strategy: "3 STRATEGY",
      capital: "CAPITAL 30,000",
      segment: "Segment NFO",
      multiplier: "2x Multiplier",
      support: "Support - Whatsapp"
    },
    {
      name: "RETAIL plus",
      price: 5000,
      strategy: "6 STRATEGY",
      capital: "CAPITAL 1,00,000",
      segment: "Segment NFO",
      multiplier: "5x Multiplier",
      support: "Support - Whatsapp & Voice Call"
    },
    {
      name: "HNI",
      price: 10000,
      strategy: "11+ STRATEGIES",
      capital: "CAPITAL 3,50,000",
      segment: "Segment NFO & MCX",
      multiplier: "20x Multiplier",
      support: "Support - Whatsapp & Voice Call"
    }
  ],
  quarterly: [
    {
      name: "RETAIL",
      price: 6000,
      strategy: "3 STRATEGY",
      capital: "CAPITAL 30,000",
      segment: "Segment NFO",
      multiplier: "2x Multiplier",
      support: "Support - Whatsapp"
    },
    {
      name: "RETAIL plus",
      price: 10000,
      strategy: "6 STRATEGY",
      capital: "CAPITAL 1,00,000",
      segment: "Segment NFO",
      multiplier: "5x Multiplier",
      support: "Support - Whatsapp & Voice Call"
    },
    {
      name: "HNI",
      price: 20000,
      strategy: "11+ STRATEGIES",
      capital: "CAPITAL 3,50,000",
      segment: "Segment NFO & MCX",
      multiplier: "20x multiplier",
      support: "Support - Whatsapp & Voice Call"
    }
  ]
};

const redirectToLogin = () => {
  window.location.href = "https://app.way2algo.com/";
}

const toggleMonthly = () => {
  isMonthly.value = true
}
const toggleQuaterly = () => {
  isMonthly.value = false
}

  
  const isYearly = ref(true)
  const isAnimating = ref(false)
  
  const togglePlan = () => {
    isAnimating.value = true
    setTimeout(() => {
      isYearly.value = !isYearly.value
      setTimeout(() => {
        isAnimating.value = false
      }, 300)
    }, 150)
  }
  
  defineExpose({ isYearly })
</script>

<template>
    
  <section class="px-6 md:px-10 py-20 font-Inter 3xl:max-w-[85%] mx-auto">
           
    <div class="text-center">
      <h1 class="text-[58px] xl:text-[64px]">Our <span class="text-algo-orange">Pricing</span></h1>
      <p class="text-[#8C8C8C] mx-auto w-[90%] xl:w-[70%] font-light text-[16px]">Our pricing plans are designed to suit traders of all levels, offering flexible options without hidden fees. Get access to premium features and expert tools that help you maximize your returns while minimizing costs.</p>
    </div>

    <div class="mx-auto inline-flex items-center border-[#8C8C8C] border-2 rounded-full p-1 text-sm font-medium relative">
      <button
        @click="togglePlan"
        class="px-4 py-2 rounded-full transition-colors duration-200 z-10 relative"
        :class="isYearly ? 'text-white' : 'text-gray-900'"
      >
        Yearly
    
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

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 py-10">
      <div v-for="(plan, index) in (isMonthly ? pricingPlans.monthly : pricingPlans.quarterly)" :key="index"
        class="lg:hover:scale-105 md:hover:scale-105 transform transition-all hover:duration-300 duration-500 hover:shadow-lg p-6 space-y-4 bg-white bg-opacity-5 rounded-xl border border-white border-opacity-20">
        <div class="space-y-1">
          <h3 class="font-bold text-[22px]">{{ plan.name }}</h3>
          <p class="font-light text-[16px]">{{ plan.strategy }}</p>
        </div>
        <div class="space-y-2">
          <p class="font-semibold text-[56px]">₹{{ plan.price }} <span class="font-light text-[16px]">/ {{ isMonthly ? 'Month' : '3 Months' }}</span></p>
          <Button v-if="plan.multiplier == '5x Multiplier'" @click="redirectToLogin" :title="'Get Started Now'" class="rounded-sm w-full" />
          <BorderButton v-else @click="redirectToLogin" :title="'Get Started Now'" class="rounded-sm w-full" />
        </div>
        <div class="space-y-4">
          <li v-for="(feature, featureIndex) in [plan.capital, plan.segment, plan.multiplier, plan.support]" :key="featureIndex" class="flex items-center gap-2">
            <img src="/images/svg/right.svg" alt="">
            <p class="my-2 text-[16px]">{{ feature }}</p>
          </li>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Add any additional component-specific styles here */
.scale-x-110 {
    transform: scaleX(1.1);
  }
  .scale-x-100 {
    transform: scaleX(1);
  }
</style>