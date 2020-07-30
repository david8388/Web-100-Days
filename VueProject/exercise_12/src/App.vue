<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld />
    <Todo />
    <Greeting />
    <todo-item
      v-for="item in groceryList"
      v-bind:key="item.id"
      v-bind:todo="item"
    />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Todo from './components/Todos';
import Greeting from './components/Greeting';
import TodoItem from './components/TodoItem';

export default {
  name: 'App',
  components: {
    HelloWorld,
    Todo,
    Greeting,
    TodoItem
  },
  data() {
    return {
      groceryList: [
        { id: 0, text: 'Vegetables' },
        { id: 1, text: 'Cheese' },
        { id: 2, text: 'Whatever else humans are supposed to eat' }
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
