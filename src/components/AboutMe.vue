<template>
  <section class="block grid" style="color: white;">
    <div class="pad" v-animate-on-scroll>
        <h2>About me</h2>

        <div style="display: flex; gap: 1rem; align-items: center">
          <img src="/photo.jpg" alt="Vladyslav Rudakevych" style="width: 180px; border: 1px solid white">

          <p style="margin: 0;" class="intro text-light">
            Hello, my name is Vladyslav Rudakevych, I am a Full-Stack Developer with
            {{ new Date().getFullYear() - new Date('2021').getFullYear() }}+ years of experience equipped with a diverse
            and promising skill-set.
            Able to effectively self-manage various issues, as well as collaborate as part of a productive team.
            My main responsibility is to develop high-load and user-friendly systems following best practises.
            Proficient in various frameworks, libraries and embedded systems. I am always engaged in learning new skills.
          </p>
        </div>
    </div>

    <div class="about-col stack" style="margin-bottom: 0">
      <h2 v-animate-on-scroll>Stack</h2>

      <div v-animate-on-scroll>
        <h3>Programming languages:</h3>
        <span class="text-light">PHP, JS, Go, Python</span>
      </div>

      <div v-animate-on-scroll>
        <h3>Frontend frameworks:</h3>
        <span class="text-light">Vue 3/2, Nuxt, Ionic, Capacitor</span>
      </div>

      <div v-animate-on-scroll>
        <h3>UI/UX:</h3>
        <span class="text-light">CSS, SASS, Tailwind CSS, Shadcn, Buefy, Vuetify, PrimeVue, Quasar</span>
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
        <li>Creative thinking</li>
        <li>Collaboration</li>
        <li>Enthusiasm</li>
        <li>Conflict resolution</li>
        <li>Patience</li>
        <li>Self-confidence</li>
        <li>Rapid</li>
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
<script setup lang="ts">
</script>