import Vue from "vue";
import App from "./App.vue";

export const eventBus = new Vue({
  methods: {
    changeAge(age) {
      this.$emit("ageWasEdited", age);
    },
    changeName(name) {
      debugger;
      this.$emit("nameWasReset", name);
    }
  }
});

new Vue({
  el: "#app",
  render: h => h(App)
});
