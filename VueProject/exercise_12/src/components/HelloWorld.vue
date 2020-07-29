<template>
  <div class="hello">
    <span v-if="seen">{{ message }}</span>
  </div>
</template>

<script>
//const data = { counter: 0 }

export default {
  name: 'HelloWorld',
  data() {
    return {
      message: `You loaded this page on ${new Date().toLocaleString()}`,
      seen: true
    }
  },
  // https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function
  // all instances of the component share the same data object, 
  /*data: function() {
    return data
  }*/
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
