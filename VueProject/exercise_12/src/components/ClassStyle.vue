<template>
  <div>
    <div v-bind:style="{color: activeColor, 'font-size': fontSize + 'px'}">
      inline-Style
    </div>
    <div v-bind:style="inlineObj">
      inline-Style(Object)
    </div>
    <div v-bind:style="[inlineStyleA, inlineStyleB]">
      inline-Style(Array)
    </div>
    <div v-bind:class="{active: isActive, 'text-danger': hasError}">
      isActive?
    </div>
    <div v-bind:class="cssObj">
      isActive2?
    </div>
    <div v-bind:class="[activeClass, errorClass]">
      Array class
    </div>
    <div v-bind:class="[isActive ? activeClass: '', errorClass]">
      Array class
    </div>
    <div v-bind:class="[{active: isActive}, errorClass]">
      Array class
    </div>
  </div>
</template>

<script>
export default {
  name: 'ClassStyle',
  data() {
    return {
      isActive: true,
      hasError: false,
      activeClass: 'active',
      errorClass: 'text-danger',
      activeColor: 'green',
      fontSize: 30,
      inlineStyleA: { color: 'pink' },
      inlineStyleB: { 'font-size': '24px'}
    }
  },
  created() {
    setTimeout(() => {
      this.isActive = false
      this.hasError = true
    }, 3000);
  },
  computed: {
    cssObj() {
      return {
        active: this.isActive,
        'text-danger': this.hasError
      }
    },
    inlineObj() {
      return {
        color: this.activeColor,
        'font-size': this.fontSize + 'px'
      }
    }
  }
}
</script>

<style scoped>
.active {
  background-color: aliceblue;
}
.text-danger {
  color: red;
}
</style>
