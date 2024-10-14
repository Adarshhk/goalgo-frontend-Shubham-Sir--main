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
    {
        "title" : "Dashboard",
        "desc" : "You will have complete control over your trading account and will be able to modify it"
    }
    
]

function handleClick() {
    window.open("https://app.aliceblueonline.com/OpenAccount.aspx?C=SCHE804", "_blank");
}

</script>

<template>
    <section class="p-6 -pt-6 md:p-20 flex flex-col xl:flex-row items-center justify-between 3xl:max-w-[85%]  mx-auto">
        <div class="w-full xl:w-[50%] font-Inter space-y-10">
            <div class="space-y-6 -mb-6">
                <h1 class=" text-[40px] leading-[50px] md:leading-[70px] md:text-[52px] 2xl:text-[64px]">All-in-one decentralized <span class="text-algo-orange">Algo Trading Platform</span></h1>
                <p class="font-normal text-[#8C8C8C] text-[16px] md:w-[520px] w-full lg:w-[520px] ">At <span class="text-algo-orange font-normal">way2algo</span>, we offer a range of features to help you make the most of your trading experience. Here are just a few of the features we offer:</p>
            </div>
            <ul class="grid grid-cols-1 md:grid-cols-2 gap-8 2xl:gap-8">
                <li v-for="item in list" class="font-Inter flex items-start gap-2 ">
                    
                        <i class="pi pi-check-circle text-algo-orange text-[30px] pt-2"></i>
                    
                    
                    <div class="ml-4">
                        <p class="font-normal text-[19px]">{{ item.title }}</p>
                        <div class="flex flex-wrap w-[280px]">
                            <p class="text-[#8C8C8C] text-[17px] font-medium">{{ item.desc }}</p>
                        </div>
                        
                    </div>
                </li>
            </ul>
        </div>
        
        <div class="xl:w-[50%] relative">
            <div class="cursor-pointer absolute 2xl:top-[170px] 2xl:left-[160px] 3xl:top-[200px] 3xl:left-[200px] xl:top-[160px] xl:left-[140px] lg:top-[140px] lg:left-[140px] md:left-[200px] md:top-[200px] sm:left-[120px] sm:top-[160px] xs:top-[90px] xs:left-[70px] sm:size-24 md:size-24 lg:size-28 xl:size-28 2xl:size-28 3xl:size-30 xs:size-20 lm:top-[250px] lm:left-[250px] lm:size-28">
            <img @click="handleClick" src="/images/alice.png" class="" alt="">
        </div>
            <img src="/images/platform.png" alt="" class="mx-auto">
        </div>
    </section>
</template>


