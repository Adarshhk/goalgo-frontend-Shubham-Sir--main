<script setup>
import { reactive, ref } from 'vue';
import BorderButton from '../components/BorderButton.vue';

const showForm = ref(false);
const handleForm = () => {
  showForm.value = !showForm.value;
}

const form = reactive({
    name: '',
    email: '',
    mobile: '',
    message: '',
    agreeToTerms : false,
})

const handleSubmit = async () => {
  if (form.agreeToTerms) {
    console.log(form)
    // Add your form submission logic here
    const response = await fetch('/contact-us', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',  // This is crucial for sending JSON
      },
      body: JSON.stringify(form),  // Convert form data to JSON string
    });
    console.log(response)
    showForm.value = false; // Close the modal after submission
  } else {
    alert('Please agree to the Terms and Privacy Policy');
  }
}
</script>

<template>
  <div v-if="showForm"
    class="transition-all z-20 fixed inset-0 w-full h-screen bg-black bg-opacity-50 flex justify-center items-center overflow-hidden">
    <div class="bg-[#102f2a] rounded-md my-10">
      <div class="w-full max-w-md p-8 rounded-lg shadow-lg bg-opacity-100 relative">
        <div class="text-center mb-8">
          <img src="https://i.ibb.co/4WcZ0p0/image.png" alt="Logo" class="w-16 h-16 mx-auto mb-4" />
          <h2 class="text-3xl font-bold text-white mb-2">Contact Us</h2>
          <p class="text-gray-300">Please fill out the form below to get in touch.</p>
        </div>
        <form @submit.prevent="handleSubmit" action="/submit" method="POST" class="space-y-6">
          <div>
            <input v-model="form.name" type="text" placeholder="Name" required
              class="w-full px-4 py-2 rounded bg-dark-green-light text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-yellow-500" />
          </div>
          <div>
            <input v-model="form.email" type="email" placeholder="Email" required
              class="w-full px-4 py-2 rounded bg-dark-green-light text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-yellow-500" />
          </div>
          <div>
            <input v-model="form.mobile" type="tel" placeholder="Mobile Number" required
              class="w-full px-4 py-2 rounded bg-dark-green-light text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-yellow-500" />
          </div>
          <div>
            <textarea v-model="form.message" placeholder="Your Message" required rows="4"
              class="w-full px-4 py-2 rounded bg-dark-green-light text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-yellow-500 resize-none"></textarea>
          </div>
          <div class="flex items-center">
            <input type="checkbox" id="terms" v-model="form.agreeToTerms" required class="mr-2" />
            <label for="terms" class="text-gray-300 text-sm">I agree to the Terms and Privacy Policy.</label>
          </div>
          <div class="flex justify-center">
            <button type="submit"
              class="px-8 py-2 bg-yellow-500 text-dark-green font-semibold rounded hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-700">
              Submit
            </button>
          </div>
        </form>
        <button @click="showForm = false" class="absolute top-4 right-4 text-white hover:text-gray-300">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  </div>

  <section class="px-6 md:px-10 py-20 xl:py-44 relative 3xl:max-w-[85%] mx-auto">
    <div class="absolute left-16 top-32 hidden xl:block">
      <img src="/images/svg/heroBg1.svg" alt="" />
    </div>
    <div class="absolute top-10 left-[620px] 2xl:left-[720px] hidden xl:block">
      <img src="/images/svg/heroBg3.svg" alt="" />
    </div>

    <div class="text-white font-Inter text-center space-y-6">
      <h1 class="mx-auto text-[50px] md:text-[58px] 2xl:text-[64px] md:w-[65%] xl:w-[42%] leading-[65px]">
        The <span class="text-algo-orange">Future of Trading</span> is Here
      </h1>
      <p class="font-light text-[#8C8C8C] mx-auto md:w-[70%] xl:w-[70%] 2xl:w-[60%]">
        Our algorithmic trading software automates complex strategies,
        delivering speed and precision in every trade. Maximize profits, reduce
        risks, and stay ahead of the market with seamless, data-driven
        execution.
      </p>
      <BorderButton @click="handleForm" title="Request a Demo" class="w-[70%] md:w-[40%] xl:w-[20%]" />
    </div>
    <div class="absolute right-16 top-32 hidden xl:block">
      <img src="/images/svg/heroBg2.svg" alt="" />
    </div>
  </section>
</template>

<style scoped>
.bg-dark-green-light {
  background-color: #0f4d31;
}

.text-dark-green {
  color: #0a3622;
}

.text-algo-orange {
  color: #FFA500;
  /* Adjust this color to match your design */
}
</style>