import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';

import { createI18n } from "vue-i18n/dist/vue-i18n.esm-bundler.js";

import messagesUa from './assets/lang/ua.json';
import messagesRu from './assets/lang/ru.json';
import messagesEn from './assets/lang/en.json';

const i18n = createI18n({
    locales: ['ua', 'en', 'ru'],
    locale: 'ua',
    fallbackLocale: 'en',
    messages: {
        ua: messagesUa,
        en: messagesEn,
        ru: messagesRu,
    },
});

const app = createApp(App);

app.use(i18n);

const animateOnScrollObserver = new IntersectionObserver(
    (entries, animateOnScrollObserver) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('enter')
                animateOnScrollObserver.unobserve(entry.target)
            }
        });
    },
);

app.directive('animate-on-scroll', {
    beforeMount: el => {
        el.classList.add('before-enter')
        animateOnScrollObserver.observe(el)
    },
});

app.mount('#app');
