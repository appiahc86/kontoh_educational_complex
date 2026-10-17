<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { school, img } from '../data/school'

const route = useRoute()
const open = ref(false)

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
]

// Close the mobile menu after choosing a page
watch(() => route.fullPath, () => { open.value = false })
</script>

<template>
  <header class="site-header sticky-top">
    <nav class="navbar navbar-expand-md container" aria-label="Main">
      <RouterLink class="navbar-brand d-flex align-items-center gap-2" to="/">
        <img :src="img('logo.png')" alt="" width="44" height="44" class="ps-2" />
        <span class="brand-name">{{ school.name }}</span>
      </RouterLink>

      <button
        class="navbar-toggler"
        type="button"
        :aria-expanded="open"
        aria-controls="main-menu"
        aria-label="Toggle menu"
        @click="open = !open"
      >
        <i :class="open ? 'bi bi-x-lg' : 'bi bi-list'" class="fs-3"></i>
      </button>

      <div id="main-menu" class="collapse navbar-collapse" :class="{ show: open }">
        <ul class="navbar-nav ms-auto align-items-md-center gap-md-1">
          <li v-for="l in links" :key="l.to" class="nav-item">
            <RouterLink class="nav-link" :to="l.to">{{ l.label }}</RouterLink>
          </li>
          <li class="nav-item ms-2 mt-2 mt-md-0">
            <RouterLink class="btn btn-gold" to="/contact">Enquire now</RouterLink>
          </li>
        </ul>
      </div>
    </nav>
    <div class="kente" aria-hidden="true"></div>
  </header>
</template>
