import { createApp } from 'vue'
import './assets/main.css'
import './assets/theme.css'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/aura-dark-green/theme.css';
import 'primeicons/primeicons.css'
import { router } from './router';
const app = createApp(App)


app.use(PrimeVue).use(router);

app.mount('#app')
