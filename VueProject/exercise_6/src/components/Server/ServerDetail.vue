<template>
  <div class="col-xs-12 col-sm-6">
    <p v-if="!server">Server Details are currently not updated</p>
    <p v-else>Server {{ server.id }} selected, Status is {{ server.status }} </p>
  </div>
</template>

<script>
import { eventBus } from '../../main.js'

export default {
  data: function () {
    return {
      server: null
    }
  },
  created () {
    eventBus.$on('serverWasSelected', (server) => {
      debugger;
      this.server = server;
    });
  }
}
</script>

<style scoped>
div {
  border: 1px solid red;
}
</style>
