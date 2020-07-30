<template>
  <div>
    <p>Using mustaches: {{ rawHtml }}</p>
    <p>Using v-html directive: <span v-html="rawHtml"></span></p>
    <div v-bind:id="id">{{ id }}</div>
    <button v-bind:disabled="isBtnDisabled">Button</button>
    <form v-on:submit.prevent="onSubmit">
      <input v-model="id">
      <input type="submit" value="Submit">
    </form>
  </div>
</template>

<script>
export default {
  name: 'Template',
  data() {
    return {
      rawHtml: `<span style="color: red">This should be red.</span>`,
      id: 'id123',
      isBtnDisabled: true
    }
  },
  methods: {
    onSubmit() {
      console.log('onSubmit');
    }
  }
}
</script>
