<script setup>
defineProps({
  company: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <section class="block company" :style="`background: ${company.backgroundColor}`">
    <div class="logo-container">
      <img
        v-animate-on-scroll
        :src="`/${company.title}.svg`"
        :alt="company.title"
      >
    </div>

    <div class="block content" :style="`background: ${company.contentColor}`">
      <div v-animate-on-scroll class="title-container">
        <h2>{{ company.title }}</h2>

        <a
          v-if="company.link"
          :href="company.link"
          target="_blank"
          class="btn-link"
        >
          OPEN SITE
        </a>
      </div>

      <div v-animate-on-scroll>
        <h3>Post:</h3>
        <p>{{ company.post }}</p>
        <h3>Term:</h3>
        <p>{{ company.term }}</p>
        <h3>Responsibilities:</h3>
        <p>{{ company.responsibilities }}</p>
        <h3>Company description:</h3>
        <p v-html="company.description"/>
      </div>
    </div>
  </section>
</template>
