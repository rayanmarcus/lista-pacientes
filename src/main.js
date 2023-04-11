import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Notifications from 'vue-notification'
import $ from 'jquery'
import bootstrap from 'bootstrap'
import api from './helpers/api'

Vue.use(Notifications)

Vue.config.productionTip = false

Vue.prototype.$https = api
Vue.prototype.$ = $

new Vue({
  router,
  store,
  bootstrap,
  render: h => h(App)
}).$mount('#app')
