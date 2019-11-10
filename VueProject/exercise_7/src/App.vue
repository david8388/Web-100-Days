<template>
  <div class="container">
    <app-user></app-user>
  </div>
</template>

<script>
import User from './components/User.vue';

export default {
  components: {
    appUser: User
  }
}
</script>

<style>
div.component {
  border: 1px solid black;
  padding: 30px;
}
</style>
