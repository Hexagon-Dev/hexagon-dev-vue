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
      responsibilities: 'Creating and maintaining databases, HTML markup creation, developing API, deploying.',
      description: '<p>Ficus Technologies is a software development and IT recruiting company that helps large companies and promising startups bring ideas of any size to life.</p><p>The company is trusted by over 250+ companies worldwide and provides expert services for building MVPs, developing software products from scratch, and scaling teams. We form a flexible pipeline that adapts to the needs of the individual client to deliver a result that allows you to achieve all your business goals.</p>',
    },
    {
      backgroundColor: '#333',
      contentColor: 'linear-gradient(90deg, #6B72B5 0%, #68B2BC 100%)',
      title: 'hexCraft',
      post: 'Creator, Main Administrator',
      term: '07.2020 - 03.2022',
      responsibilities: 'Creating and maintaining servers, game servers, site and launcher.',
      description: 'Hex-Craft is a unique Minecraft project. Main features of this project are services interconnection, gameplay seamlessness and user support as fast as possible.',
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
