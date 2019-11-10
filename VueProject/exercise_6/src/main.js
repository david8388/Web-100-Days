import Vue from "vue";
import App from "./App.vue";
import Server from "./components/Server.vue";
import Detail from "./components/Detail.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

Vue.component("Server", Server);
Vue.component("Detail", Detail);
Vue.component("AppHeader", Header);
Vue.component("AppFooter", Footer);

new Vue({
  el: "#app",
  render: h => h(App)
});
