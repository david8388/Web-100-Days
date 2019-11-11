<template>
  <li
    class="list-group-item"
    style="cursor: pointer"
    @click="serverSelected"
  >
    Server #{{ server.id }}
  </li>
</template>

<script>
import { eventBus } from '../../main.js';

export default {
  props: {
    server: {
      type: Object,
      default: null
    }
  },
  methods: {
    serverSelected () {
      eventBus.$emit('serverWasSelected', this.server)
    }
  }
}
</script>

<style scoped>
div {
  border: 1px solid blue;
}
</style>
