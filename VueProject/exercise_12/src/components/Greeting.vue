<template>
  <div>
    {{ greeting }}
    <button v-on:click="reverseMessage()">Reverse Message</button>
    <br>
    {{ text }}
    <input v-model="text">
  </div>
</template>

<script>
export default {
  name: 'Greeting',
  data() {
    return {
      greeting: 'Hi Vue!',
      text: 'Two-way binding'
    }
  },
  methods: {
    reverseMessage() {
      this.greeting = this.greeting.split('').reverse().join('')
    }
  }
}
</script>
