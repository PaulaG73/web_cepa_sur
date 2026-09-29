import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store'
import LandingView from '@/views/LandingView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: LandingView,
    meta: { locale: 'es' }
  },
  {
    path: '/es',
    name: 'es',
    component: LandingView,
    meta: { locale: 'es' }
  },
  {
    path: '/en',
    name: 'en',
    component: LandingView,
    meta: { locale: 'en' }
  },
  {
    path: '/pt',
    name: 'pt',
    component: LandingView,
    meta: { locale: 'pt' }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        top: 88,
        behavior: 'smooth'
      }
    }
    if (savedPosition) return savedPosition
    if (from.path !== to.path) {
      return { top: 0 }
    }
    return false
  }
})

router.beforeEach((to) => {
  const saved = store.getters.locale
  if (to.path === '/' && saved && saved !== 'es') {
    return { path: `/${saved}`, hash: to.hash, replace: true }
  }
  if (to.meta.locale) {
    store.commit('SET_LOCALE', to.meta.locale)
  }
  return true
})

export default router
