import Vue from 'vue'
import App from './App.vue'

import axios from 'axios';
import VueAxios from 'vue-axios';

import VueAwesomeSwiper from 'vue-awesome-swiper';

import router from "./router/router";

import store from "./store/index";

Vue.use(VueAxios, axios);

Vue.use(VueAwesomeSwiper);

// 消息总线
Vue.prototype.$bus = new Vue();

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app');
