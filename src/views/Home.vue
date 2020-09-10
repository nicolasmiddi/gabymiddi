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

export default {
  components: {
    IthHomeComponent,
    IthServiciosComponent,
    IthPortfolioComponent,
    IthContactoComponent
  },
  mounted() {
    this.$store.dispatch("FETCH_PORTFOLIO");
  }
};
</script>
