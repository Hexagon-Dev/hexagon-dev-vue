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
        v-if="company.title !== 'Learning'"
        v-animate-on-scroll
        :src="`/${company.title}.svg`"
        :alt="company.title"
      >
    </div>
    <div class="block content" :style="`background: ${company.contentColor}`">
      <div v-animate-on-scroll class="title-container">
        <h2>{{ company.title }}</h2>

        <a :href="company.link" target="_blank" v-t="'open_site'" class="btn-link" />
      </div>

      <div v-animate-on-scroll>
        <h3 v-t="'post'" />
        <p>{{ company.post }}</p>
        <h3 v-t="'responsibilities'" />
        <p v-t="`company.${company.title}.resp`" />
        <h3 v-t="'company_description'" />
        <p v-html="$t(`company.${company.title}.desc`)" />
      </div>
    </div>
  </section>
</template>
