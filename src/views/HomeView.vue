<script setup>
import HeroSection from "../sections/HeroSection.vue"
import FeaturesSection1 from "../sections/FeaturesSection1.vue"
import BeginnersSection from "../sections/BeginnersSection.vue"
import AllInOneSection from "../sections/AllInOneSection.vue"

import PricingSection from "../sections/PricingSection.vue"
import ConnectSection from "../sections/ConnectSection.vue" 
import Navbar from "../components/Navbar.vue"
import WhyAlgo from "../sections/WhyAlgo.vue"
import Who from "../sections/Who.vue"
import How from "../sections/How.vue"

</script>

<template>

    <main>
        <Navbar/>
        <HeroSection id="home" />
        <FeaturesSection1 id="feature" />
        <BeginnersSection id="beginner" />
        <AllInOneSection id="aio" />
        <Who id="who"/>
        <WhyAlgo id="why"/>
        <How id="how" />
        <PricingSection id="pricing" />
        <ConnectSection id="contact" />

    </main>
</template>
