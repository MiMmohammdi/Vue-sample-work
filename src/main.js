import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VueI18n from "vue-i18n";
import lang from "./locale/translate";

Vue.config.productionTip = false;

Vue.use(VueI18n);

const messages = lang ;

const i18n = new VueI18n({
  locale: "en",
  messages,
});

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
  i18n,
}).$mount("#app");
