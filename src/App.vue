<script setup>
import Navbar from "./components/Navbar.vue"
import Footer from "./components/Footer.vue"
import HomeView from "./views/HomeView.vue"
import './style.css'

function handleScroll(sectionRef){
  const section = this.$refs[sectionRef];
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
}
</script>

<template>
  <main>
    <Navbar :handleScroll = "handleScroll"/>
    <HomeView/>
    <Footer ref="contact"/>
  </main>
</template>



