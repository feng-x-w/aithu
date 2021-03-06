// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
//import Vuex from 'vuex';
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import i18n from './lang'
import axios from 'axios'
import Vuelidate from 'vuelidate'
import $ from 'jquery'
import store from './stores/store'

Vue.use(Vuelidate)
Vue.prototype.$axios = axios;
//Vue.use(VueI18n)
Vue.use(ElementUI);
Vue.config.productionTip = false

Vue.use(ElementUI, {
  size: 'medium', // set element-ui default size
  i18n: (key, value) => i18n.t(key, value)
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  store,//使用store
  components: { App },
  template: '<App/>'
})
