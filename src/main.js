import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store/store"
import "./registerServiceWorker"

import VModal from 'vue-js-modal'
import VueMeta from 'vue-meta'

Vue.use(VModal)
Vue.use(VueMeta)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")
