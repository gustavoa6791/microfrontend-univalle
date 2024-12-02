import { createApp } from "vue";

import "./index.scss";

// Vuetify
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'; 
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'; 

import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import App from "./App.vue";
import router from "./router/index.js";

const vuetify = createVuetify({
    components,
    directives,
    icons: {
      defaultSet: 'mdi', 
      aliases,
      sets: {
        mdi,
      },
    },
  })
  
  createApp(App)
  .use(vuetify)
  .use(router)
  .mount('#app')