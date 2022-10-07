<script setup>
  import AboutMe from './components/AboutMe.vue';
  import Company from './components/Company.vue';
  import Contacts from './components/Contacts.vue';
  import NickName from './components/NickName.vue';
</script>

<template>
  <div>
    <nick-name />
    <about-me />
    <company v-for="company in companies" :key="company.logo" :company="company" />
    <contacts />
  </div>
</template>

<script>
export default {
  data() {
    return {
      companies: [
        {
          backgroundColor: 'white',
          contentColor: '#0D9F81',
          title: 'Ficus Life',
          link: 'https://ficuslife.com',
          linkColor: '#138570',
          post: 'Full-Stack Developer',
        },
        {
          backgroundColor: '#999',
          contentColor: '#333',
          title: 'Hex-Craft',
          link: '#',
          linkColor: '#444',
          post: 'Creator, Main Administrator',
        },
      ],
    };
  },
};
</script>
