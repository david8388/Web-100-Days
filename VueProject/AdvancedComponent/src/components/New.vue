<template>
  <div>
    <p>New Quote</p>
    <button @click="counter++">Increase</button>
    <p>{{ counter }}</p>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      counter: 0
    }
  },
  destroyed () {
    console.log('Destroyed!');
  },
  deactivated () {
    console.log('Deactivated');
  },
  activated () {
    console.log('Activated');
  },
}
</script>

<style>
</style>
