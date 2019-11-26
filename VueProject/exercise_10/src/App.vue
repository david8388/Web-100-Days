<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Directives Exercise</h1>
        <button v-myOn:click="myFunction">Click Me.</button>
        <hr>
        <div
          style="width:100px; height:100px; background-color: lightgreen"
          v-myOn:mouseenter="mouseEnter"
          v-myOn:mouseleave="mouseLeave"
        >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  directives: {
    myOn: {
      bind (el, binding, vnode) {
        const type = binding.arg
        const fn = binding.value
        el.addEventListener(type, fn)
      }
    }
  },
  methods: {
    myFunction () {
      alert('Hello world')
    },
    mouseEnter () {
      alert('Mouse Enter')
    },
    mouseLeave () {
      alert('Mouse Leave');
    }
  }
}
</script>

