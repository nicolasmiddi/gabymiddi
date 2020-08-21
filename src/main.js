import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import axios from "axios";

Vue.prototype.$http = axios;

Vue.config.productionTip = false;

Vue.component(
  "IthPortfolioDetalleComponent",
  require("@/components/IthPortfolioDetalleComponent.vue").default
);
Vue.component(
  "IthFormularioComponent",
  require("@/components/IthFormularioComponent.vue").default
);
Vue.component(
  "IthHeaderComponent",
  require("@/components/IthHeaderComponent.vue").default
);
Vue.component(
  "IthWhatsappComponent",
  require("@/components/IthWhatsappComponent.vue").default
);
Vue.component(
  "IthFooterComponent",
  require("@/components/IthFooterComponent.vue").default
);
Vue.component(
  "IthHomeComponent",
  require("@/components/IthHomeComponent.vue").default
);
Vue.component(
  "IthServiciosComponent",
  require("@/components/IthServiciosComponent.vue").default
);
Vue.component(
  "IthPortfolioComponent",
  require("@/components/IthPortfolioComponent.vue").default
);
Vue.component(
  "IthContactoComponent",
  require("@/components/IthContactoComponent.vue").default
);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
