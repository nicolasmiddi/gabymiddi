<template>
  <v-app>
    <ith-header-component />
    <ith-whatsapp-component />
    <transition>
      <router-view></router-view>
    </transition>
    <ith-footer-component />
  </v-app>
</template>

<script>
import IthHeaderComponent from "@/components/IthHeaderComponent.vue";
import IthWhatsappComponent from "@/components/IthWhatsappComponent.vue";
import IthFooterComponent from "@/components/IthFooterComponent.vue";

export default {
  components: {
    IthHeaderComponent,
    IthWhatsappComponent,
    IthFooterComponent
  }
};
</script>
