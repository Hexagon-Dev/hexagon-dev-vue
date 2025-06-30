import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';

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
  .directive('animate-on-scroll', {
    beforeMount: el => {
      el.classList.add('before-enter')
      animateOnScrollObserver.observe(el)
    },
  })
  .mount('#app');
