import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import PortfolioDetail from "../views/PortfolioDetail.vue";
// import IthServiciosComponent from "../components/IthServiciosComponent.vue";
import goTo from "vuetify/es5/services/goto";

Vue.use(VueRouter);

const scrollBehavior = function(to, from, savedPosition) {
  
  if (savedPosition) {
    // savedPosition is only available for popstate navigations.
    return savedPosition;
  } else {
    const position = {};

    // scroll to anchor by returning the selector
    if (to.hash) {
      position.selector = to.hash;

      // // specify offset of the element
      // if (to.hash === "#anchor2") {
      //   position.offset = { y: 100 };
      // }

      // bypass #1number check
      if (to.path != from.path){
        if (/^#\d/.test(to.hash) || document.querySelector(to.hash))
        return position
      }
      if (/^#\d/.test(to.hash) || document.querySelector(to.hash)) {
        const options = { duration: 300, offset: 0, easing: "linear" };
        let scrollTo = 0;
        if (to.hash) {
          scrollTo = to.hash;
        } else if (savedPosition) {
          scrollTo = savedPosition.y;
        }
        // console.log(window.location);
        // window.location.hash = ''
        return goTo(scrollTo, options);

        // return goTo(to.hash);
      }

      // if the returned position is falsy or an empty object,
      // will retain current scroll position.
      return false;
    }

    return new Promise(resolve => {
      // check if any matched route config has meta that requires scrolling to top
      if (to.matched.some(m => m.meta.scrollToTop)) {
        // coords will be used if no selector is provided,
        // or if the selector didn't match any element.
        // position.x = 0;
        // position.y = 0;
        // console.log('asd');
        resolve({ x: 0, y: 0 });
      }

      // wait for the out transition to complete (if necessary)
      this.app.$root.$once("triggerScroll", () => {
        // if the resolved position is falsy or an empty object,
        // will retain current scroll position.
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
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior,
  routes
});

export default router;
