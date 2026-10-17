<script setup>
defineProps({
  title: { type: String, required: true },
  lead: { type: String, default: '' },
})
</script>

<template>
  <section class="page-header">
    <div class="container">
      <h1 class="display-5 mb-3">{{ title }}</h1>
      <p v-if="lead" class="lead mb-0 page-header-lead">{{ lead }}</p>
    </div>
  </section>
</template>
