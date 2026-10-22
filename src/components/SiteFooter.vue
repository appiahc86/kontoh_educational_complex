<script setup>
import { school, img } from '../data/school'
const year = new Date().getFullYear()
const socials = [
  { key: 'facebook', label: 'Facebook' },
  { key: 'instagram', label: 'Instagram' },
  { key: 'youtube', label: 'YouTube' },
].filter((s) => school.social[s.key])
</script>

<template>
  <footer class="site-footer">
    <div class="container-fluid px-lg-5 py-5">
      <div class="row g-4">
        <div class="col-md-3">
          <ul class="list-unstyled foot-links">
            <li v-for="s in socials" :key="s.key"><a :href="school.social[s.key]" target="_blank" rel="noopener">{{ s.label }}</a></li>
            <li><RouterLink to="/about">About us</RouterLink></li>
            <li><RouterLink to="/gallery">Gallery</RouterLink></li>
            <li><RouterLink to="/contact">Contact</RouterLink></li>
          </ul>
        </div>
        <div class="col-md-5">
          <h4>School</h4>
          <p class="fw-bold">{{ school.name }}</p>
          <h4>Address</h4>
          <p><template v-for="(l, i) in school.address" :key="i">{{ l }}<br /></template></p>
          <h4>E-mail</h4>
          <p><a :href="`mailto:${school.email}`">{{ school.email }}</a></p>
          <h4>Phone</h4>
          <p><a :href="`tel:${school.phoneLink}`">{{ school.phone }}</a></p>
        </div>
        <div class="col-md-4"><h4>{{ school.shortName }}</h4><img :src="img('logo.png')" alt="" width="90" height="90" /></div>
      </div>
    </div>
    <p class="copy">&copy; {{ year }} {{ school.name }}. All rights reserved.</p>
  </footer>
</template>
