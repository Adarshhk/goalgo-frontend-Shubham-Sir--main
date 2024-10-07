<script setup>
import HeroSection from "../sections/HeroSection.vue"
import FeaturesSection1 from "../sections/FeaturesSection1.vue"
import BeginnersSection from "../sections/BeginnersSection.vue"
import AllInOneSection from "../sections/AllInOneSection.vue"
import TestimonialSection from "../sections/TestimonialSection.vue"
import PricingSection from "../sections/PricingSection.vue"
import ConnectSection from "../sections/ConnectSection.vue" 
import Navbar from "../components/Navbar.vue"

</script>

<template>

    <main>
        <Navbar/>
        <HeroSection id="home" />
        <FeaturesSection1 id="feature" />
        <BeginnersSection id="beginner" />
        <AllInOneSection id="aio" />
        <TestimonialSection id="testimonal" />
        <PricingSection id="pricing" />
        <ConnectSection id="contact" />

    </main>
</template>
