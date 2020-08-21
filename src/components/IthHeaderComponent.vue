<template>
  <div>
    <v-app-bar app clipped-left class="elevation-0" color="#535756">
      <router-link style="text-decoration: none;" to="/">
        <span class="title ml-3 mr-5 white--text"
          >Gabriela Middi &nbsp;<span class="font-weight-light"
            >Fotografía</span
          ></span
        >
      </router-link>
      <v-spacer></v-spacer>

      <template v-for="i in items">
        <!-- <a :key="i.link" style="text-decoration: none;" :href="i.link"> -->
        <router-link :key="i.link" style="text-decoration: none;" :to="i.link">
          <span
            :key="i + 1"
            style="color: #47d7c2;"
            class="d-none d-md-flex d-lg-flex d-xl-flex mr-3"
          >
            {{ i.text }}
          </span>
        </router-link>
        <!-- </a> -->
      </template>

      

      <v-app-bar-nav-icon
        class="d-lg-none d-xl-flex"
        color="#47D7C2"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app right color="#535756">
      <v-list dense>
        <template v-for="(item, i) in items">
          <v-list-item :key="i" link>
            <v-list-item-content>
              <router-link style="text-decoration: none;" :to="item.link">
                <v-list-item-title
                  class="body-1 font-weight-light"
                  style="color: #47d7c2;"
                >
                  {{ item.text }}
                </v-list-item-title>
              </router-link>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    items: [
      { text: "Home", link: "/#home" },
      { text: "Servicios", link: "/#servicios" },
      { text: "Portfolio", link: "/#portfolio" },
      { text: "Contacto", link: "/#contacto" }
    ]
  })
};
</script>

<style>
#keep .v-navigation-drawer__border {
  display: none;
}
</style>
