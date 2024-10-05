<script setup>
import Button from '../components/Button.vue';
import BorderButton from '../components/BorderButton.vue';
import { onMounted, ref } from "vue";

const redirectToLogin = () => {
  window.location.href = "https://app.way2algo.com/";
}

  
const section = ref(null);
const show = ref(false);
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting && !show.value) show.value = entry.isIntersecting;
    
  });
});

onMounted(() => observer.observe(section.value));

</script>

<template>
    <section class="px-6 md:px-10 py-20 font-Inter 3xl:max-w-[85%] mx-auto">
        <div class="text-center">
            <h1 class="text-[58px] xl:text-[64px]">Our <span class="text-algo-orange">Pricing</span></h1>
            <p class="text-[#8C8C8C] mx-auto w-[90%] xl:w-[70%]  font-light text-[16px]">Our pricing plans are designed to suit traders of all levels, offering flexible options without hidden fees. Get access to premium features and expert tools that help you maximize your returns while minimizing costs.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 lg:overflow-y-hidden md:overflow-y-hidden 2xl:px-20 md:gap-[425px] lg:gap-[300px] xl:gap-6 sm:overflow-x-auto space-y-8 md:space-y-0 py-10">
            <div :class="{'translate-y-16 lg:opacity-0 md:opacity-0' : !show , 'translate-y-0 opacity-100' : show}" class="lg:hover:scale-105 md:hover:scale-105 transform transition-all hover:duration-300 duration-200 hover:shadow-lg p-6 space-y-4 bg-white bg-opacity-5 rounded-xl border border-white border-opacity-20 md:min-w-[400px] xl:min-w-0"> 
                <div class="space-y-1" ref="section">
                    <h3 class="font-bold text-[22px]">Freebie</h3>
                    <p class="font-light text-[16px]">Ideal for individuals who need quick access to basic features.</p>
                </div>
                <div class="space-y-2" >
                   <p class="font-semibold text-[56px]">$0 <span class="font-light text-[16px]">/ Month</span></p>
                   <BorderButton @click="redirectToLogin" title="Get Started Now" class="rounded-sm"/>
                </div>
                <div class="space-y-4 " >
                    <li class="flex items-center gap-2">
                        <img src="/images/svg/right.svg" alt="">
                        <p class="text-[16px]">20,000+ of PNG & SVG graphics</p>
                    </li>
                    <li class="flex items-center gap-2">
                        <img src="/images/svg/right.svg" alt="">
                        <p class="text-[16px]">Access to 100 million stock images</p>
                    </li>
                    <li class="flex items-center gap-2">
                        <img src="/images/svg/right.svg" alt="">
                        <p class="text-[16px]">Upload custom icons and fonts</p>
                    </li>
                    <li class="flex items-center gap-2">
                        <img src="/images/svg/right.svg" alt="">
                        <p class="text-[16px]">Unlimited Sharing</p>
                    </li>
                    <li class="flex items-center gap-2">
                        <img src="/images/svg/right.svg" alt="">
                        <p class="text-[16px]">Upload graphics & video in up to 4k</p>
                    </li>
                    <li class="flex items-center gap-2">
                        <img src="/images/svg/right.svg" alt="">
                        <p class="text-[16px]">Unlimited Projects</p>
                    </li>
                    <li class="flex items-center gap-2 " >
                        <img src="/images/svg/right.svg" alt="">
                        <p class="text-[16px]">Instant Access to our design system</p>
                    </li>
                    <li class="flex items-center gap-2 ">
                        <img src="/images/svg/right.svg" alt="">
                        <p class="text-[16px]">Create teams to collaborate on designs</p>
                    </li>
               
                </div>
            </div>

 <!-- second card  -->
            <div :class="{'translate-y-16 lg:opacity-0 md:opacity-0' : !show , 'translate-y-0 opacity-100' : show}" class="lg:hover:scale-105 md:hover:scale-105 transform transition-all hover:duration-300 duration-500 hover:shadow-lg p-6 space-y-4 bg-white bg-opacity-10 rounded-xl md:min-w-[400px] xl:min-w-0">
                <div class="space-y-1">
                    <h3 class="font-bold text-[22px]">Professional</h3>
                    <p class="font-light text-[16px]">Ideal for individuals who who need advanced features and tools for client work.</p>
                </div>
                <div class="space-y-2">
                   <p class="font-semibold text-[56px]">$25 <span class="font-light text-[16px]">/ Month</span></p>
                   <Button @click="redirectToLogin" title="Get Started Now" class="w-full py-3 rounded-sm"/>
                </div>
                <div class="space-y-4">
                    <li class="flex items-center gap-2">
                        <img src="/images/svg/right.svg" alt="">
                        <p class="text-[16px]">20,000+ of PNG & SVG graphics</p>
                    </li>
                    <li class="flex items-center gap-2">
                        <img src="/images/svg/right.svg" alt="">
                        <p class="text-[16px]">Access to 100 million stock images</p>
                    </li>
                    <li class="flex items-center gap-2">
                        <img src="/images/svg/right.svg" alt="">
                        <p class="text-[16px]">Upload custom icons and fonts</p>
                    </li>
                    <li class="flex items-center gap-2">
                        <img src="/images/svg/right.svg" alt="">
                        <p class="text-[16px]">Unlimited Sharing</p>
                    </li>
                    <li class="flex items-center gap-2">
                        <img src="/images/svg/right.svg" alt="">
                        <p class="text-[16px]">Upload graphics & video in up to 4k</p>
                    </li>
                    <li class="flex items-center gap-2">
                        <img src="/images/svg/right.svg" alt="">
                        <p class="text-[16px]">Unlimited Projects</p>
                    </li>
                    <li class="flex items-center gap-2">
                        <img src="/images/svg/right.svg" alt="">
                        <p class="text-[16px]">Instant Access to our design system</p>
                    </li>
                    <li class="flex items-center gap-2">
                        <img src="/images/svg/right.svg" alt="">
                        <p class="text-[16px]">Create teams to collaborate on designs</p>
                    </li>
               
                </div>
            </div>


 <!-- third card  -->
            <div :class="{'translate-y-16 lg:opacity-0 md:opacity-0' : !show , 'translate-y-0 opacity-100' : show}" class="lg:hover:scale-105 md:hover:scale-105 transform transition-all hover:duration-300 duration-1000 hover:shadow-lg p-6 space-y-4 bg-white bg-opacity-5 rounded-xl border border-white border-opacity-20 md:min-w-[400px] xl:min-w-0">
                <div class="space-y-1">
                    <h3 class="font-bold text-[22px]">Enterprise</h3>
                    <p class="font-light text-[16px]">Ideal for businesses who need personalized services and security for large teams. </p>
                </div>
                <div class="space-y-2">
                   <p class="font-semibold text-[56px]">$100 <span class="font-light text-[16px]">/ Month</span></p>
                   <BorderButton @click="redirectToLogin" title="Get Started Now" class="rounded-sm"/>
                </div>
                <div class="space-y-4">
                    <li class="flex items-center gap-2">
                        <img src="/images/svg/right.svg" alt="">
                        <p class="text-[16px]">20,000+ of PNG & SVG graphics</p>
                    </li>
                    <li class="flex items-center gap-2">
                        <img src="/images/svg/right.svg" alt="">
                        <p class="text-[16px]">Access to 100 million stock images</p>
                    </li>
                    <li class="flex items-center gap-2">
                        <img src="/images/svg/right.svg" alt="">
                        <p class="text-[16px]">Upload custom icons and fonts</p>
                    </li>
                    <li class="flex items-center gap-2">
                        <img src="/images/svg/right.svg" alt="">
                        <p class="text-[16px]">Unlimited Sharing</p>
                    </li>
                    <li class="flex items-center gap-2">
                        <img src="/images/svg/right.svg" alt="">
                        <p class="text-[16px]">Upload graphics & video in up to 4k</p>
                    </li>
                    <li class="flex items-center gap-2">
                        <img src="/images/svg/right.svg" alt="">
                        <p class="text-[16px]">Unlimited Projects</p>
                    </li>
                    <li class="flex items-center gap-2">
                        <img src="/images/svg/right.svg" alt="">
                        <p class="text-[16px]">Instant Access to our design system</p>
                    </li>
                    <li class="flex items-center gap-2">
                        <img src="/images/svg/right.svg" alt="">
                        <p class="text-[16px]">Create teams to collaborate on designs</p>
                    </li>
               
                </div>
            </div>
        </div>
    </section>
</template>



