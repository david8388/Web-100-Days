<template>
  <div class="form-group">
    <label for="firstName">First Name</label>
    <input
      type="text"
      class="form-control"
      :value="firstName"
      @input="nameChanged(true, $event)"
    >
    <label for="lastName">Last Name</label>
    <input
      type="text"
      class="form-control"
      :value="lastName"
      @input="nameChanged(false, $event)"
    >
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String
    }
  },
  methods: {
    nameChanged: function (isFirst, event) {
      let name = ''
      if (isFirst) {
        name = event.target.value + ' ' + this.lastName
      } else {
        name = this.firstName + ' ' + event.target.valuesx
      }
      this.value = name
      this.$emit('input', name)
    }
  },
  computed: {
    firstName () {
      return this.value.split(' ')[0]
    },
    lastName () {
      return this.value.split(' ')[1]
    },
  }
}
</script>
