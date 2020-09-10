import Vue from "vue";
import firebase from "firebase";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import axios from "axios";

Vue.prototype.$http = axios;

Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: "AIzaSyBb87EJSO5livrO4v0qIWh0R3men-CCSFo",
  authDomain: "project-firebase-41b45.firebaseapp.com",
  databaseURL: "https://project-firebase-41b45.firebaseio.com",
  projectId: "project-firebase-41b45",
  storageBucket: "project-firebase-41b45.appspot.com",
  messagingSenderId: "467537846029",
  appId: "1:467537846029:web:cfc52a61a695e576d9da44",
  measurementId: "G-K3PYCJCB8C"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
