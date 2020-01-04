import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(VueRouter)
new Vue({
  ender: h => h(App),
}).$mount('#app')
