import Vue from 'vue'
import App from './App.vue'

import BootstrapVue from 'bootstrap-vue'
// import 'public/assets/plugins/bootstrap-4.1.2-dist/css/bootstrap.min.css'
// import 'public/assets/plugins/materialdesignicons/css/materialdesignicons.min.css'

Vue.use(BootstrapVue)
new Vue({
  el: '#app',
  render: h => h(App)
})
