<template>
  <div class="container">
    <app-header
      :quoteCount="quotes.length"
      :maxQuotes="maxQuotes"
    ></app-header>
    <app-new-quote @quoteAdded="newQuote"></app-new-quote>
    <app-quote-grid
      :quotes="quotes"
      @quoteDeleted="deleteQuote"
    ></app-quote-grid>
    <div class="row">
      <div class="col-sm-12 text-center">
        <div class="alert alert-info">Info click on a quote to delete it</div>
      </div>
    </div>
  </div>
</template>

<script>
import NewQuote from './components/NewQuote';
import QuoteGrid from './components/QuoteGrid';
import Header from './components/Header';

export default {
  data: function () {
    return {
      quotes: ['Just a quote to see something'],
      maxQuotes: 10
    }
  },
  methods: {
    newQuote: function (quote) {
      if (this.quotes.length >= this.maxQuotes) {
        return alert('Please delete quote first!')
      }
      this.quotes.push(quote)
    },
    deleteQuote: function (index) {
      this.quotes.splice(index, 1)
    }
  },
  components: {
    appQuoteGrid: QuoteGrid,
    appNewQuote: NewQuote,
    appHeader: Header
  }
}
</script>

<style>
</style>
