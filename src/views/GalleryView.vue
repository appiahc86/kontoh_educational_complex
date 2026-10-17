<script setup>
import { ref, computed, watch, onMounted, onBeforeUnmount } from 'vue'
import PageHeader from '../components/PageHeader.vue'
import { gallery, galleryCategories, img } from '../data/school'

const active = ref('All')
const categories = ['All', ...galleryCategories]
const filtered = computed(() =>
  active.value === 'All' ? gallery : gallery.filter((g) => g.category === active.value),
)

// Lightbox
const current = ref(null) // index within `filtered`, or null when closed
const isOpen = computed(() => current.value !== null)
const item = computed(() => (isOpen.value ? filtered.value[current.value] : null))

const open = (i) => { current.value = i }
const close = () => { current.value = null }
const next = () => { current.value = (current.value + 1) % filtered.value.length }
const prev = () => { current.value = (current.value - 1 + filtered.value.length) % filtered.value.length }

watch(active, close)
watch(isOpen, (v) => { document.body.style.overflow = v ? 'hidden' : '' })

const onKey = (e) => {
  if (!isOpen.value) return
  if (e.key === 'Escape') close()
  if (e.key === 'ArrowRight') next()
  if (e.key === 'ArrowLeft') prev()
}
onMounted(() => window.addEventListener('keydown', onKey))
onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKey)
  document.body.style.overflow = ''
})
</script>

<template>
  <PageHeader title="Gallery" lead="A look at school life: lessons, sports, events and our campus." />

  <section class="section">
    <div class="container">
      <div class="filter-bar mb-4" role="group" aria-label="Filter photos">
        <button
          v-for="c in categories"
          :key="c"
          type="button"
          class="btn btn-filter"
          :class="{ active: active === c }"
          :aria-pressed="active === c"
          @click="active = c"
        >
          {{ c }}
        </button>
      </div>

      <TransitionGroup name="gal" tag="div" class="row g-3">
        <div v-for="(g, i) in filtered" :key="g.file" class="col-6 col-lg-4" :style="{ '--i': i }">
          <button type="button" class="gallery-item" :aria-label="`Open photo: ${g.caption}`" @click="open(i)">
            <img :src="img(g.file)" :alt="g.alt" loading="lazy" />
            <span class="gallery-caption">{{ g.caption }}</span>
          </button>
        </div>
      </TransitionGroup>
    </div>
  </section>

  <!-- Lightbox -->
  <div v-if="item" class="lightbox" role="dialog" aria-modal="true" :aria-label="item.caption" @click.self="close">
    <button type="button" class="lb-btn lb-close" aria-label="Close" @click="close"><i class="bi bi-x-lg"></i></button>
    <button v-if="filtered.length > 1" type="button" class="lb-btn lb-prev" aria-label="Previous photo" @click="prev">
      <i class="bi bi-chevron-left"></i>
    </button>
    <figure class="lb-figure">
      <img :src="img(item.file)" :alt="item.alt" />
      <figcaption>{{ item.caption }}</figcaption>
    </figure>
    <button v-if="filtered.length > 1" type="button" class="lb-btn lb-next" aria-label="Next photo" @click="next">
      <i class="bi bi-chevron-right"></i>
    </button>
  </div>
</template>
