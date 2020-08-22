<template>
  <div class="servicio">
    <div class="container">
      <div class="text-center titulo">
        <h2 class="white--text font-weight-light">Mi portfolio</h2>
      </div>

      <v-row class="">
        <template v-for="n in portfolios">
          <v-col :key="n.id" cols="6" md="4" class="white--text">
            <router-link
              :title="n.title"
              style="text-decoration: none;"
              :to="`/portfolio/${n.id}`"
            >
              <v-card>
                <v-img class="thumbnail" :src="n.thumbnail"></v-img>
                <v-card-text class="text-center font-weight-light">
                  {{ n.title }}
                </v-card-text>
              </v-card>
            </router-link>
          </v-col>
        </template>
      </v-row>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: mapState(["portfolios"])
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
.thumbnail {
  height: 250px;
}

@media (max-width: 800px) {
  .thumbnail {
    height: 170px;
  }
  .v-card__text {
    padding: 0.5em;
  }
}
</style>
