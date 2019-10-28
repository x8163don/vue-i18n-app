import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import i18n from "@/lang/lang.js"

Vue.config.productionTip = false

// Vue instance include i18n feature
new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount("#app")
