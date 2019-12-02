<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Filters & Mixins</h1>
        <p>{{ text | toUpperCase | to-lowercase}}</p>
        <hr>
        <input v-model="filterText">
        <ul>
          <li
            v-for="fruit in filteredFruits"
            :key="fruit"
          >
            {{ fruit }}
          </li>
        </ul>
        <hr>
        <app-list></app-list>
      </div>
    </div>
  </div>
</template>

<script>
import List from './List.vue'
import { fruitMixin } from './fruitMixins.js'

export default {
  mixins: [fruitMixin],
  data () {
    return {
      text: 'Hello World'
    }
  },
  filters: {
    toUpperCase (value) {
      return value.toUpperCase()
    }
  },
  components: {
    appList: List
  },
  created () {
    console.log('Created')
  }
}
</script>

<style>
</style>
