<template>
  <v-col cols="12" class="">
    <v-card width="700" elevation="0">
      <v-container>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-row>
            <v-col cols="12">
              <v-text-field
                v-model="datos.name"
                counter="50"
                label="Nombre"
              ></v-text-field>
            </v-col>

            <v-col cols="12">
              <v-text-field
                v-model="datos.email"
                counter="50"
                label="Correo"
              ></v-text-field>
            </v-col>

            <v-col cols="12">
              <v-text-field
                v-model="datos.telefono"
                :counter="50"
                label="Telefono"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="12">
              <v-textarea
                v-model="datos.comentarios"
                label="Mensaje"
                :counter="2500"
                outlined
              ></v-textarea>
            </v-col>

            <v-col cols="12">
              <v-btn
                aria-label="send"
                x-large
                block
                outlined
                color="#47d7c2"
                @click="enviarForm()"
                >Enviar</v-btn
              >
            </v-col>
            <v-snackbar
              v-model="snackbar"
              top
              right
              :timeout="5000"
              :color="color"
            >
              {{ text }}
              <v-btn
                aria-label="Close"
                :color="color"
                small
                dark
                elevation="0"
                @click="snackbar = false"
              >
                <v-icon small>mdi-close</v-icon>
              </v-btn>
            </v-snackbar>
          </v-row>
        </v-form>
      </v-container>
    </v-card>
  </v-col>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    datos: { pregunta: '', name: '', email: '', telefono: '', comentarios: '' },

    color: 'green',
    snackbar: false,
    text: '',
  }),
}
</script>
