import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';

import { createI18n } from 'vue-i18n';

import ua from './assets/lang/ua.json';
import ru from './assets/lang/ru.json';
import en from './assets/lang/en.json';

const i18n = createI18n({
  legacy: false,
  locales: ['ua', 'en', 'ru'],
  locale: 'ua',
  fallbackLocale: 'en',
  messages: { ua, ru, en },
});

const app = createApp(App);

const animateOnScrollObserver = new IntersectionObserver(
  (entries, animateOnScrollObserver) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (entry.target.attributes['data-delay']) {
          const delay = entry.target.attributes['data-delay'].value
          entry.target.style.transitionDelay = `${delay}ms`
        }

        entry.target.classList.add('enter')
        animateOnScrollObserver.unobserve(entry.target)
      }
    });
  },
);

app
  .use(i18n)
  .directive('animate-on-scroll', {
    beforeMount: el => {
      el.classList.add('before-enter')
      animateOnScrollObserver.observe(el)
    },
  })
  .mount('#app');
