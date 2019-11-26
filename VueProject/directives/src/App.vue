<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Build-in Directives</h1>
        <p v-text="'Some text'"></p>
        <p v-html="'<strong>Some Strong text</strong>'"></p>
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Custom Directives</h1>
        <p v-highlight:background.delayed="'red'">Color this</p>
        <p v-local-highlight:background.delayed.blink="'lightcoral'">Color that</p>
        <!-- <p v-highlight="'red'">Color this</p> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  directives: {
    localHighlight: {
      bind (el, binding, vnode) {
        let delay = 0
        if (binding.modifiers['delayed']) {
          delay = 3000;
        }

        if (binding.modifiers['blink']) {
          let mainColor = binding.value
          let secondColor = 'blue'
          let currentColor = mainColor

          setTimeout(() => {
            setInterval(() => {
              currentColor === secondColor ? currentColor = mainColor : currentColor = secondColor
              if (binding.arg === 'background') {
                el.style.background = currentColor
              } else {
                el.style.color = currentColor
              }
            }, 1000)
          }, delay)

        } else {
          setTimeout(() => {
            if (binding.arg === 'background') {
              el.style.background = binding.value
            } else {
              el.style.color = binding.value
            }
          }, delay)
        }
      }
    }
  }
}
</script>

<style>
</style>
