import { createRouter, createWebHistory } from 'vue-router';
import EstimationView from '../views/EstimationView.vue';

const routes = [
  {
    path: '/',
    name: 'Estimation',
    component: EstimationView
  }
];

const router = createRouter({
  history: createWebHistory('/estimation-app/'), 
  routes
});

export default router;
