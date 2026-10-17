import { createRouter, createWebHashHistory } from 'vue-router'
import { school } from './data/school'

const routes = [
  { path: '/', name: 'home', component: () => import('./views/HomeView.vue'), meta: { title: 'Home' } },
  { path: '/about', name: 'about', component: () => import('./views/AboutView.vue'), meta: { title: 'About us' } },
  { path: '/gallery', name: 'gallery', component: () => import('./views/GalleryView.vue'), meta: { title: 'Gallery' } },
  { path: '/contact', name: 'contact', component: () => import('./views/ContactView.vue'), meta: { title: 'Contact' } },
  { path: '/:pathMatch(.*)*', redirect: '/' },
]

// Hash history (#/about) means the site works on any static host with no server rules.
const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior: () => ({ top: 0 }),
})

router.afterEach((to) => {
  document.title = to.name === 'home' ? school.name : `${to.meta.title} | ${school.name}`
})

export default router
