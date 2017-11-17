import Vue from 'vue'
import VueMdcAdapter from 'vue-mdc-adapter'
import App from './App.vue'

Vue.use(VueMdcAdapter)

new Vue({
  el: '#app',
  render: h => h(App)
})
