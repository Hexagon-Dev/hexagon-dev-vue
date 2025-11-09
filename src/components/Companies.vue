<script setup>
const companies = [
  {
    backgroundColor: '#181A1B',
    contentColor: 'linear-gradient(90deg, rgb(52, 53, 138) 0%, rgb(0, 117, 149) 100%)',
    title: 'Natura Supple',
    link: null,
    post: 'Full-Stack Developer',
    term: '08.2025 - Now',
    responsibilities: 'Maintaining and enhancing the production ERP system, including refactoring existing code. Developing an upgraded SaaS CRM platform using modern technologies.',
    description: 'Natura Supple is a Polish company specializing in medical supplements. The company also focuses on the development of a SaaS-based ERP system.',
  },
  {
    backgroundColor: '#1f241f',
    contentColor: 'linear-gradient(90deg, rgb(27,44,24) 0%, rgb(25,42,50) 100%)',
    title: 'Ficus Technologies',
    link: 'https://ficustechnologies.com',
    post: 'Full-Stack Developer',
    term: '10.2021 - 08.2025',
    responsibilities: 'Outsource worker developing and maintaining numerous projects using newest technologies as well as refactoring big live applications.',
    description: '<p>Ficus Technologies is a software development and IT recruiting company that helps large companies and promising startups bring ideas of any size to life.</p><p>The company is trusted by over 250+ companies worldwide and provides expert services for building MVPs, developing software products from scratch, and scaling teams. We form a flexible pipeline that adapts to the needs of the individual client to deliver a result that allows you to achieve all your business goals.</p>',
  },
  {
    backgroundColor: '#333',
    contentColor: 'linear-gradient(90deg, #6B72B5 0%, #68B2BC 100%)',
    title: 'hexCraft',
    post: 'Creator, Main Administrator',
    term: '07.2020 - 03.2022',
    responsibilities: 'Creating and maintaining servers, game servers, site and launcher.',
    description: 'Hex-Craft is a unique Minecraft project. Main features of this project are services interconnection, providing seamless gameplay and user support as fast as possible.',
  },
];
</script>

<template>
  <section
      v-for="company in companies"
      :key="company.title"
      class="block company"
      :style="`background: ${company.backgroundColor}`"
  >
    <div class="logo-container">
      <img
          v-animate-on-scroll
          :src="`/${company.title}.svg`"
          :alt="company.title"
      >
    </div>

    <div class="block content" :style="`background: ${company.contentColor}`">
      <div v-animate-on-scroll class="title-container">
        <h2>
          <template v-if="company.link">
            <a :href="company.link" target="_blank" class="btn-link">
              {{ company.title }}
            </a>
          </template>

          <template v-else>
            {{ company.title }}
          </template>
        </h2>
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

<style scoped>
.logo-container > img {
  width: 100%;
  max-width: 400px;
  transform: rotateY(20deg);
}
.company > .logo-container {
  height: 100%;
  min-width: 380px;
  perspective: 300px;
  padding: 40px;
  flex: none;
  display: flex;
  justify-content: center;
}
.company > .content {
  width: 100%;
  flex-direction: column;
  align-items: start;
  color: white;
  padding-left: 32px;
  padding-right: 20%;
}
.content > .title-container {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
}
.content > div > p {
  font-size: 24px;
  font-weight: 300;
}
.title-container > h2 {
  font-size: 3rem;
  margin-right: 16px;
}
.btn-link {
  color: white;
  transition-duration: .3s;
}
.btn-link:hover { color: #999 }

@media only screen and (max-width: 900px) {
  .company { flex-direction: column }
  .company > .content { padding: 32px }
  .content > .title-container { flex-direction: column }
  .title-container > h2 {
    margin-right: 0;
    margin-bottom: 10px;
  }
  .content > .title-container {
    align-items: start;
    width: 100%;
  }
}

@media only screen and (max-width: 1280px) {
  .company > .content { padding-right: 32px }
}
</style>