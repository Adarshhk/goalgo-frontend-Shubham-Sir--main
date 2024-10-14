<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'

const countRefs = ref([])

const boxes = [
  { startValue: 0, endValue: 850, suffix: '+', description: 'Active Users', decimals: 0 },
  { startValue: 0, endValue: 99.9, suffix: '%', description: 'Trade Execution Accuracy', decimals: 1 },
  { startValue: 0, endValue: 12, suffix: '+', description: 'Customizable Strategies', decimals: 0 },
  { startValue: 24, endValue: 20, suffix: '+', description: 'Leading Broker Connected', decimals: 0 },
]

onMounted(() => {
  countRefs.value.forEach((el, index) => {
    const box = boxes[index]
    gsap.to(el, {
      innerHTML: box.endValue,
      duration: 3,
      ease: 'power1.out',
      onUpdate: function() {
        el.innerHTML = parseFloat(this.targets()[0].innerHTML).toFixed(box.decimals)
      },
    })
  })
})
</script>

<template>
  <section class="p-6 md:p-10 text-white grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 3xl:max-w-[85%] mx-auto">
    <div
      v-for="(box, index) in boxes"
      :key="index"
      class="flex flex-col items-center py-10 border border-white border-opacity-20 rounded-3xl"
    >
      <h3 class="font-Inter font-bold text-[35px]">
        <span :ref="el => { if (el) countRefs[index] = el }">{{ box.startValue.toFixed(box.decimals) }}</span>{{ box.suffix }}
      </h3>
      <p class="font-Inter font-light text-[16px] tracking-wider">
        {{ box.description }}
      </p>
    </div>
  </section>
</template>

<style scoped>
/* Add any additional styles here if needed */
</style>