<template>
  <ol>
    <li
      v-for="(todo, index) in todos"
      v-bind:key="index"
    >
      {{ todo.text }}
    </li>
  </ol>
</template>

<script>
export default {
  name: 'Todo',
  data() {
    return {
      todos: [
        {  text: 'Learn Javascript' },
        {  text: 'Learn Vue' },
        {  text: 'Build something awesome' }
      ]
    }
  }
}
</script>
