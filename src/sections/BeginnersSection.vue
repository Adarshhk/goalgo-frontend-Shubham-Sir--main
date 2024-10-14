<script setup>
import { onMounted, ref } from "vue";
const beg = [
    {
        "title": "Trading Platform",
        "desc": "We offer low fees and fast execution times, so you can make the most of it.",
        "img": "/beg1.png"
    },
    {
        "title": "24/7 Support",
        "desc": "Get round-the-clock assistance from our expert team for any queries.",
        "img": "/beg2.webp"
    },
    {
        "title": "Effortless Trading, Anytime",
        "desc": "Get real-time notifications for every trade you perform.",
        "img": "/beg3.webp"
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
    <section class="px-6 md:px-10 py-10 xl:py-20 3xl:max-w-[85%] mx-auto">
        <div class="text-white text-center font-Inter space-y-5">
            <p class="text-algo-orange text-[16px]">Why way2algo?</p>
            <h1 class="mx-auto leading-[50px] md:leading-[70px] text-[40px] md:text-[58px] md:w-[90%] xl:text-[64px] xl:w-[60%]">Designed for beginners and <span class="text-algo-orange">experienced traders</span></h1>
            <p class="font-light text-[#8C8C8C]">Our platform is designed to make trading simple, accessible, and profitable for everyone.</p>
        </div>
        <div ref="section" class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-16 gap-6">
            <div  v-for="item in beg" :class="{'translate-y-16 lg:opacity-0 md:opacity-0' : !show , 'translate-y-0 opacity-100' : show}" class="shadow-md p-6 font-Inter border border-white border-opacity-25 rounded-3xl space-y-6 transition-all duration-500">
                <img :src="item.img" alt="" class="w-[90%]">
                <div class="space-y-1">
                    <p class="text-algo-orange text-[19px]">{{ item.title }}</p>
                <p class="text-[#8C8C8C] font-light text-[18px]">{{ item.desc }}</p>
                </div>
            </div>
        </div>
    </section>
</template>



