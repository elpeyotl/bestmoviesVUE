import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
// import moment from 'moment'

// Vue.mixin({
//   methods: {
//     formatDate (date, format) {
//       return moment(String(date)).format(format)
//     }
//   }
// })

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
