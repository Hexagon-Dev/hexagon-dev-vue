<script setup>
const softSkills = [
  'Creative thinking',
  'Collaboration',
  'Enthusiasm',
  'Conflict resolution',
  'Patience',
  'Self-confidence',
  'Rapid',
];
</script>

<template>
  <section class="block grid" style="color: white;">
    <div class="pad" v-animate-on-scroll>
      <h3>Who am I?</h3>
      <p style="margin: 0;" class="intro">
        Hello, my name is Vladyslav Rudakevych, I am a professional full-stack developer from Ukraine 🇺🇦 with more than
        3 years of experience in web-developing, equipped with a diverse and promising skill-set.
        Able to effectively self-manage various issues, as well as collaborate as part of a productive team.
        My main responsibility is to develop high-load and user-friendly systems following best practises.
        Proficient in various frameworks, libraries and embedded systems. I am always engaged in learning new skills.
      </p>
    </div>

    <div class="about-col stack">
      <h2 v-animate-on-scroll>Stack</h2>

      <div v-animate-on-scroll>
        <h3>Programming languages:</h3>
        <span class="text-light">PHP, JS</span>
      </div>

      <div v-animate-on-scroll>
        <h3>Frontend frameworks:</h3>
        <span class="text-light">Vue 2, Vue 3, Nuxt, Ionic, Capacitor</span>
      </div>

      <div v-animate-on-scroll>
        <h3>UI/UX:</h3>
        <span class="text-light">CSS, SASS, Tailwind CSS, Bootstrap, Buefy, Vuetify, PrimeVue, Quasar</span>
      </div>

      <div v-animate-on-scroll>
        <h3>Backend frameworks:</h3>
        <span class="text-light">Laravel, Lumen, Symfony</span>
      </div>

      <div v-animate-on-scroll>
        <h3>Other:</h3>
        <span class="text-light">HuggingFace, Mistral, OpenAI, Docker, Apache, Nginx, Caddy, AWS, MySQL, Redis, Git</span>
      </div>
    </div>

    <div class="about-col" v-animate-on-scroll>
      <h2>Soft Skills</h2>
      <ul class="text-light">
        <li v-for="skill in softSkills" :key="skill">
          {{ skill }}
        </li>
      </ul>
    </div>

    <div class="about-col" v-animate-on-scroll>
      <h2>Principles:</h2>
      <ul class="text-light">
        <li v-for="p in ['DRY', 'KISS', 'YAGNI', 'SOLID']" :key="p">
          {{ p }}
        </li>
      </ul>
    </div>

    <div class="about-col languages" v-animate-on-scroll>
      <h2>Languages:</h2>
      <h3>English <span class="badge">B2</span></h3>
      <h3>Ukrainian <span class="badge">Native</span></h3>
      <h3>Russian <span class="badge">Native</span></h3>
      <h3>Polish <span class="badge">A1</span></h3>
    </div>
  </section>
</template>
