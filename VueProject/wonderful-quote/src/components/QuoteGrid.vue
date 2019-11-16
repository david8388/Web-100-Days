<template>
  <div class="row">
    <app-quote
      v-for="(quote, index) in quotes"
      :key="index"
      @click.native="deleteQuote(index)"
    >
      {{ quote }}
    </app-quote>
  </div>
</template>

<script>
import Quote from './Quote.vue';

export default {
  props: {
    quotes: {
      type: Array
    }
  },
  components: {
    appQuote: Quote
  },
  methods: {
    deleteQuote: function (index) {
      this.$emit('quoteDeleted', index)
    }
  }
}
</script>

<style>
</style>
