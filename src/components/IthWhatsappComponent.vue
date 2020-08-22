<template>
  <div>
    <v-fab-transition>
      <v-btn
        fab
        large
        dark
        bottom
        right
        fixed
        rel="noreferrer"
        title="whatsapp"
        class="success"
        :href="`https://wa.me/${phone}`"
        target="_blank"
        style="text-decoration: none;"
      >
        <v-icon>mdi-whatsapp</v-icon>
      </v-btn>
    </v-fab-transition>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: mapState(['phone']),
}
</script>
