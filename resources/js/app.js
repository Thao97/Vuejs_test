import './bootstrap';
import Vue from 'vue';
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';

import Routes from './routes.js';

import App from './views/App.vue';

// Vue.use(VueRouter);
Vue.use(VueRouter);

const app = new Vue({
    el: '#app',
    router: Routes,
    render: h =>h(App), 
    
});

export default app;
