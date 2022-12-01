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
          backgroundColor: '#181A1B',
          contentColor: 'linear-gradient(90deg, rgb(27,44,24) 0%, rgb(25,42,50) 100%)',
          title: 'Ficus Technologies',
          link: 'https://ficustechnologies.com',
          linkColor: '#138570',
          post: 'Full-Stack Developer',
        },
        {
          backgroundColor: '#333',
          contentColor: 'linear-gradient(90deg, #6B72B5 0%, #68B2BC 100%)',
          title: 'hexCraft',
          link: '#',
          linkColor: '#444',
          post: 'Creator, Main Administrator',
        },
      ],
    };
  },
};
</script>
