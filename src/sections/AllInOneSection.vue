<script setup>
const list = [
    {
        "title": "Automated Precision",
        "desc": "Trades with precise, adaptive algorithms."
    },
    {
        "title": "Data-Driven Insights",
        "desc": "Real-time insights for better decisions."
    },
    {
        "title": "Speed and Efficiency",
        "desc": "Lightning-fast trade execution."
    },
    {
        "title": "Customizable Strategies",
        "desc": "Flexible settings for any investment goals."
    },
    {
        "title": "Consistent Results",
        "desc": "Steady, emotion-free trading results."
    },
    
]
</script>

<template>
    <section class="p-6 md:p-10 flex flex-col xl:flex-row items-center justify-between 3xl:max-w-[85%] mx-auto">
        <div class="w-full xl:w-[50%] font-Inter space-y-14">
            <div class="space-y-6">
                <h1 class=" text-[40px] leading-[50px] md:leading-[70px] md:text-[52px] 2xl:text-[64px]">All-in-one decentralized <span class="text-algo-orange">Algo Trading Platform</span></h1>
                <p class="font-normal text-[#8C8C8C] text-[16px] md:w-[520px] w-full lg:w-[520px] ">At <span class="text-algo-orange font-normal">way2algo</span>, we offer a range of features to help you make the most of your trading experience. Here are just a few of the features we offer:</p>
            </div>
            <ul class="grid grid-cols-1 md:grid-cols-2 gap-8 2xl:gap-12">
                <li v-for="item in list" class="font-Inter flex items-start gap-2 ">
                    
                        <i class="pi pi-check-circle text-algo-orange text-[30px] pt-2"></i>
                    
                    
                    <div class="ml-4">
                        <p class="font-normal text-[19px]">{{ item.title }}</p>
                        <div class="flex flex-wrap w-[230px]">
                            <p class="text-[#8C8C8C] text-[17px] font-medium">{{ item.desc }}</p>
                        </div>
                        
                    </div>
                </li>
            </ul>
        </div>
        <div class="xl:w-[50%]">
            <img src="/images/AllInOne.png" alt="" class=" md:w-[90%] mx-auto">
        </div>
    </section>
</template>