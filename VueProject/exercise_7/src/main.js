import Vue from "vue";
import App from "./App.vue";

export const eventBus = new Vue({
  data: {
    age: {
      type: Number
    }
  }
});

new Vue({
  el: "#app",
  render: h => h(App)
});
