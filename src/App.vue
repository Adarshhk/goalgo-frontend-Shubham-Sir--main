<script setup>
import Navbar from "./components/Navbar.vue"
import Footer from "./components/Footer.vue"
import HomeView from "./views/HomeView.vue"
import './style.css'
import { RouterView } from "vue-router";

</script>

<template>
  <main>
    <RouterView/>
    <Footer/>
  </main>
</template>



