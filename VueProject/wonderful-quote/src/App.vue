<template>
  <div class="container">
    <app-new-quote @quoteAdded="newQuote"></app-new-quote>
    <app-quote-grid :quotes="quotes"></app-quote-grid>
  </div>
</template>

<script>
import NewQuote from './components/NewQuote';
import QuoteGrid from './components/QuoteGrid';

export default {
  data: function () {
    return {
      quotes: ['Just a quote to see something'],
      maxQuotes: 10
    }
  },
  methods: {
    newQuote: function (quote) {
      this.quotes.push(quote)
    }
  },
  components: {
    appQuoteGrid: QuoteGrid,
    appNewQuote: NewQuote
  }
}
</script>

<style>
</style>
