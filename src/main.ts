import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from '@/App.vue';
import router from '@/router';

/* import the fontawesome */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
library.add(faBars);

import '@/assets/main.css';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.component('FontAwesomeIcon', FontAwesomeIcon);

app.mount('#app');
