<template>
  <div class="servicio container">
    <div class="text-center titulo">
      <h2 class="font-weight-light">Mis servicios</h2>
    </div>
    <div class="d-flex justify-between align-items align-center">
      <v-row class="">
        <template v-for="s in servicios">
          <v-col :key="s.icon" cols="12" md="4" class="text-center px-5">
            <v-avatar outlined color="teal" size="100"
              ><v-icon color="white" large>
                {{ s.icon }}
              </v-icon></v-avatar
            >
            <h3 class="my-7 d-block font-weight-bold">{{ s.title }}</h3>
            <p class="text-justify" v-text="s.text"></p>
          </v-col>
        </template>
      </v-row>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: mapState(["servicios"])
};
</script>

<style scoped>
.servicio {
  background-color: white;
  min-height: 100vh;
  padding-top: 7%;
  padding-bottom: 5%;
}
.btn-cta {
  color: #47d7c2;
}
.titulo {
  font-size: 2em;
  padding-bottom: 10%;
}
.icono--servicio {
  font-size: 100px;
}

@media (min-width: 1440px) {
  .servicio {
    min-height: 50vh;
  }
}

@media (min-width: 1264px) and (max-width: 1400px) {
  .servicio {
    min-height: 50vh;
  }
}
</style>
