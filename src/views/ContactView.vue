<script setup>
import { reactive, ref, computed } from 'vue'
import PageHeader from '../components/PageHeader.vue'
import { school } from '../data/school'

const form = reactive({ name: '', phone: '', email: '', topic: 'Admission', message: '' })
const validated = ref(false)
const sent = ref(false)

const topics = ['Admission', 'Fees', 'Visiting the school', 'Other']

const mapSrc = computed(
  () => `https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15849.207601042497!2d-1.5268119!3d6.7329742!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2ae587e970de1f09!2sKONTOH%20EDUCATIONAL%20COMPLEX!5e0!3m2!1sen!2sgh!4v1672112108043!5m2!1sen!2sgh?q=${encodeURIComponent(school.mapQuery)}&output=embed`,
)

// The site is static (no server), so the form opens the visitor's email app
// with the message filled in, addressed to the school.
function submit(e) {
  validated.value = true
  if (!e.target.checkValidity()) return
  const subject = `${form.topic} enquiry from ${form.name}`
  const body = `${form.message}\n\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}`
  window.location.href = `mailto:${school.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  sent.value = true
}
</script>

<template>
  <PageHeader title="Contact us" lead="Ask about admission, fees or a visit. We are happy to help." />

  <section class="section">
    <div class="container">
      <div class="row g-5">
        <!-- Details -->
        <div v-reveal class="col-lg-5">
          <h2 class="h4 mb-4">Reach the school</h2>

          <ul class="contact-list list-unstyled">
            <li>
              <i class="bi bi-geo-alt" aria-hidden="true"></i>
              <address class="mb-0">
                <template v-for="(line, i) in school.address" :key="i">{{ line }}<br v-if="i < school.address.length - 1" /></template>
              </address>
            </li>
            <li>
              <i class="bi bi-telephone" aria-hidden="true"></i>
              <a :href="`tel:${school.phoneLink}`">{{ school.phone }}</a>
            </li>
            <li>
              <i class="bi bi-envelope" aria-hidden="true"></i>
              <a :href="`mailto:${school.email}`">{{ school.email }}</a>
            </li>
          </ul>

          <a
            class="btn btn-whatsapp mb-4"
            :href="`https://wa.me/${school.whatsapp}?text=${encodeURIComponent('Hello, I would like to ask about ' + school.name + '.')}`"
            target="_blank"
            rel="noopener"
          >
            <i class="bi bi-whatsapp me-2"></i>Chat on WhatsApp
          </a>

          <h3 class="h5">Office hours</h3>
          <dl class="hours mb-0">
            <template v-for="h in school.hours" :key="h.days">
              <dt>{{ h.days }}</dt>
              <dd>{{ h.time }}</dd>
            </template>
          </dl>
        </div>

        <!-- Form -->
        <div v-reveal="140" class="col-lg-7">
          <h2 class="h4 mb-4">Send an enquiry</h2>
          <form novalidate :class="{ 'was-validated': validated }" @submit.prevent="submit">
            <div class="row g-3">
              <div class="col-md-6">
                <label for="name" class="form-label">Your name</label>
                <input id="name" v-model.trim="form.name" type="text" class="form-control" required autocomplete="name" />
                <div class="invalid-feedback">Please enter your name.</div>
              </div>
              <div class="col-md-6">
                <label for="phone" class="form-label">Phone number</label>
                <input id="phone" v-model.trim="form.phone" type="tel" class="form-control" required autocomplete="tel" />
                <div class="invalid-feedback">Please enter a phone number we can call.</div>
              </div>
              <div class="col-md-6">
                <label for="email" class="form-label">Email (optional)</label>
                <input id="email" v-model.trim="form.email" type="email" class="form-control" autocomplete="email" />
                <div class="invalid-feedback">Please enter a valid email address.</div>
              </div>
              <div class="col-md-6">
                <label for="topic" class="form-label">Your enquiry is about</label>
                <select id="topic" v-model="form.topic" class="form-select">
                  <option v-for="t in topics" :key="t">{{ t }}</option>
                </select>
              </div>
              <div class="col-12">
                <label for="message" class="form-label">Message</label>
                <textarea id="message" v-model.trim="form.message" rows="5" class="form-control" required></textarea>
                <div class="invalid-feedback">Please write your message.</div>
              </div>
              <div class="col-12">
                <button type="submit" class="btn btn-green btn-lg">Send enquiry</button>
                <p v-if="sent" class="form-note mt-3 mb-0" role="status">
                  Your email app should now be open with your message. Press send there to finish.
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>

  <!-- Map -->
  <section v-reveal class="map-wrap">
    <iframe
      :src="mapSrc"
      title="Map showing the school's location"
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
      allowfullscreen
    ></iframe>
  </section>
</template>
