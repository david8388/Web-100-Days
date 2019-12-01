<template>
  <div>
    <h1>Filters & Mixins</h1>
    <input v-model="filterText">
    <ul>
      <li
        v-for="fruit in filteredFruits"
        :key="fruit"
      >
        {{ fruit }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      fruits: ['Apple', 'Banana', 'Mango', 'Melon'],
      filterText: ''
    }
  },
  computed: {
    filteredFruits () {
      return this.fruits.filter((fruit) => {
        return fruit.match(this.filterText)
      })
    }
  }
}
</script>
