import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/hakkimizda',
      name: 'hakkimizda',
      component: () => import('../views/AboutUsView.vue'),
    },
    {
      path: '/vizyonumuz',
      name: 'vizyonumuz',
      component: () => import('../views/OurVisionView.vue'),
    },
    {
      path: '/misyonumuz',
      name: 'misyonumuz',
      component: () => import('../views/OurMissionView.vue'),
    },
    {
      path: '/hizmetlerimiz',
      name: 'hizmetlerimiz',
      component: () => import('../views/OurServicesView.vue'),
    },
    {
      path: '/urunler',
      name: 'urunler',
      component: () => import('../views/ProductsView.vue'),
    },
    {
      path: '/urunler/bataryalar',
      name: 'bataryalar',
      component: () => import('../views/BatteriesView.vue'),
    },
    {
      path: '/projeler',
      name: 'projeler',
      component: () => import('../views/ProjectsView.vue'),
    },
    {
      path: '/iletisim',
      name: 'iletisim',
      component: () => import('../views/ContactView.vue'),
    },
  ],
})

export default router
