import Vue from 'vue'
import App from './App.vue'

Vue.filter('to-lowercase', function (value) {
  return value.toLowerCase()
})

Vue.mixin({
  created () {
    // Will output 3 times. main.js render Vue instance, App.vue, List.vue
    console.log('Global mixin - Created Hook')
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})
