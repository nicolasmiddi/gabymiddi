<template>
  <div class="home d-flex justify-between align-items align-center">
    <div class="container">
      <v-row class="">
        <v-col cols="12" md="6" class="white--text">
          <v-img :src="info_general.img_banner"> </v-img>
        </v-col>
        <v-col
          cols="12"
          md="6"
          class="d-flex align-center white--text"
          order-md="first"
        >
          <div class="d-flex flex-column">
            <h1 class="bio d-inline-block">¡Hola! Soy Gaby Middi</h1>
            <p
              class="bio mt-1 mb-5 d-inline-block font-weight-light subtitle-1"
              v-html="info_general.bio"
            ></p>
            <v-btn title="ver portfolio" rel="nofollow" to="#portfolio" outlined color="#47d7c2" class="mt-7 btn-cta"
              >Ver mi portfolio
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: mapState(["info_general"])
};
</script>

<style scoped>
.home {
  background-color: #535756;
  min-height: 100vh;
}
.btn-cta {
  color: #47d7c2;
  width: 50%;
}
@media (max-width: 800px) {
  .container {
    padding-left: 60px;
    padding-right: 60px;
  }
  .btn-cta {
    width: 100%;
  }
  .bio {
    text-align: center;
  }
}
</style>
