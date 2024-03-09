// Common files
import './common/imports.css';
import './assets/main.css'

// Main
import { createApp } from 'vue'
import { createPinia } from 'pinia'

// Custom libraries
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';


import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

// Init Custom Libraries
app.use(PrimeVue);

app.mount('#app')
