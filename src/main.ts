/* eslint-disable vue/component-definition-name-casing */
import { createApp } from 'vue';
import { createPinia } from 'pinia';

// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap-vue/dist/bootstrap-vue.css';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from '@/App.vue';
import router from '@/router';

import '@/assets/main.css';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app');
