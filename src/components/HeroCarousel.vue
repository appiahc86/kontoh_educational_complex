<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { img } from '../data/school'

const props = defineProps({
  slides: { type: Array, required: true },
  interval: { type: Number, default: 5500 },
})

const index = ref(0)
const hovering = ref(false)
const userPaused = ref(false)
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
const playing = computed(() => !userPaused.value && !hovering.value && !reduceMotion)

let timer = null
const go = (i) => { index.value = (i + props.slides.length) % props.slides.length }
const next = () => go(index.value + 1)
const prev = () => go(index.value - 1)

function start() {
  stop()
  timer = setInterval(() => { if (playing.value) next() }, props.interval)
}
function stop() { clearInterval(timer) }
function goTo(i) { go(i); start() } // restart the timer after manual navigation

// Swipe support for phones
let startX = null
const onDown = (e) => { startX = e.clientX }
const onUp = (e) => {
  if (startX === null) return
  const dx = e.clientX - startX
  if (Math.abs(dx) > 50) { dx < 0 ? next() : prev(); start() }
  startX = null
}

const onKey = (e) => {
  if (e.key === 'ArrowRight') { next(); start() }
  if (e.key === 'ArrowLeft') { prev(); start() }
}

onMounted(start)
onBeforeUnmount(stop)
</script>

<template>
  <div
    class="hc"
    role="region"
    aria-roledescription="carousel"
    aria-label="Life at the school"
    tabindex="0"
    @mouseenter="hovering = true"
    @mouseleave="hovering = false"
    @focusin="hovering = true"
    @focusout="hovering = false"
    @keydown="onKey"
    @pointerdown="onDown"
    @pointerup="onUp"
  >
    <div class="hc-track" aria-live="off">
      <figure
        v-for="(s, i) in slides"
        :key="s.file"
        class="hc-slide"
        :class="{ active: i === index }"
        role="group"
        aria-roledescription="slide"
        :aria-label="`${i + 1} of ${slides.length}`"
        :aria-hidden="i !== index"
      >
        <img :src="img(s.file)" :alt="s.alt" :loading="i === 0 ? 'eager' : 'lazy'" draggable="false" />
        <figcaption class="hc-caption">
          <h3 class="h3 mb-1">{{ s.title }}</h3>
          <p class="mb-0">{{ s.text }}</p>
        </figcaption>
      </figure>
    </div>

    <button type="button" class="hc-btn hc-prev" aria-label="Previous slide" @click="prev(); start()">
      <i class="bi bi-chevron-left"></i>
    </button>
    <button type="button" class="hc-btn hc-next" aria-label="Next slide" @click="next(); start()">
      <i class="bi bi-chevron-right"></i>
    </button>

    <div class="hc-controls">
      <button
        v-for="(s, i) in slides"
        :key="s.file"
        type="button"
        class="hc-dot"
        :class="{ active: i === index }"
        :aria-label="`Go to slide ${i + 1}`"
        :aria-current="i === index"
        @click="goTo(i)"
      ></button>
      <button
        v-if="!reduceMotion"
        type="button"
        class="hc-pause"
        :aria-label="userPaused ? 'Play slideshow' : 'Pause slideshow'"
        @click="userPaused = !userPaused"
      >
        <i :class="userPaused ? 'bi bi-play-fill' : 'bi bi-pause-fill'"></i>
      </button>
    </div>
  </div>
</template>
