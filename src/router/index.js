import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import PortfolioDetail from "../views/PortfolioDetail.vue";
import goTo from "vuetify/es5/services/goto";

Vue.use(VueRouter);

const scrollBehavior = function(to, from, savedPosition) {
  if (savedPosition) {
    // savedPosition is only available for popstate navigations.
    return savedPosition;
  } else {
    const position = {};

    if (to.hash) {
      position.selector = to.hash;

      if (to.path != from.path) {
        if (/^#\d/.test(to.hash) || document.querySelector(to.hash))
          return position;
      }
      if (/^#\d/.test(to.hash) || document.querySelector(to.hash)) {
        const options = { duration: 300, offset: 0, easing: "linear" };
        let scrollTo = 0;
        if (to.hash) {
          scrollTo = to.hash;
        } else if (savedPosition) {
          scrollTo = savedPosition.y;
        }
        return goTo(scrollTo, options);
      }
      return false;
    }

    return new Promise(resolve => {
      if (to.matched.some(m => m.meta.scrollToTop)) {
        resolve({ x: 0, y: 0 });
      }

      this.app.$root.$once("triggerScroll", () => {
        return goTo(position);
      });
    });
  }
};

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { scrollToTop: true }
  },
  {
    path: "/portfolio/:id",
    name: "portfolio-detail",
    component: PortfolioDetail,
    meta: { scrollToTop: true }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior,
  routes
});

export default router;
