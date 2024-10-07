<script setup>
import AboutNavbar from '../components/AboutNavbar.vue';
import TermsCondition from '../sections/TermsCondition.vue';
import PrivacyPolicy from '../sections/PrivacyPolicy.vue';
import Disclaimer from '../sections/Disclaimer.vue';


</script>

<template >
    <div className="min-h-screen bg-[#0a2e1f] text-white">
      <AboutNavbar/>
      <main className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-5xl font-bold mb-6">
          <span className="text-white">Terms and </span>
          <span className="text-[#ffa500]">Conditions</span>
        </h1>
      </main>
      <div>
        <TermsCondition id="terms"/>
        <PrivacyPolicy id="privacy"/>
        <Disclaimer id="disclaimer"/>
      </div>
    </div>
    
</template>