<template>
  <section class="block grid" style="color: white;">
    <div class="glass-block about-me" v-animate-on-scroll>
      <h2>About me</h2>

      <div class="about-me-desc">
        <img src="/photo.jpg" alt="Vladyslav Rudakevych" style="width: 180px; border-radius: 1rem">

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

    <div
        class="grid-col glass-block stack"
        style="margin-bottom: 0; grid-row: 2 / 5; align-self: baseline;"
        v-animate-on-scroll
    >
      <h2 style="margin-bottom: 0">Stack</h2>

      <div>
        <h3>Programming languages:</h3>
        <span class="text-light">Php, Js, Go, Python</span>
      </div>

      <div>
        <h3>Frontend frameworks:</h3>
        <span class="text-light">Vue 3/2, Nuxt, Ionic, Capacitor</span>
      </div>

      <div >
        <h3>UI/UX:</h3>
        <span class="text-light">CSS, SASS, Tailwind CSS, Shadcn, Buefy, Vuetify, PrimeVue, Quasar</span>
      </div>

      <div>
        <h3>Backend frameworks:</h3>
        <span class="text-light">Laravel, Lumen, Symfony</span>
      </div>

      <div>
        <h3>Other:</h3>
        <span class="text-light">HuggingFace, Mistral, OpenAI, Docker, Apache, Nginx, Caddy, AWS, MySQL, Redis, Git</span>
      </div>
    </div>

    <div class="grid-col glass-block" v-animate-on-scroll>
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

    <div class="grid-col glass-block text-light" v-animate-on-scroll>
      <h2>Languages</h2>
      <div>English <span class="badge">B2</span></div>
      <div>Ukrainian <span class="badge">Native</span></div>
      <div>Russian <span class="badge">Native</span></div>
      <div>Polish <span class="badge">A1</span></div>
    </div>
  </section>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: auto auto;
  font-size: 24px;
  align-items: start;
}
.grid h2 {
  position: relative;
  margin-bottom: 20px;
}
.about-me {
  position: relative;
  max-width: 800px;
  grid-column: 1 / span 2;
  padding: 1rem;
}
.about-me-desc {
  display: flex;
  gap: 1.5rem;
  align-items: center;
}
.grid-col {
  padding: 1rem;
  max-width: 400px;
}
.grid-col > div { line-height: 1.75rem }
.stack {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.intro {
  font-size: 1.25rem;
  line-height: 1.2;
}
.badge {
  font-size: 16px;
  border: 2px solid white;
  padding: 3px 8px;
  background: white;
  color: black;
  font-weight: normal;
}

@media only screen and (max-width: 900px) {
  .grid {
    grid-template-columns: auto;
    gap: 1rem;
    padding: 1rem;
  }
  .about-me {
    grid-column: 1 / span 1;
    font-size: 1.75rem;
    padding: 1rem;
  }
  .about-me-desc { flex-direction: column }
  .grid-col { max-width: 100% }
}
</style>