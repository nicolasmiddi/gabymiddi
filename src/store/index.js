import Vue from "vue";
import firebase from "firebase";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    info_general: [],
    rrss: [],
    portfolios: null,
    servicios: [],
    phone: []
  },
  mutations: {
    editInfoGeneral(state, payload) {
      state.info_general = payload;
    },
    editRrss(state, payload) {
      state.rrss = payload;
    },
    editPortfolios(state, payload) {
      state.portfolios = payload;
    },
    editServicios(state, payload) {
      state.servicios = payload;
    },
    editPhone(state, payload) {
      state.phone = payload;
    }
  },
  actions: {
    FETCH_PORTFOLIO: ({ state, commit }, limit) =>
      new Promise(resolve => {
        let instance = firebase.database().ref("portfolios");
        if (limit) {
          instance = instance.limitToFirst(limit);
        }
        instance.once("value", snapshot => {
          const portfolios = snapshot.val();
          commit("editPortfolios", portfolios.portfolios);
          commit("editInfoGeneral", portfolios.info_general);
          commit("editRrss", portfolios.rrss);
          commit("editServicios", portfolios.servicios);
          commit("editPhone", portfolios.phone);
    
          resolve(Object.values(state.portfolios));
        });
      })
  },
  modules: {}
});
