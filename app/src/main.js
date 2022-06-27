import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// 引入公共的css
import "@/assets/css/common.css";
// 引入淘宝无线适配
import "@/assets/js/flexible";
//引入字体图标css
import "@/assets/css/iconfont.css"
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
