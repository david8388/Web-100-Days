<template>
  <div class="container">
    <form>
      <div
        class="row"
        v-if="!submitted"
      >
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <app-full-name :value="userData.fullName"></app-full-name>
          <div class="form-group">
            <label for="mail">Mail</label>
            <input
              type="text"
              class="form-control"
              id="mail"
              v-model="userData.mail"
            >
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              class="form-control"
              id="password"
              v-model="userData.password"
            >
          </div>
          <div class="form-group">
            <label for="storeData">Store Data</label>
            <input
              type="radio"
              id="male"
              value="yes"
              v-model="userData.isStore"
              @click="userData.isStore = 'yes'"
            /> Yes

            <input
              type="radio"
              id="male"
              value="no"
              v-model="userData.isStore"
              @click="userData.isStore = 'no'"
            /> No
          </div>
          <button
            type="submit"
            @click.prevent="submitted = true"
            class="btn btn-primary"
          >Submit the form</button>
        </div>
      </div>
    </form>
    <hr>
    <div
      class="row"
      v-if="submitted"
    >
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4>Your Data</h4>
          </div>
          <div class="panel-body">
            <p>Full Name: {{ userData.fullName }}</p>
            <p>Mail: {{ userData.mail }}</p>
            <p>Password: {{ userData.password }}</p>
            <p>Store in Database?: {{ userData.isStore }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FullName from './FullName.vue';

export default {
  data () {
    return {
      userData: {
        fullName: 'David Wu',
        mail: '',
        password: '',
        isStore: 'no'
      },
      submitted: false
    }
  },
  components: {
    appFullName: FullName
  }
}
</script>

<style>
</style>
