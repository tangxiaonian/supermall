import Vue from 'vue'
import App from './App.vue'

import axios from 'axios';
import VueAxios from 'vue-axios';

import VueAwesomeSwiper from 'vue-awesome-swiper';

import router from "./router/router";

import store from "./store/index";

import ToastPlugin from "./components/common/toast/ToastPlugin";

import FastClick from "fastclick";

import VueLazyload from "vue-lazyload";

Vue.use(ToastPlugin);

Vue.use(VueAxios, axios);

Vue.use(VueAwesomeSwiper);

Vue.use(VueLazyload,{
  loading: require("./assets/img/common/placeholder.png"),
});

// 优化 移动端点击300ms延迟问题
FastClick.attach(document.body);

// 消息总线
Vue.prototype.$bus = new Vue();

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app');
