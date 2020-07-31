<template>
  <div>
    <p>Original message: {{ message }} </p>
    <p>Computed reversed message: {{ reversedMessage }} </p>
    <br>
    {{ fullName }}
    <br>
    {{ fullName2 }}
  </div>
</template>

<script>
export default {
  name: 'ComputedWatcher',
  data() {
    return {
      message: 'Hello',
      firstName: 'John',
      lastName: 'Cena',
      //fullName: 'John Cena'
    }
  },
  created() {
    setTimeout(() => {
      this.fullName2 = 'Dwyane Johnson'
    }, 5000);
  },
  /*watch: {
    firstName(val) {
      this.fullName = `${val} ${this.lastName}`
    },
    lastName(val) {
      this.fullName = `${this.firstName} ${val}`
    }
  },*/
  computed: {
    reversedMessage() {
      return this.message.split('').reverse().join('') + Date.now()
    },
    fullName() {
      return `${this.firstName} ${this.lastName}`
    },
    fullName2: {
      get: function() {
        return `${this.firstName} ${this.lastName}`
      },
      set: function(val) {
        const names = val.split(' ')
        this.firstName = names[0]
        this.lastName = names[names.length - 1]
      }
    }
  }
}
</script>
