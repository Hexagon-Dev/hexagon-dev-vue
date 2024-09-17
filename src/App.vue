<script setup>
  import AboutMe from './components/AboutMe.vue';
  import Company from './components/Company.vue';
  import Contacts from './components/Contacts.vue';
  import NickName from './components/NickName.vue';
  import Projects from "./components/Projects.vue";

  const companies = [
    {
      backgroundColor: '#181A1B',
      contentColor: 'linear-gradient(90deg, rgb(27,44,24) 0%, rgb(25,42,50) 100%)',
      title: 'Ficus Technologies',
      link: 'https://ficustechnologies.com',
      post: 'Full-Stack Developer',
      term: '10.2021 - Now',
    },
    {
      backgroundColor: '#333',
      contentColor: 'linear-gradient(90deg, #6B72B5 0%, #68B2BC 100%)',
      title: 'hexCraft',
      post: 'Creator, Main Administrator',
      term: '07.2020 - 03.2022',
    },
    {
      backgroundColor: '#000',
      contentColor: 'linear-gradient(90deg, #573F00 0%, #000 100%)',
      title: 'Egregor',
      post: 'Full-Stack Developer',
      term: '03.2023 - 04.2023',
    },
  ];
</script>

<template>
  <nick-name/>
  <about-me/>
  <projects />
  <company v-for="company in companies" :key="company.logo" :company="company"/>
  <contacts/>
</template>
