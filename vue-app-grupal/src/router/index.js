import { createRouter, createWebHashHistory } from 'vue-router'
import InicioComponent from '../components/Inicio.vue'
import BlogComponent from '../components/Blog.vue'
import ContactosComponent from '../components/Contactos.vue'
import NosotrosComponent from '../components/Nosotros.vue'
import PageNoFoundComponent from '../components/PageNoFound.vue'
import ServiciosComponent from '../components/Servicios.vue'
import 'bootstrap/dist/css/bootstrap.css'

const routes = [
  {
    path: '/',
    name: 'inicio',
    component: InicioComponent
  },
  {
    path: '/blog',
    name: 'blog',
    component: BlogComponent
  },
  {
    path: '/contactos',
    name: 'contactos',
    component: ContactosComponent
  },
  {
    path: '/nosotros',
    name: 'nosotros',
    component: NosotrosComponent
  },
  {
    path: '/servicios',
    name: 'servicios',
    component: ServiciosComponent
  },
  {
    path: '/:catchAll(.*)',
    name: 'nofound',
    component: PageNoFoundComponent
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
