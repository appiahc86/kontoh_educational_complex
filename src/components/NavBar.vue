<script setup>
import { ref, watch, nextTick } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { school, img } from '../data/school'
import { useScrollspy } from '../composables/useScrollspy'

const route = useRoute()
const router = useRouter()
const open = ref(false)

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'early-years', label: 'Early years' },
  { id: 'primary', label: 'Primary' },
  { id: 'jhs', label: 'Junior high' },
  { id: 'parents', label: 'Parents' },
  { id: 'facilities', label: 'Facilities' },
]
const pages = [
  { to: '/about', label: 'About us' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
]
const { active } = useScrollspy(sections.map((s) => s.id))

function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' })
}
async function goSection(id) {
  open.value = false
  if (route.name !== 'home') { await router.push('/'); await nextTick(); setTimeout(() => scrollTo(id), 60) }
  else scrollTo(id)
}
watch(() => route.fullPath, () => { open.value = false })
</script>

<template>
  <header class="site-header sticky-top">
    <nav class="navbar navbar-expand-lg container-fluid px-lg-4" aria-label="Main">
      <RouterLink class="navbar-brand d-flex align-items-center gap-2" to="/" @click="route.name === 'home' && goSection('home')">
        <img :src="img('logo.png')" alt="" width="44" height="44" />
        <span class="brand-name">{{ school.name }}</span>
      </RouterLink>
      <button class="navbar-toggler" type="button" :aria-expanded="open" aria-controls="main-menu" aria-label="Toggle menu" @click="open = !open">
        <i :class="open ? 'bi bi-x-lg' : 'bi bi-list'" class="fs-3"></i>
      </button>
      <div id="main-menu" class="collapse navbar-collapse" :class="{ show: open }">
        <ul class="navbar-nav ms-auto align-items-lg-center">
          <li v-for="s in sections" :key="s.id" class="nav-item">
            <a class="nav-link" :class="{ 'is-active': route.name === 'home' && active === s.id }" :href="`#${s.id}`" @click.prevent="goSection(s.id)">{{ s.label }}</a>
          </li>
          <li v-for="p in pages" :key="p.to" class="nav-item">
            <RouterLink class="nav-link" :to="p.to">{{ p.label }}</RouterLink>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>
