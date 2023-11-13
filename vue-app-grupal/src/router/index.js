import { createRouter, createWebHashHistory } from 'vue-router'
import InicioView from '../views/InicioView.vue'
import BlogView from '../views/BlogView.vue'
import ContactosView from '../views/ContactosView.vue'
import NosotrosView from '../views/NosotrosView.vue'
import PageNoFoundView from '../views/PageNoFoundView.vue'
import ServiciosView from '../views/ServiciosView.vue'
import 'bootstrap/dist/css/bootstrap.css'

const routes = [
  {
    path: '/',
    name: 'inicio',
    component: InicioView
  },
  {
    path: '/blog',
    name: 'blog',
    component: BlogView
  },
  {
    path: '/contactos',
    name: 'contactos',
    component: ContactosView
  },
  {
    path: '/nosotros',
    name: 'nosotros',
    component: NosotrosView
  },
  {
    path: '/servicios',
    name: 'servicios',
    component: ServiciosView
  },
  {
    path: '/:catchAll(.*)',
    name: 'nofound',
    component: PageNoFoundView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
