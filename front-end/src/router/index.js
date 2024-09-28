import { createRouter, createWebHistory } from 'vue-router';
import MenuView from '@/views/menu/MenuView.vue';
import MapView from '@/views//map/MapView.vue';

const routes = [
  {
    path: '/',
    name: 'menu',
    component: MenuView,
  },
  {
    path: '/map',
    name: 'map',
    component: MapView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
