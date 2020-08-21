import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    info_general: [],
    rrss: [],
    portfolios: [],
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
  actions: {},
  modules: {}
});
