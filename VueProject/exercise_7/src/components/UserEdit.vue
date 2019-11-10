<template>
  <div class="component">
    <h3>You may edit the User here</h3>
    <p>Edit here</p>
    <p>User Age: {{ age }}</p>
    <button @click="editAge">Edit Age</button>
  </div>
</template>

<script>
export default {
  props: {
    userAge: {
      type: Number
    }
  },
  data: function () {
    return {
      age: this.userAge
    }
  },
  methods: {
    editAge () {
      this.age = 30
      this.$emit('ageWasEdited', this.age)
    }
  }
}
</script>

<style scoped>
div {
  background-color: lightgreen;
}
</style>
