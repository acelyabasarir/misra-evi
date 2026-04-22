import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PoemsView from '../views/PoemsView.vue'
import PoemDetailView from '../views/PoemDetailView.vue'
import AboutView from '../views/AboutView.vue'

const routes = [
  {
    path: '/',
    component: HomeView
  },
  {
    path: '/siirler',
    component: PoemsView
  },
  {
    path: '/siirler/:slug',
    component: PoemDetailView
  },
  {
    path: '/hakkinda',
    component: AboutView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router