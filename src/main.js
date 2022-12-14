import { createApp } from 'vue';

import App from './App.vue';
import '@/assets/main.css';

import components from '@/ui';

const app = createApp(App);

components.map(component => {
   app.component(component.name, component);
});

app.mount('#app');
