import Vue from 'vue'
import App from './App.vue'

Vue.filter('text-append-length', function (text) {
  return `${text} (${text.length})`
})

new Vue({
  el: '#app',
  render: h => h(App)
})
