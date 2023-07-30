<template>
  <section class="block about" id="about_me">
    <div class="grid">
      <div class="pad" v-animate-on-scroll>
        <div class="pad__body">
          <h3 v-t="'who_am_i'"/>
          <p style="margin: 0;" class="intro" v-t="'intro'"/>
        </div>
      </div>

      <div class="about-col stack">
        <h2 v-animate-on-scroll v-t="'stack'"/>

        <div v-animate-on-scroll>
          <h3 v-t="'programming_languages'"/>
          <span class="text-light">PHP, JS.</span>
        </div>

        <div v-animate-on-scroll>
          <h3 v-t="'frontend_frameworks'"/>
          <span class="text-light">Vue 2, Vue 3, Nuxt, Ionic, Capacitor.</span>
        </div>

        <div v-animate-on-scroll>
          <h3 v-t="'frontend_libraries'"/>
          <span class="text-light">Axios, Date-fns, VeeValidate, Markdownit, Pusher-js, TipTap, Vuex, I18n...</span>
        </div>

        <div v-animate-on-scroll>
          <h3 v-t="'styles'"/>
          <span class="text-light">CSS, SASS, Tailwind CSS, Bootstrap, Buefy, Vuetify.</span>
        </div>

        <div v-animate-on-scroll>
          <h3 v-t="'backend_frameworks'"/>
          <span class="text-light">Laravel, Lumen, Symfony.</span>
        </div>

        <div v-animate-on-scroll>
          <h3 v-t="'backend_libraries'"/>
          <span class="text-light">Laravel Passport, JSON RPC, Behat, Scribe, SumSub API, ModernMT API, Sentry, Telescope...</span>
        </div>

        <div v-animate-on-scroll>
          <h3 v-t="'others'"/>
          <span class="text-light">OpenAI, Linux, Docker, Docker-Compose, Nginx, AWS, Makefile, Composer, NPM, YARN, MySQL, Redis, GitHub, GitLab, BitBucket, Jira, Scrum.</span>
        </div>
      </div>

      <div class="about-col" v-animate-on-scroll>
        <h2 v-t="'soft_skills_title'"/>
        <ul class="text-light">
          <li v-for="skill in Array.from(Array(8).keys())" v-t="`soft_skills.${skill}`"/>
        </ul>
      </div>

      <div class="about-col" v-animate-on-scroll>
        <h2 v-t="'principles_title'"/>
        <ul class="text-light">
          <li>DRY</li>
          <li>KISS</li>
          <li>YAGNI</li>
          <li>SOLID</li>
        </ul>
      </div>

      <div class="about-col languages" v-animate-on-scroll>
        <h2 v-t="'languages'"/>
        <h3>{{ $t('ua') }} <span class="badge" v-t="'native_speaker'"/></h3>
        <h3>{{ $t('ru') }} <span class="badge" v-t="'native_speaker'"/></h3>
        <h3>{{ $t('en') }} <span class="badge">B2</span></h3>
      </div>
    </div>
  </section>
</template>
