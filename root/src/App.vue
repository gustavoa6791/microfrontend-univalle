<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  components: {},

  data: () => ({
    drawer: true,
    group: null,
    items: [
  
      {
        title: 'Camilo Presentation',
        value: 'PresentationCamilo',
        route: '/camilo',
      },
      {
        title: 'Deison Presentation',
        value: 'PresentationDeison',
        route: '/deison',
      },
      {
        title: 'Mellisa Presentation',
        value: 'PresentationMellisa',
        route: '/mellisa',
      },
      {
        title: 'Javier Presentation',
        value: 'PresentationJavier',
        route: '/javier',
      },
      {
        title: 'Gustavo Presentation',
        value: 'PresentationGustavo',
        route: '/gustavo',
      },
      {
        title: 'Cristian Presentation',
        value: 'PresentationCristian',
        route: '/cristian',
      },
      {
        title: 'Anderson Presentation',
        value: 'PresentationAnderson',
        route: '/anderson',
      },
    ],
  }),

  watch: {
    group() {
      this.drawer = false
    },
  },

});
</script>

<template>

  <v-card>
    <v-layout>
      <v-app-bar color="primary" prominent>
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title>MICRO FRONTEND PRESENTATION</v-toolbar-title>

        <v-spacer></v-spacer>

        <template v-if="$vuetify.display.mdAndUp">
          <v-btn icon="mdi-magnify" variant="text"></v-btn>

          <v-btn icon="mdi-filter" variant="text"></v-btn>
        </template>

        <v-btn icon="mdi-dots-vertical" variant="text"></v-btn>
      </v-app-bar>

      <v-navigation-drawer permanent>
        <v-list>

          <v-list-item v-for="item in items" :key="item.value" :to="item.route" router>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>

        </v-list>
      </v-navigation-drawer>

      <v-main style="height: 100vh;">
        <v-card-text>
          <router-view></router-view>
        </v-card-text>
      </v-main>
    </v-layout>
  </v-card>
</template>
