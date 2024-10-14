<script setup>
import AboutNavbar from '../components/AboutNavbar.vue';
import TermsCondition from '../sections/TermsCondition.vue';
import PrivacyPolicy from '../sections/PrivacyPolicy.vue';
import Disclaimer from '../sections/Disclaimer.vue';
import { ref } from 'vue'

const logos = ref([
  { id: 1, name: 'eT', position: 'top-[5%] left-[20%]' },
  { id: 2, name: 'Arrow', position: 'top-[20%] right-[15%]' },
  { id: 3, name: 'Altablue', position: 'top-[40%] left-[10%]' },
  { id: 4, name: 'Sharemarket', position: 'bottom-[20%] right-[20%]' },
  { id: 5, name: 'Sunburst', position: 'bottom-[10%] left-[30%]' },
  { id: 6, name: 'Bar Graph', position: 'bottom-[30%] left-[45%]' },
  { id: 7, name: 'Infinity', position: 'top-[30%] right-[25%]' },
  { id: 8, name: 'Curved Line', position: 'top-[15%] left-[35%]' },
])

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



<!-- <style>
.img-container {
  position: relative;
  display: inline-block;
}

.hover-img {
  width: 200px;
  transition: transform 0.3s ease;
}

.line {
  position: absolute;
  bottom: 50%;
  left: 100%;
  width: 0;
  height: 2px;
  background-color: #00ffcc;
  transition: width 0.5s ease;
  transform-origin: left;
}

.futuristic-btn {
  position: absolute;
  bottom: 50%;
  left: 100%;
  padding: 10px 20px;
  background-color: #00ffcc;
  border: none;
  color: white;
  font-size: 14px;
  cursor: pointer;
  transform: translateX(10px);
  opacity: 0;
  transition: opacity 0.3s ease, transform 0.3s ease;
  pointer-events: none;
}

.img-container:hover .line {
  width: 150px; /* Adjust the length of the line */
}

.img-container:hover .futuristic-btn {
  opacity: 1;
  transform: translateX(160px); /* Moves the button to the end of the line */
  pointer-events: auto;
}

.img-container:hover .hover-img {
  transform: scale(1.05); /* Slight zoom-in effect on the image */
}

</style> -->