import Vue from "vue";
import App from "./App.vue";
import axios from "axios";
import VueAxios from "vue-axios";
import "@/assets/css/main.scss";
//import '@/assets/css/tailwind.css';

Vue.use(VueAxios, axios);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
