<script setup>
import PageHeader from '../components/PageHeader.vue'
import { school, values, facilities, img } from '../data/school'
</script>

<template>
  <PageHeader
    title="About us"
    :lead="`${school.name} is a private school committed to academic excellence through focus education, service, fostering intellectual curiosity, self-directed learning, and the individual development of each child.`"
  />

  <!-- Story -->
  <section class="section">
    <div class="container">
      <div class="row g-5 align-items-center">
        <div class="col-lg-6">
          <h2 v-reveal class="section-title">Our story</h2>
          <!--  history of the school -->
          <p v-reveal="80">
            {{ school.name }} , Ghana was founded by Mr. Nat Kontoh upon his return
            from the USA. Mr. Nat Kontoh had come to Ghana after having spent six
            years studying and living in the UK. Mr. Kontoh acquired land at Ekyem,
            Kumasi, upon entering the community, he saw that there was no school
            in the community and its surrounding which makes it difficult for the
            children to access education. Having difficulties finding a school that
            in their view was a good fit for children within the community and beyond.
            He decides to start one himself.

          </p>
          <p v-reveal="160">
            {{ school.name }} (KEC) formally opened its doors to the public
            with six students in January 2014. KEC now has over 250 students from
            preschool through primary, we pride ourselves in our rich cultural
            diversity with our student body consisting of learners from more
            than two different nationalities. A student learning environment is
            important and KEC provides the perfect environment with our
            beneficial 5-acre campus outfitted with sizeable classrooms,
            well-stocked computer labs, and many other facilities.
          </p>
        </div>
        <div class="col-lg-6">
          <img v-reveal="120" class="img-fluid rounded-img" :src="img('web/campus-entrance.webp')" alt="School entrance, buildings and landscaped courtyard" />
        </div>
      </div>
    </div>
  </section>

  <!-- Mission and vision -->
  <section class="section section-tint">
    <div class="container">
      <div class="row g-5">
        <div v-reveal class="col-md-6">
          <h2 class="h3">Our mission</h2>
          <p class="mb-0">
            We co-create the future of education by uniting and empowering our
            community. We do this through thought leadership, research, creation
            and curation of resources, and direct collaboration with education
            leaders.
          </p>
        </div>
        <div v-reveal="120" class="col-md-6">
          <h2 class="h3">Our vision</h2>
          <p class="mb-0">
            All learners find pathways to success through the independence,
            innovation, and diversity of our schools, creating a more
            equitable world.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Values -->
  <section class="section">
    <div class="container">
      <h2 v-reveal class="section-title mb-5">What we stand for</h2>
      <div class="row g-4">
        <div v-for="(v, i) in values" :key="v.title" v-reveal="i * 90" class="col-sm-6 col-lg-3">
          <i :class="['bi', v.icon, 'value-icon']" aria-hidden="true"></i>
          <h3 class="h5 mt-3">{{ v.title }}</h3>
          <p class="mb-0">{{ v.text }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Facilities -->
  <section class="section section-tint">
    <div class="container">
      <div class="row g-5 align-items-center">
        <div class="col-lg-5">
          <h2 v-reveal class="section-title">Our facilities</h2>
          <p v-reveal="80">A safe and comfortable place makes learning easier. Here is what children find on our campus.</p>
        </div>
        <div class="col-lg-7">
          <ul class="facility-list list-unstyled mb-0">
            <li v-for="(f, i) in facilities" :key="f" v-reveal="i * 70">
              <i class="bi bi-check-circle-fill" aria-hidden="true"></i>{{ f }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <section class="cta-band">
    <div v-reveal class="container d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-4">
      <div>
        <h2 class="h3 mb-1">Come and see the school</h2>
        <p class="mb-0">We welcome parents to visit, meet the teachers and tour the campus.</p>
      </div>
      <RouterLink class="btn btn-dark btn-lg" to="/contact">Plan a visit</RouterLink>
    </div>
  </section>
</template>
