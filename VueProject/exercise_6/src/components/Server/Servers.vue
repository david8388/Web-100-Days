<template>
  <div class="col-xs-12 col-sm-6">
    <ul class="list-group">
      <server
        v-for="server in servers"
        :key="server.id"
        :server="server"
      ></server>
    </ul>
  </div>
</template>

<script>
import Server from './Server.vue';

export default {
  data: function () {
    return {
      servers: [
        {
          id: 1,
          status: 'Normal'
        },
        {
          id: 2,
          status: 'Critical'
        },
        {
          id: 3,
          status: 'Warning'
        },
        {
          id: 4,
          status: 'Normal'
        }
      ]
    }
  }
}
</script>

<style scoped>
div {
  border: 1px solid blue;
}
</style>
