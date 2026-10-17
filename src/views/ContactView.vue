<script setup>
import { reactive, ref, computed } from 'vue'
import PageHeader from '../components/PageHeader.vue'
import { school } from '../data/school'

const blank = () => ({ name: '', phone: '', email: '', topic: 'Admission', message: '', _gotcha: '' })
const form = reactive(blank())
const validated = ref(false)
const status = ref('idle') // idle | sending | success | error
const errorText = ref('')

const topics = ['Admission', 'Fees', 'Visiting the school', 'Other']

const mapSrc =
    'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15849.207601042497!2d-1.5268119!3d6.7329742!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2ae587e970de1f09!2sKONTOH%20EDUCATIONAL%20COMPLEX!5e0!3m2!1sen!2sgh!4v1672112108043!5m2!1sen!2sgh'

const formspreeReady = computed(() => school.formspreeId && !school.formspreeId.startsWith('YOUR_'))

// Sends the enquiry to Formspree, which emails it to the school.
async function submit(e) {
  validated.value = true
  if (!e.target.checkValidity() || status.value === 'sending') return

  // Spam trap: real visitors never see or fill this field
  if (form._gotcha) { status.value = 'success'; return }

  // Safety net while the Formspree ID has not been set yet
  if (!formspreeReady.value) {
    console.warn('Set formspreeId in src/data/school.js. Falling back to the visitor\'s email app.')
    const body = `${form.message}\n\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}`
    window.location.href = `mailto:${school.email}?subject=${encodeURIComponent(`${form.topic} enquiry from ${form.name}`)}&body=${encodeURIComponent(body)}`
    return
  }

  status.value = 'sending'
  errorText.value = ''

  const payload = {
    name: form.name,
    phone: form.phone,
    topic: form.topic,
    message: form.message,
    _subject: `${form.topic} enquiry from ${form.name} (school website)`,
  }
  if (form.email) payload.email = form.email // Formspree uses this as the reply-to address

  try {
    const res = await fetch(`https://formspree.io/f/${school.formspreeId}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(payload),
    })
    if (res.ok) {
      status.value = 'success'
      Object.assign(form, blank())
      validated.value = false
    } else {
      const data = await res.json().catch(() => ({}))
      errorText.value = data.errors?.map((x) => x.message).join(', ') || 'Something went wrong on our side.'
      status.value = 'error'
    }
  } catch {
    errorText.value = 'We could not reach the server. Please check your internet connection.'
    status.value = 'error'
  }
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

          <div v-if="status === 'success'" class="form-alert form-alert-ok" role="status">
            <i class="bi bi-check-circle-fill" aria-hidden="true"></i>
            <div>
              <h3 class="h5 mb-1">Thank you, your message has been sent.</h3>
              <p class="mb-3">We will get back to you as soon as we can.</p>
              <button type="button" class="btn btn-green" @click="status = 'idle'">Send another message</button>
            </div>
          </div>

          <form v-else novalidate :class="{ 'was-validated': validated }" @submit.prevent="submit">
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

              <!-- Spam trap (hidden from people) -->
              <div class="hp invisible" aria-hidden="true">
                <label for="website">Leave this field empty</label>
                <input id="website" v-model="form._gotcha" type="text" tabindex="-1" autocomplete="off" />
              </div>

              <div class="col-12">
                <button type="submit" class="btn btn-green btn-lg" :disabled="status === 'sending'">
                  <span v-if="status === 'sending'" class="spinner-border spinner-border-sm me-2" aria-hidden="true"></span>
                  {{ status === 'sending' ? 'Sending...' : 'Send enquiry' }}
                </button>

                <div v-if="status === 'error'" class="form-alert form-alert-error mt-3" role="alert">
                  <i class="bi bi-exclamation-triangle-fill" aria-hidden="true"></i>
                  <p class="mb-0">
                    {{ errorText }} Please try again, or call
                    <a :href="`tel:${school.phoneLink}`">{{ school.phone }}</a> or message us on WhatsApp.
                  </p>
                </div>
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
