<template>
  <div class="servicio">
    <v-container fluid>
      <div class="text-center titulo">
        <h2 v-if="portfolios[id]" class="white--text font-weight-light">
          {{ portfolios[id].title }}
        </h2>
        <h2 v-else class="white--text font-weight-light">
          Cargando...
        </h2>
      </div>
      <div class="d-flex justify-end">
        <v-btn large to="/#portfolio" text color="#47d7c2"
          ><v-icon>mdi-arrow-left-bold</v-icon> VOLVER</v-btn
        >
      </div>
      <div v-if="portfolios[id]" class="container-grid">
        <template v-for="n in portfolios[id].coleccion">
          <v-img
            :key="n.img"
            heigth="100%"
            class="m-3 imagen"
            :src="n.img"
          ></v-img>
        </template>
      </div>
      <div v-else></div>
    </v-container>
  </div>
</template>

<script>
import { mapState } from "vuex";
// import res from "@/assets/1.json";

export default {
  data() {
    return {
      title: "",
      imagenes: [],
      id: ""
    };
  },
  computed: mapState(["portfolios"]),
  mounted() {
    this.id = this.$route.params.id;
    this.$store.dispatch("FETCH_PORTFOLIO");
  }
};
</script>

<style scoped>
.servicio {
  background-color: #535756;
  min-height: 100vh;
  padding-top: 5%;
  padding-bottom: 5%;
}
.btn-cta {
  color: #47d7c2;
}
.titulo {
  font-size: 2em;
  padding-bottom: 10%;
}

.container-grid {
  display: grid;
  grid-template-columns: repeat(2, auto);
  column-gap: 10px;
  margin: 0 1%;
  align-items: center;
}

.imagen {
  margin-top: 10px;
  border: 7px solid white;
}

@media (min-width: 1440px) {
  .container-grid {
    margin: 0 5%;
  }
  .servicio {
    min-height: 50vh;
  }
}

@media (min-width: 1264px) and (max-width: 1400px) {
  .servicio {
    min-height: 50vh;
  }
}

@media (max-width: 800px) {
  .container-grid {
    grid-template-columns: repeat(1, auto);
    column-gap: 10px;
  }
  .titulo {
    padding-top: 15%;
  }
}
</style>
