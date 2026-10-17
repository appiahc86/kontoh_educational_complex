<script setup>
import { school } from '../data/school'
const year = new Date().getFullYear()
const socials = [
  { key: 'facebook', icon: 'bi-facebook', label: 'Facebook' },
  { key: 'instagram', icon: 'bi-instagram', label: 'Instagram' },
  { key: 'youtube', icon: 'bi-youtube', label: 'YouTube' },
].filter((s) => school.social[s.key])
</script>

<template>
  <footer class="site-footer">
    <div class="kente" aria-hidden="true"></div>
    <div class="container py-5">
      <div class="row g-4">
        <div class="col-lg-5">
          <h2 class="h4 footer-title">{{ school.name }}</h2>
          <p class="mb-3 footer-text">{{ school.motto }}</p>
          <div v-if="socials.length" class="d-flex gap-3">
            <a v-for="s in socials" :key="s.key" :href="school.social[s.key]" :aria-label="s.label" target="_blank" rel="noopener" class="footer-icon">
              <i :class="['bi', s.icon]"></i>
            </a>
          </div>
        </div>
        <div class="col-6 col-lg-3">
          <h3 class="h6 footer-title">Pages</h3>
          <ul class="list-unstyled mb-0">
            <li><RouterLink to="/">Home</RouterLink></li>
            <li><RouterLink to="/about">About</RouterLink></li>
            <li><RouterLink to="/gallery">Gallery</RouterLink></li>
            <li><RouterLink to="/contact">Contact</RouterLink></li>
          </ul>
        </div>
        <div class="col-6 col-lg-4">
          <h3 class="h6 footer-title">Visit or call</h3>
          <address class="mb-2 footer-text">
            <template v-for="(line, i) in school.address" :key="i">{{ line }}<br /></template>
          </address>
          <p class="mb-1"><a :href="`tel:${school.phoneLink}`">{{ school.phone }}</a></p>
          <p class="mb-0"><a :href="`mailto:${school.email}`">{{ school.email }}</a></p>
        </div>
      </div>
      <hr class="footer-rule my-4" />
      <p class="small mb-0 footer-text">&copy; {{ year }} {{ school.name }}. All rights reserved.</p>
    </div>
  </footer>
</template>
