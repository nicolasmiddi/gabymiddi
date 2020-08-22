<template>
  <div class="servicio">
    <div class="container">
      <div class="text-center titulo">
        <h2 class="font-weight-light">Contactame</h2>
      </div>

      <v-row class="">
        <v-col cols="12" md="6" class="">
          <v-card elevation="0">
            <div>
              <v-subheader>Encontrame en </v-subheader>
              <div
                class="d-flex justify-start mt-8"
                v-for="(item, i) in rrss"
                :key="i"
              >
                <a
                  rel="noreferrer"
                  target="_blank"
                  style="text-decoration: none;"
                  :href="item.href"
                >
                  <v-icon :color="item.color" v-text="item.icon"></v-icon>
                  <span
                    class="pl-4"
                    :class="item.textcolor"
                    v-text="item.text"
                  ></span>
                </a>
              </div>
            </div>
          </v-card>
        </v-col>
        <v-col cols="12" md="6" class="">
          <v-card elevation="0">
            <ith-formulario-component />
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import IthFormularioComponent from "@/components/IthFormularioComponent.vue";

export default {
  components: {
    IthFormularioComponent
  },
  computed: mapState(["rrss"])
};
</script>

<style scoped>
.servicio {
  min-height: 100vh;
  padding-top: 5%;
  padding-bottom: 5%;
}
.btn-cta {
  color: #47d7c2;
}
.titulo {
  font-size: 2em;
}
</style>
