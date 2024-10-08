<script setup>
import AboutNavbar from '../components/AboutNavbar.vue';
import TermsCondition from '../sections/TermsCondition.vue';
import PrivacyPolicy from '../sections/PrivacyPolicy.vue';
import Disclaimer from '../sections/Disclaimer.vue';


</script>

<template >
    <div className="min-h-screen bg-[#0a2e1f] text-white">
      <AboutNavbar/>
      <div>
        <TermsCondition id="terms"/>
        <PrivacyPolicy id="privacy"/>
        <Disclaimer id="disclaimer"/>
      </div>
    </div>
    
</template>