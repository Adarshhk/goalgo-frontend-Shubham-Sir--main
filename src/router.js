import { createWebHistory, createRouter } from 'vue-router'
import HomeView  from './views/HomeView.vue'
import AboutView from './views/AboutView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
]

export const router = createRouter({
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
      }
    }
    else{
      return { top: 0 }
    }
  },
  history: createWebHistory(),
  routes,
  
})