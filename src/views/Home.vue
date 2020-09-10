<template>
  <div>
    <ith-home-component id="home" />
    <ith-servicios-component id="servicios" />
    <ith-portfolio-component id="portfolio" />
    <ith-contacto-component id="contacto" />
  </div>
</template>

<script>
import IthHomeComponent from "@/components/IthHomeComponent.vue";
import IthServiciosComponent from "@/components/IthServiciosComponent.vue";
import IthPortfolioComponent from "@/components/IthPortfolioComponent.vue";
import IthContactoComponent from "@/components/IthContactoComponent.vue";
import { mapState } from "vuex";

export default {
  computed: mapState(["portfolios"]),
  components: {
    IthHomeComponent,
    IthServiciosComponent,
    IthPortfolioComponent,
    IthContactoComponent
  },
  mounted() {
    if (this.portfolios === null) this.$store.dispatch("FETCH_PORTFOLIO");
  }
};
</script>
