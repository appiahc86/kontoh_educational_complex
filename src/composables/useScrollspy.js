import { ref, onMounted, onBeforeUnmount } from 'vue'

// Highlights the section crossing the upper part of the viewport.
// Sections live in lazy-loaded routes, so we attach to them whenever they appear in the DOM.
export function useScrollspy(ids) {
  const active = ref(ids[0])
  let io = null
  let mo = null
  onMounted(() => {
    const seen = new Map()
    const watched = new Set()
    io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => seen.set(e.target.id, e.isIntersecting))
        const current = ids.find((id) => seen.get(id))
        if (current) active.value = current
      },
      { rootMargin: '-90px 0px -55% 0px' },
    )
    const attach = () => {
      ids.forEach((id) => {
        const el = document.getElementById(id)
        if (el && !watched.has(el)) { watched.add(el); io.observe(el) }
      })
    }
    attach()
    mo = new MutationObserver(attach)
    mo.observe(document.getElementById('app'), { childList: true, subtree: true })
  })
  onBeforeUnmount(() => { io && io.disconnect(); mo && mo.disconnect() })
  return { active }
}
