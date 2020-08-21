<template>
  <div class="servicio">
    <v-container fluid>
      <div class="text-center titulo">
        <h2 class="white--text font-weight-light">{{ title }}</h2>
      </div>
      <div class="d-flex justify-end">
        <v-btn large to="/#portfolio" text color="#47d7c2"
          ><v-icon>mdi-arrow-left-bold</v-icon> VOLVER</v-btn
        >
      </div>
      <div class="container-grid">
        <template v-for="n in imagenes">
          <v-img
            :key="n.img"
            heigth="100%"
            class="m-3 d-inline-block imagen"
            :src="n.img"
          ></v-img>
        </template>
      </div>
    </v-container>
  </div>
</template>

<script>
import { mapState } from "vuex";
// import res from "@/assets/1.json";

export default {
  data() {
    return {
      title: "Sesión no encontrada",
      imagenes: []
    };
  },
  computed: mapState(["portfolio"]),

  created() {
    this.$http.get(`/storage/data/${this.$route.params.id}.json`).then(res => {
      this.title = res.data.title;
      this.imagenes = res.data.imagenes;
    });
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
  column-count: 2;
  column-gap: 10px;
}

.imagen {
  margin-top: 10px;
  border: 7px solid white;
}

@media (max-width: 800px) {
  .container-grid {
    column-count: 1;
    column-gap: 10px;
  }
  .titulo {
    padding-top: 15%;
  }
}
</style>
