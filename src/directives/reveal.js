// v-reveal: fades and slides an element in the first time it scrolls into view.
// Usage: <div v-reveal> ... </div>   or   <div v-reveal="150"> (delay in ms, for staggering)
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

let observer = null
function getObserver() {
  if (observer || !('IntersectionObserver' in window)) return observer
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target
          el.classList.add('is-visible')
          observer.unobserve(el)
          // Once the reveal finishes, drop the helper classes so the element's own
          // hover/transition styles are not affected by the reveal delay.
          el.addEventListener('transitionend', function done(e) {
            if (e.target !== el || e.propertyName !== 'opacity') return
            el.removeEventListener('transitionend', done)
            el.classList.remove('reveal', 'is-visible')
            el.style.transitionDelay = ''
          })
        }
      })
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
  )
  return observer
}

export default {
  mounted(el, binding) {
    if (reduce || !getObserver()) return // leave content visible
    el.classList.add('reveal')
    if (binding.value) el.style.transitionDelay = `${binding.value}ms`
    getObserver().observe(el)
  },
  unmounted(el) {
    if (observer) observer.unobserve(el)
  },
}
