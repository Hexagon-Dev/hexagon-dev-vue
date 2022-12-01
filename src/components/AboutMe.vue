<template>
  <section class="block about" id="about_me">
    <div class="grid">
      <div class="pad" v-animate-on-scroll>
        <div class="pad__body">
          <h3 v-t="'who_am_i'" />
          <p style="margin: 0;" v-t="'intro'"/>
        </div>
      </div>

      <div class="about-col stack" v-animate-on-scroll>
        <h2 v-t="'stack'" class="cyberpunk"/>

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
          <span class="text-light">Axios, Date-fns, VeeValidate, Markdownit, Pusher-js, TipTap editor, Vuex, I18n...</span>
        </div>

        <div v-animate-on-scroll>
          <h3 v-t="'styles'"/>
          <span class="text-light">CSS, SASS, Tailwind CSS.</span>
        </div>

        <div v-animate-on-scroll>
          <h3 v-t="'backend_frameworks'"/>
          <span class="text-light">Laravel, Lumen.</span>
        </div>

        <div v-animate-on-scroll>
          <h3 v-t="'backend_libraries'"/>
          <span class="text-light">Laravel Passport, Laravel-Permission, Westacks Telebot, JSON RPC, Behat, SumSub API...</span>
        </div>

        <div v-animate-on-scroll>
          <h3 v-t="'databases'"/>
          <span class="text-light">MySQL, Redis.</span>
        </div>
      </div>

      <div class="about-col" v-animate-on-scroll>
        <h2 v-t="'soft_skills_title'"/>
        <ul class="text-light">
          <li v-for="skill in Array.from(Array(8).keys())" v-t="`soft_skills.${skill}`"/>
        </ul>
      </div>

      <div class="about-col languages" v-animate-on-scroll>
        <h2 v-t="'languages'"/>
        <h3>{{ $t('ua') }} <span class="badge" v-t="'native_speaker'"/></h3>
        <h3>{{ $t('ru') }} <span class="badge" v-t="'native_speaker'"/></h3>
        <h3>{{ $t('en') }} <span class="badge">B2</span></h3>
        <h3>{{ $t('de') }} <span class="badge">A1</span></h3>
      </div>
    </div>
  </section>
</template>
