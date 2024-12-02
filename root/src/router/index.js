import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

import PresentationGustavo from 'Gustavo/PresentationGustavo'
import PresentationAnderson from 'Anderson/PresentationAnderson'
import PresentationCamilo from 'Camilo/PresentationCamilo'
import PresentationMellisa from 'Mellisa/PresentationMellisa'
import PresentationCristian from 'Cristian/PresentationCristian'
import PresentationJavier from 'Javier/PresentationJavier'
import PresentationDeison from 'Deison/PresentationDeison'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/gustavo', name: 'gustavo', component: PresentationGustavo },
  { path: '/anderson', name: 'anderson', component: PresentationAnderson },
  { path: '/camilo', name: 'camilo', component: PresentationCamilo },
  { path: '/mellisa', name: 'mellisa', component: PresentationMellisa },
  { path: '/cristian', name: 'cristian', component: PresentationCristian },
  { path: '/javier', name: 'javier', component: PresentationJavier },
  { path: '/deison', name: 'deison', component: PresentationDeison },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;