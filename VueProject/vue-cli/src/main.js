import Vue from "vue";
import App from "./App";
import Home from "./Home";

Vue.component("app-server-status", Home);

new Vue({
  el: "#app",
  render: h => h(App)
});
