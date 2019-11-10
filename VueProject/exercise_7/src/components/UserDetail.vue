<template>
  <div class="component">
    <h3>You may view the User Detail here.</h3>
    <p>Many Details</p>
    <p>User Name: {{ names }}</p>
    <p>User Age: {{ ages }} </p>
    <button @click="resetName">Reset Name</button>
    <button @click="resetFn()">Reset Name</button>
  </div>
</template>

<script>
export default {
  props: {
    myName: {
      type: String,
      default: 'David'
    },
    resetFn: {
      type: Function
    },
    userAge: {
      type: Number
    }
  },
  data: function () {
    return {
      userName: this.myName,
      age: this.userAge
    }
  },
  methods: {
    resetName () {
      // this.myName = 'David'
      this.userName = 'David';
      this.$emit('nameWasReset', this.userName)
    }
  },
  computed: {
    names: function () {
      return this.userName = this.myName.split('').reverse().join('')
    },
    ages: function () {
      return this.age = this.userAge
    }
  }
}
</script>

<style scoped>
div {
  background-color: lightcoral;
}
</style>
