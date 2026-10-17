<script setup>
import HeroCarousel from '../components/HeroCarousel.vue'
import { school, levels, reasons, carousel, img } from '../data/school'
</script>

<template>
  <!-- Hero -->
  <section class="hero">
    <div class="container">
      <div class="row align-items-center g-5">
        <div class="col-lg-6">
          <h1 class="hero-title anim-rise" style="--d: 0ms">{{ school.motto }}</h1>
          <p class="lead hero-lead anim-rise" style="--d: 120ms">
            {{ school.name }} teaches children from nursery to junior high school, with caring teachers and a
            curriculum built to prepare them for the BECE and beyond.
          </p>
          <div class="d-flex flex-wrap gap-3 anim-rise" style="--d: 240ms">
            <RouterLink class="btn btn-gold btn-lg" to="/contact">Enquire about admission</RouterLink>
            <RouterLink class="btn btn-outline-light btn-lg" to="/about">About the school</RouterLink>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="hero-photo anim-photo">
            <img :src="img('hero.jpeg')" alt="Pupils of Kontoh Educational Complex on the school compound" />
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Slideshow -->
  <section class="carousel-section">
    <div class="container">
      <div v-reveal>
        <HeroCarousel :slides="carousel" />
      </div>
    </div>
  </section>

  <!-- Levels -->
  <section class="section">
    <div class="container">
      <div class="row g-5">
        <div class="col-lg-4">
          <h2 v-reveal class="section-title">From first day to BECE</h2>
          <p v-reveal="100" class="text-muted-ink">
            Children can start with us as toddlers and stay until they are ready for senior high school.
          </p>
        </div>
        <div class="col-lg-8">
          <ul class="level-list list-unstyled mb-0">
            <li v-for="(l, i) in levels" :key="l.name" v-reveal="i * 90" class="level-row">
              <div class="level-head">
                <h3 class="h5 mb-0">{{ l.name }}</h3>
                <span class="level-ages">{{ l.ages }}</span>
              </div>
              <p class="mb-0">{{ l.text }}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- Why us -->
  <section class="section section-tint">
    <div class="container">
      <h2 v-reveal class="section-title mb-5">Why families choose Kontoh</h2>
      <div class="row g-4">
        <div v-for="(r, i) in reasons" :key="r.title" v-reveal="(i % 2) * 100" class="col-md-6">
          <div class="reason">
            <i :class="['bi', r.icon, 'reason-icon']" aria-hidden="true"></i>
            <div>
              <h3 class="h5">{{ r.title }}</h3>
              <p class="mb-0">{{ r.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Headteacher's message -->
  <section class="section">
    <div class="container">
      <div class="row align-items-center g-5">
        <div class="col-md-5 col-lg-4">
          <img v-reveal class="portrait" :src="img('headteacher.jpg')" alt="The headteacher" />
        </div>
        <div class="col-md-7 col-lg-8">
          <h2 v-reveal class="section-title">A word from the headteacher</h2>
          <blockquote v-reveal="120" class="message">
            <p>
              Every child who walks through our gate carries the hopes of a family. Our job is to match that
              hope with good teaching, firm guidance and a lot of care. Come and see the school for yourself.
            </p>
            <footer>Mr Emmanuel Essien, Headteacher</footer>
          </blockquote>
        </div>
      </div>
    </div>
  </section>

  <!-- Call to action -->
  <section class="cta-band">
    <div v-reveal class="container d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-4">
      <div>
        <h2 class="h3 mb-1">Admission is open</h2>
        <p class="mb-0">Call, message or visit the school to ask about places and fees.</p>
      </div>
      <div class="d-flex flex-wrap gap-3">
        <a class="btn btn-dark btn-lg" :href="`tel:${school.phoneLink}`"><i class="bi bi-telephone me-2"></i>Call the school</a>
        <RouterLink class="btn btn-outline-dark btn-lg" to="/contact">Send an enquiry</RouterLink>
      </div>
    </div>
  </section>
</template>
