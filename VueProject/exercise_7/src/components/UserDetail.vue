<template>
  <div class="component">
    <h3>You may view the User Detail here.</h3>
    <p>Many Details</p>
    <p>User Name: {{ userName }}</p>
    <p>User Age: {{ age }} </p>
    <button @click="resetName">Reset Name</button>
    <button @click="resetFn()">Reset Name</button>
  </div>
</template>

<script>
import { eventBus } from '../main.js';

export default {
  props: {
    myName: {
      type: String,
      default: 'David'
    },
    resetFn: {
      type: Function
    },
    userAge: {
      type: Number
    }
  },
  data: function () {
    return {
      userName: this.myName.split('').reverse().join(''),
      age: this.userAge
    }
  },
  methods: {
    resetName () {
      this.userName = 'David';
      eventBus.changeName(this.userName)
    },
    setName (name) {
      this.userName = name.split('').reverse().join('')
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
  background-color: lightcoral;
}
</style>
