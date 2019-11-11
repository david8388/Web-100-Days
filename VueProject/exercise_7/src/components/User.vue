<template>
  <div class="component">
    <h1>The User Component</h1>
    <p>I'm awesome User!</p>
    <button @click="changeName">Change my name!!</button>
    <p>Name is {{ name }}</p>
    <hr>
    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <app-user-detail
          :myName="name"
          @nameWasReset="name = $event"
          :resetFn="resetName"
          :userAge="age"
        >
        </app-user-detail>
      </div>
      <div class="col-xs-12 col-sm-6">
        <app-user-edit
          :userAge="age"
          @ageWasEdited="age = $event"
        ></app-user-edit>
      </div>
    </div>
  </div>
</template>

<script>
import UserDetail from './UserDetail.vue';
import UserEdit from './UserEdit.vue';
import { eventBus } from '../main.js';

export default {
  data: function () {
    return {
      name: 'David',
      age: 25
    }
  },
  components: {
    'appUserDetail': UserDetail,
    'appUserEdit': UserEdit
  },
  methods: {
    changeName: function () {
      this.name = "Lily"
      eventBus.changeName(this.name)
    },
    resetName: function () {
      this.name = 'David'
      eventBus.changeName(this.name)
    },
    setName (name) {
      this.name = name
    },
    setAge (age) {
      this.age = age
    }
  },
  created () {
    eventBus.$on('ageWasEdited', (age) => {
      this.setAge(age);
    })

    eventBus.$on('nameWasReset', (name) => {
      this.setName(name);
    })
  }
}

</script>

<style scoped>
div {
  background-color: lightblue;
}
</style>
