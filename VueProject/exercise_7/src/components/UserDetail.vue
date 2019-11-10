<template>
  <div class="component">
    <h3>You may view the User Detail here.</h3>
    <p>Many Details</p>
    <p>User Name: {{ names }}</p>
    <button @click="resetName">Reset Name</button>
  </div>
</template>

<script>
export default {
  props: {
    myName: {
      type: String,
      default: 'David'
    }
  },
  data: function () {
    return {
      userName: this.myName
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
    }
  }
}
</script>

<style scoped>
div {
  background-color: lightcoral;
}
</style>
