<script setup>

const redirectToLogin = () => {
  window.location.href = "https://app.way2algo.com/";
}
</script>

<template>
  <footer class="pt-10 px-6 md:pt-20 md:px-10 pb-10 3xl:max-w-[85%] mx-auto">
    <div
      class="text-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 place-items-start justify-items-center ">
      <div class="space-y-6 justify-self-start md:justify-self-center mt-8 md:mt-0 col-span-2 md:col-span-1">
        <a href="/">
          <img src="../assets/images/Logo.png" alt="" class="w-[80%]" />
        </a>
        <p class="font-light text-gray-400">
          Keep all your health records in one secure place for easy access to
          your medical history during doctor visits.
        </p>
      </div>
      <div class="text-[16px] space-y-4 justify-self-start md:justify-self-center mt-8 md:mt-0">
        <p>Quick Link</p>
        <div class="text-[#89A3B2] space-y-2">
          <a href="https://app.way2algo.com/" class="hover:underline">Register Now</a>
          <p>Features</p>
          <p>Services</p>
          <p>Why US</p>
        </div>
      </div>
      <div class="text-[16px] space-y-4 justify-self-start md:justify-self-center mt-8 md:mt-0">
        <p>Legal</p>
        <div class="text-[#89A3B2] space-y-2">
          <p>Disclaimer</p>
          <p>Non-Discrimination</p>
          <p>HIPAA & Privacy Policy</p>
          <p>Equal Opportunity</p>
        </div>
      </div>
      <div class="text-[16px] space-y-4 justify-self-start xl:justify-self-center mt-8 xl:mt-0">
        <p>Follow Us On</p>
        <div class=" flex gap-4">
          <a target="_blank" href="https://www.linkedin.com/company/xtention-crew-technologies/">
            <i class="pi pi-linkedin text-[30px]"></i>
          </a>
          <a target="_blank" href="https://www.instagram.com/xtention_crew_"><i
            class="pi pi-instagram text-[30px]"></i></a>
          <a target="_blank" href="https://www.facebook.com/profile.php?id=61558481513914"><i
              class="pi pi-facebook text-[30px]"></i></a>
        </div>
      </div>
    </div>
    <div class="flex flex-col md:flex-row items-center justify-between text-white mt-10 space-y-2 md:space-y-0">
      <div class="flex items-center gap-1">
        <p>Backed By</p>
        <a target="_blank" href="https://www.xtentioncrew.tech/"><img src="../assets/images/svg/xtention.svg"
            alt=""></a>
      </div>
      <p class="text-[#89A3B2]">All Rights Reserved</p>
    </div>
  </footer>
</template>
