import Vue from "vue";
import App from "./App.vue";
import Server from "./components/Server/Server.vue";
import ServerDetail from "./components/Server/ServerDetail.vue";
import Header from "./components/Shared/Header.vue";
import Footer from "./components/Shared/Footer.vue";

Vue.component("Server", Server);
Vue.component("ServerDetail", ServerDetail);
Vue.component("AppHeader", Header);
Vue.component("AppFooter", Footer);

new Vue({
  el: "#app",
  render: h => h(App)
});
