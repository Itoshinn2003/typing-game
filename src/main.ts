import { createApp } from 'vue'
import './style.css'
import './styles/common.css'
import App from './App.vue'
import router from './router';
import { createPinia } from 'pinia';
import createPersistedState from 'pinia-plugin-persistedstate';

const pinia = createPinia();
pinia.use(createPersistedState);

createApp(App).use(pinia).use(router).mount('#app')
