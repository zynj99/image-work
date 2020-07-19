// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vant from 'vant';
import 'normalize.css/normalize.css' // A modern alternative to CSS resets
import store from './vuex/store'
import {
  Dialog,
  Toast
} from 'vant';
import 'vant/lib/index.css';
import './styles/_common.css';
import './styles/style.css';
import 'url-search-params-polyfill'
import VeeValidate from 'vee-validate'; //验证框架
import VueWechatTitle from 'vue-wechat-title'
import VueCookies from 'vue-cookies'
import axios from 'axios'

Vue.prototype.$axios = axios    //全局注册，使用方法为:this.$axios
Vue.use(VueCookies)
Vue.use(Vant)
Vue.use(Dialog)
Vue.use(VueWechatTitle)
const config = {
  errorBagName: 'errors',
  fieldsBagName: 'fields',
  delay: 100,
  locale: 'zh_CN',
  strict: true,
  enableAutoClasses: true,
  events: 'blur',
  inject: true
};


Vue.use(VeeValidate, config); //引入验证框架

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})

//