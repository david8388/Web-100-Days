<template>
  <div class="component">
    <h3>You may view the User Detail here.</h3>
    <p>Many Details</p>
    <p>User Name: {{ myName }}</p>
  </div>
</template>

<script>
export default {
  props: ['myName']
}
</script>

<style scoped>
div {
  background-color: lightcoral;
}
</style>
