<template>
  <section class="contacts">
    <div v-animate-on-scroll>
      <a href="tel:+380666953745" target="_blank">
        <svg class="contact-icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="m511 387-23 101c-3 14-16 24-31 24A458 458 0 0 1 0 55c0-15 10-28 24-31L125 1c15-4 30 4 36 18l46 108c6 13 2 28-9 37l-53 43c33 69 90 126 159 160l44-54c9-11 24-15 37-9l108 46c13 7 22 22 18 37z"/></svg>
        <span class="contact-text">+38(066)695-37-45</span>
      </a>

      <button @click="copy(contacts.phone)">
        <svg v-if="!contacts.phone.copied" fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M272 0h124c13 0 25 5 34 14l68 68c9 9 14 21 14 34v220c0 27-21 48-48 48H272c-26 0-48-21-48-48V48c0-26 22-48 48-48zM48 128h144v64H64v256h192v-32h64v48c0 27-21 48-48 48H48c-26 0-48-21-48-48V176c0-26 22-48 48-48z"/></svg>
        <svg v-else fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M439 105c12 13 12 33 0 46L183 407a32 32 0 0 1-46 0L9 279a32 32 0 0 1 46-46l105 106 233-234c13-12 33-12 46 0z"/></svg>
      </button>
    </div>

    <div v-animate-on-scroll>
      <a href="mailto:hexagon.dev.ua@gmail.com" target="_blank">
        <svg class="contact-icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M48 64a48 48 0 0 0-29 86l218 164c11 8 27 8 38 0l218-164a48 48 0 0 0-29-86H48zM0 176v208c0 35 29 64 64 64h384c35 0 64-29 64-64V176L294 339a64 64 0 0 1-76 0L0 176z"/></svg>
        <span class="contact-text">hexagon.dev.ua@gmail.com</span>
      </a>

      <button @click="copy(contacts.email)">
        <svg v-if="!contacts.email.copied" fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M272 0h124c13 0 25 5 34 14l68 68c9 9 14 21 14 34v220c0 27-21 48-48 48H272c-26 0-48-21-48-48V48c0-26 22-48 48-48zM48 128h144v64H64v256h192v-32h64v48c0 27-21 48-48 48H48c-26 0-48-21-48-48V176c0-26 22-48 48-48z"/></svg>
        <svg v-else fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M439 105c12 13 12 33 0 46L183 407a32 32 0 0 1-46 0L9 279a32 32 0 0 1 46-46l105 106 233-234c13-12 33-12 46 0z"/></svg>
      </button>
    </div>

    <div v-animate-on-scroll>
      <a href="https://t.me/HexagonDeveloper" target="_blank">
        <svg class="contact-icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M248 8a248 248 0 1 0 0 496 248 248 0 0 0 0-496Zm115 169c-4 39-20 134-28 178-4 19-10 25-17 25-14 2-25-9-39-18l-56-37c-24-17-8-25 6-40 3-4 67-61 68-67l-1-4-5-1q-4 1-105 70-15 10-27 9c-9 0-26-5-38-9-16-5-28-7-27-16q1-7 18-14l145-62c69-29 83-34 92-34 2 0 7 1 10 3a10 10 0 0 1 4 7 44 44 0 0 1 0 10Z"/></svg>
        <span class="contact-text">@HexagonDeveloper</span>
      </a>

      <button @click="copy(contacts.telegram)">
        <svg v-if="!contacts.telegram.copied" fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M272 0h124c13 0 25 5 34 14l68 68c9 9 14 21 14 34v220c0 27-21 48-48 48H272c-26 0-48-21-48-48V48c0-26 22-48 48-48zM48 128h144v64H64v256h192v-32h64v48c0 27-21 48-48 48H48c-26 0-48-21-48-48V176c0-26 22-48 48-48z"/></svg>
        <svg v-else fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M439 105c12 13 12 33 0 46L183 407a32 32 0 0 1-46 0L9 279a32 32 0 0 1 46-46l105 106 233-234c13-12 33-12 46 0z"/></svg>
      </button>
    </div>

    <div v-animate-on-scroll>
      <a href="https://github.com/Hexagon-Dev" target="_blank">
        <svg class="contact-icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M166 397c0 2-2 4-5 4-4 0-6-1-6-4 0-2 2-3 5-3 3-1 6 1 6 3zm-31-4c-1 2 1 4 4 5s6 0 6-2-1-5-4-5c-3-1-5 0-6 2zm44-2c-3 1-5 3-5 5 1 2 3 3 6 3 3-1 5-3 5-5s-3-3-6-3zM245 8A240 240 0 0 0 0 252c0 111 70 206 170 239 12 2 17-5 17-12v-61s-70 15-85-30c0 0-12-29-28-37 0 0-23-15 2-15 0 0 24 2 38 26 22 38 59 27 73 21 2-16 9-28 16-34-56-6-112-14-112-111 0-27 7-41 23-59-2-6-11-33 3-67 21-7 69 27 69 27a237 237 0 0 1 126 0s48-34 69-27c13 34 5 61 2 67 16 18 26 32 26 59 0 97-59 105-115 111 9 8 17 23 17 46v84c0 6 5 14 17 12a248 248 0 0 0 168-239C496 113 384 8 245 8zM97 353c-1 1-1 3 1 5 1 2 4 2 5 1s1-3-1-5c-1-2-4-2-5-1zm-11-8 3 4c1 1 3 0 4-1s0-3-2-4-4 0-5 1zm33 35c-2 2-1 5 1 7s5 2 7 1c1-2 0-5-2-7s-5-2-6-1zm-12-14v6c2 2 5 3 6 2 2-1 2-4 0-6-1-3-4-4-6-2z"/></svg>
        <span class="contact-text">Hexagon-Dev</span>
      </a>

      <button @click="copy(contacts.git)">
        <svg v-if="!contacts.git.copied" fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M272 0h124c13 0 25 5 34 14l68 68c9 9 14 21 14 34v220c0 27-21 48-48 48H272c-26 0-48-21-48-48V48c0-26 22-48 48-48zM48 128h144v64H64v256h192v-32h64v48c0 27-21 48-48 48H48c-26 0-48-21-48-48V176c0-26 22-48 48-48z"/></svg>
        <svg v-else fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M439 105c12 13 12 33 0 46L183 407a32 32 0 0 1-46 0L9 279a32 32 0 0 1 46-46l105 106 233-234c13-12 33-12 46 0z"/></svg>
      </button>
    </div>

    <div v-animate-on-scroll>
      <a href="javascript:void(0);">
        <svg class="contact-icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M525 70a2 2 0 0 0-1-1 485 485 0 0 0-120-37 2 2 0 0 0-2 1 337 337 0 0 0-15 31 448 448 0 0 0-134 0 310 310 0 0 0-15-31 2 2 0 0 0-2-1 484 484 0 0 0-120 37 2 2 0 0 0-1 1 496 496 0 0 0-87 334 2 2 0 0 0 1 2 488 488 0 0 0 147 74 2 2 0 0 0 2-1 348 348 0 0 0 30-49 2 2 0 0 0-1-2 321 321 0 0 1-46-22 2 2 0 0 1 0-3l9-7a2 2 0 0 1 2-1c96 44 200 44 296 0a2 2 0 0 1 1 1l10 7a2 2 0 0 1-1 3 301 301 0 0 1-45 22 2 2 0 0 0-1 2 391 391 0 0 0 30 49 2 2 0 0 0 2 1 486 486 0 0 0 147-74 2 2 0 0 0 0-2c13-126-20-237-86-334ZM222 338c-28 0-52-27-52-60s23-59 52-59c30 0 54 27 53 59 0 33-23 60-53 60Zm196 0c-29 0-53-27-53-60s23-59 53-59 53 27 53 59c0 33-23 60-53 60Z"/></svg>
        <span class="contact-text">@hexagondev</span>
      </a>

      <button @click="copy(contacts.discord)">
        <svg v-if="!contacts.discord.copied" fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M272 0h124c13 0 25 5 34 14l68 68c9 9 14 21 14 34v220c0 27-21 48-48 48H272c-26 0-48-21-48-48V48c0-26 22-48 48-48zM48 128h144v64H64v256h192v-32h64v48c0 27-21 48-48 48H48c-26 0-48-21-48-48V176c0-26 22-48 48-48z"/></svg>
        <svg v-else fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M439 105c12 13 12 33 0 46L183 407a32 32 0 0 1-46 0L9 279a32 32 0 0 1 46-46l105 106 233-234c13-12 33-12 46 0z"/></svg>
      </button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactsComponent',
  data() {
    return {
      contacts: {
        phone: { text: '+380666953745', copied: false },
        email: { text: 'hexagon.dev.ua@gmail.com', copied: false },
        telegram: { text: '@HexagonDeveloper', copied: false },
        git: { text: 'https://github.com/Hexagon-Dev', copied: false },
        discord: { text: '@hexagondev', copied: false },
      }
    };
  },
  methods: {
    copy(contact) {
      navigator.clipboard.writeText(contact.text);

      contact.copied = true;
    },
  },
};
</script>
