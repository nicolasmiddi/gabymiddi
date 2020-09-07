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
// import res from "@/assets/data.json";

export default {
  components: {
    IthHomeComponent,
    IthServiciosComponent,
    IthPortfolioComponent,
    IthContactoComponent
  },
  mounted() {
    // this.$http.get(`https://ipapi.co/json/`).then(res => {
    //   console.log(res.data.ip);
    //   alert(res.data.ip);
    // });

    this.$http.get("storage/data/data.json").then(res => {
      this.$store.commit("editInfoGeneral", res.data.info_general);
      this.$store.commit("editRrss", res.data.rrss);
      this.$store.commit("editPortfolios", res.data.portfolios);
      this.$store.commit("editServicios", res.data.servicios);
      this.$store.commit("editPhone", res.data.phone);
    });
  }
};
</script>
