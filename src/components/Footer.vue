<script setup>
import { useRouter } from 'vue-router';
import { onMounted } from 'vue';

// Initialize the router
const router = useRouter();
const navbarHeight = 80; // Adjust this based on your navbar height

// Function to scroll to the desired section with an offset for the navbar
const scrollToSection = (sectionId) => {
  const section = document.querySelector(sectionId);
  if (section) {
    const sectionPosition = section.offsetTop - navbarHeight;
    window.scrollTo({
      top: sectionPosition,
      behavior: "smooth",
    });
  }
};

// When the component is mounted, use afterEach hook to detect route changes
onMounted(() => {
  router.afterEach((to) => {
    if (to.hash) {
      scrollToSection(to.hash);
    }
  });
});

// Redirect to home page and scroll to the respective section
const navigateToHomeSection = (sectionId) => {
  if (router.currentRoute.value.path === '/') {
    // If already on the home page, scroll to the section
    scrollToSection(sectionId);
  } else {
    // Redirect to home page and scroll to the section
    router.push({ path: '/', hash: sectionId });
  }
};
</script>

<template>
  <footer class="pt-10 px-6 md:pt-20 md:px-10 pb-10 3xl:max-w-[85%] mx-auto">
    <div class="text-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 place-items-start justify-items-center ">
      <div class="space-y-6 justify-self-start md:justify-self-center mt-8 md:mt-0 col-span-2 md:col-span-1">
        <a href="/">
          <img src="/images/Logo.png" alt="" class="w-[80%]" />
        </a>
      </div>

      <!-- Quick Links for sm screens -->
      <div class="text-[16px] space-y-4 justify-self-start md:justify-self-center mt-8 md:mt-0">
        <p>Quick Link</p>
        <div class="text-[#89A3B2] space-y-2 xs:hidden sm:block">
          <p><a href="https://app.way2algo.com/register" target="_blank" class="hover:underline">Register Now</a></p>
          <p @click="navigateToHomeSection('#feature')" class="hover:underline cursor-pointer">Features</p>
          <p @click="navigateToHomeSection('#pricing')" class="hover:underline cursor-pointer">Pricing</p>
          <p @click="navigateToHomeSection('#beginner')" class="hover:underline cursor-pointer">Why Us</p>
        </div>

        <!-- Quick Links for xs screens -->
        <div class="text-[#89A3B2] space-y-2 xs:block sm:hidden">
          <p><a href="https://app.way2algo.com/register" target="_blank" class="hover:underline">Register Now</a></p>
          <p @click="navigateToHomeSection('#feature')" class="hover:underline cursor-pointer">Features</p>
          <p @click="navigateToHomeSection('#pricing')" class="hover:underline cursor-pointer">Pricing</p>
          <p @click="navigateToHomeSection('#beginner')" class="hover:underline cursor-pointer">Why Us</p>
        </div>
      </div>

      <!-- Legal Links -->
      <div class="text-[16px] space-y-4 justify-self-start md:justify-self-center mt-8 md:mt-0">
        <p>Legal</p>
        <div class="text-[#89A3B2] space-y-2">
          <p><RouterLink :to="{ path: '/about', hash: '#disclaimer' }" class="hover:underline cursor-pointer">Disclaimer</RouterLink></p>
          <p><RouterLink :to="{ path: '/about', hash: '#privacy' }" class="hover:underline cursor-pointer">Privacy Policy</RouterLink></p>
          <p><RouterLink :to="{ path: '/about' }" class="hover:underline cursor-pointer">Terms & Conditions</RouterLink></p>
        </div>
      </div>

      <!-- Social Links -->
      <div class="text-[16px] space-y-4 justify-self-start xl:justify-self-center mt-8 xl:mt-0">
        <p>Follow Us On</p>
        <div class="flex gap-4">
          <a target="_blank" href="https://web.whatsapp.com/send?phone=919500829262&text=">
            <i class="pi pi-whatsapp text-[30px]"></i>
          </a>
          <a target="_blank" href="https://www.instagram.com/way2algotrade/">
            <i class="pi pi-instagram text-[30px]"></i>
          </a>
          <a target="_blank" href="https://www.youtube.com/@WAY2ALGO">
            <i class="pi pi-youtube text-[30px]"></i>
          </a>
        </div>
      </div>
    </div>

    <!-- Footer Bottom Section -->
    <div class="flex flex-col md:flex-row items-center justify-between text-white mt-10 space-y-2 md:space-y-0">
      <div class="flex items-center gap-1">
        <p>Backed By</p>
        <a target="_blank" href="https://www.xtentioncrew.tech/">
          <img src="/images/svg/xtention.svg" alt="">
        </a>
      </div>
      <p class="text-[#89A3B2]">All Rights Reserved</p>
    </div>
  </footer>
</template>

<style scoped>
/* Add any additional styling if needed */
</style>
