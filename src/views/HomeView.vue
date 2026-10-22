<script setup>
import HeroCarousel from '../components/HeroCarousel.vue'
import { school, levels, reasons, values, facilities, leaders, carousel, gallery, mapSrc, img } from '../data/school'

const by = (cat) => gallery.filter((g) => g.category === cat)
const early = [...by('Classroom'), ...by('Campus')]
const primary = by('Sports').concat(by('Classroom').slice(0, 1))
const jhs = by('Events')
const ring = [reasons.slice(0, 2), reasons.slice(2, 4)]
</script>

<template>
  <!-- Hero slider -->
  <section id="home" class="hero-slider"><HeroCarousel :slides="carousel" /></section>

  <!-- At a glance -->
  <section class="glance">
    <div class="container">
      <h2 v-reveal class="ls-title">The most important things at a glance</h2>
      <div class="row align-items-center g-4 mt-2">
        <div v-for="(col, ci) in ring" :key="ci" class="col-md-4" :class="ci === 1 ? 'order-md-3' : 'order-md-1'">
          <div v-for="r in col" :key="r.title" v-reveal class="glance-item" :class="{ right: ci === 1 }">
            <i :class="['bi', r.icon]" aria-hidden="true"></i>
            <div><strong>{{ r.title }}</strong><span>{{ r.text }}</span></div>
          </div>
        </div>
        <div class="col-md-4 order-md-2 text-center"><i class="bi bi-bank2 glance-centre" aria-hidden="true"></i></div>
      </div>
      <div class="text-center mt-5"><RouterLink class="btn btn-pill" to="/about">More about this</RouterLink></div>
    </div>
  </section>

  <!-- Early years (teal) -->
  <section id="early-years" class="split split-teal">
    <div class="split-slider"><HeroCarousel :slides="early" :interval="6500" /></div>
    <div class="split-panel">
      <h2>{{ levels[0].name }} &amp; {{ levels[1].name }}</h2>
      <p>{{ levels[0].text }}</p>
      <p>{{ levels[1].text }}</p>
    </div>
  </section>
  <div class="band band-teal">
    <div class="band-info">
      <div><h4>Address</h4><p><template v-for="(l, i) in school.address" :key="i">{{ l }}<br /></template></p><h4>E-mail</h4><p>{{ school.email }}</p></div>
      <div><h4>Phone</h4><p>{{ school.phone }}</p><h4>Hours</h4><p v-for="h in school.hours" :key="h.days">{{ h.days }}: {{ h.time }}</p></div>
    </div>
    <iframe class="band-map" :src="mapSrc" title="Map showing the school's location" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div>

  <!-- Primary (red) -->
  <section id="primary" class="split split-red">
    <div class="split-slider"><HeroCarousel :slides="primary" :interval="7000" /></div>
    <div class="split-panel">
      <h2>{{ levels[2].name }}</h2>
      <p>{{ levels[2].text }}</p>
    </div>
  </section>
  <div class="band band-red">
    <div class="band-info">
      <div><h4>Classes</h4><p>{{ levels[2].ages }}</p></div>
      <div><h4>Curriculum</h4><p>Ghana Education Service</p></div>
    </div>
    <img class="band-img" :src="img('g6.jpeg')" alt="The school compound" loading="lazy" />
  </div>

  <!-- JHS (red) -->
  <section id="jhs" class="split split-red">
    <div class="split-slider"><HeroCarousel :slides="jhs" :interval="7500" /></div>
    <div class="split-panel">
      <h2>{{ levels[3].name }}</h2>
      <p>{{ levels[3].text }}</p>
      <RouterLink class="btn btn-pill btn-pill-light" to="/contact">Enquire about admission</RouterLink>
    </div>
  </section>
  <div class="band band-red">
    <div class="band-info">
      <div><h4>Classes</h4><p>{{ levels[3].ages }}</p></div>
      <div><h4>Exam</h4><p>BECE</p></div>
    </div>
    <img class="band-img" :src="img('g6.jpeg')" alt="Graduation ceremony" loading="lazy" />
  </div>

  <!-- Parents: photo left, text right -->
  <section id="parents" class="feature">
    <img :src="img('about.jpg')" alt="Pupils and teachers at the school" loading="lazy" />
    <div class="feature-text">
      <h2>Parent information</h2>
      <p>Call, message or visit the school to ask about places and fees. {{ school.motto }}</p>
      <a class="btn btn-pill mb-2" :href="`tel:${school.phoneLink}`">Call the school</a>
      <RouterLink class="btn btn-pill mb-2 ms-2" to="/contact">More on this</RouterLink>
    </div>
  </section>

  <!-- Facilities: text left with icon list, photo right -->
  <section id="facilities" class="feature feature-rev">
    <div class="feature-text">
      <h2>Our facilities</h2>
      <h3 class="sub">Everything a child needs to learn well</h3>
      <ul class="icon-list">
        <li v-for="f in facilities" :key="f"><i class="bi bi-check2-circle" aria-hidden="true"></i>{{ f }}</li>
      </ul>
      <RouterLink class="btn btn-pill" to="/about">More on this</RouterLink>
    </div>
    <img :src="img('g7.jpeg')" alt="The front of the school building" loading="lazy" />
  </section>

  <!-- Headteacher: photo left, text right -->
  <section class="feature">
    <img :src="img('headteacher.jpg')" alt="The headteacher" loading="lazy" />
    <div class="feature-text">
      <h2>A word from the headteacher</h2>
      <h3 class="sub">{{ leaders[0].name }}</h3>
      <p>Every child who walks through our gate carries the hopes of a family. Our job is to match that hope with good teaching, firm guidance and a lot of care. Come and see the school for yourself.</p>
      <ul class="icon-list"><li v-for="l in leaders.slice(1)" :key="l.name"><i class="bi bi-person" aria-hidden="true"></i>{{ l.name }}, {{ l.role }}</li></ul>
    </div>
  </section>

  <!-- Gallery band (light blue) -->
  <section class="band-blue">
    <div class="container">
      <h2 v-reveal class="ls-title text-start">Life at school</h2>
      <div class="thumb-row">
        <img v-for="g in gallery.slice(0, 4)" :key="g.file" :src="img(g.file)" :alt="g.alt" loading="lazy" />
      </div>
      <RouterLink class="btn btn-pill mt-4" to="/gallery">More on this</RouterLink>
    </div>
  </section>

  <!-- Values (partners style) -->
  <section class="values">
    <div class="container">
      <h2 v-reveal class="ls-title text-start">Our values</h2>
      <div class="row g-4 mt-1">
        <div v-for="(v, i) in values" :key="v.title" v-reveal="i * 80" class="col-6 col-lg-3 text-center">
          <span class="value-badge"><i :class="['bi', v.icon]" aria-hidden="true"></i></span>
          <h3 class="h6 mt-3">{{ v.title }}</h3>
          <p class="mx-auto">{{ v.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
