<template>
  <div class="component">
    <h3>You may view the User Detail here.</h3>
    <p>Many Details</p>
    <p>User Name: {{ names }}</p>
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
