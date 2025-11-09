<script setup>
const svgIcons = [
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M320 32c-8 0-16 1-24 4L16 137a24 24 0 0 0 0 46l58 20c-17 26-26 57-26 89v28c0 28-11 58-22 81-7 13-14 26-23 37a16 16 0 0 0 9 26l64 16c4 1 9 0 12-2s7-7 8-11a258 258 0 0 0-16-150v-25c0-30 10-59 28-82 13-15 30-28 49-35l157-62a16 16 0 0 1 12 30l-157 61c-13 5-23 13-32 22l159 58a71 71 0 0 0 48 0l280-101a24 24 0 0 0 0-46L344 36c-8-3-16-4-24-4zM128 408c0 35 86 72 192 72s192-37 192-72l-15-145-142 51a102 102 0 0 1-69 0l-143-51-15 145z"/></svg>',
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M228 469 48 300l-12-12h87c22 0 43-14 51-34l11-26 49 110a25 25 0 0 0 44 1l42-85 2 3c9 19 29 31 50 31h104c-3 4-7 9-12 12L284 469a41 41 0 0 1-56 0zm276-229H372c-3 0-6-2-8-4l-23-47c-4-8-12-13-21-13s-18 5-22 13l-41 83-51-114a24 24 0 0 0-44 1l-32 76c-1 3-4 5-7 5H16l-7 1c-6-16-9-33-9-50v-6A143 143 0 0 1 244 84l12 12 12-12a143 143 0 0 1 244 101v6c0 17-3 33-8 49z"/></svg>',
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M176 56v40h160V56c0-4-4-8-8-8H184c-4 0-8 4-8 8zm-48 40V56c0-31 25-56 56-56h144c31 0 56 25 56 56v424H128V96zm-64 0h32v384H64c-35 0-64-29-64-64V160c0-35 29-64 64-64zm384 384h-32V96h32c35 0 64 29 64 64v256c0 35-29 64-64 64z"/></svg>',
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M512 267c-26 9-54 14-81 15 9-105-32-204-103-272a256 256 0 0 1 184 246v11zm-4 35c-6 32-18 62-34 89-98 48-218 42-312-25 24-36 55-67 94-92 80 44 170 51 252 28zm-236-55c-3-91-41-173-102-232a252 252 0 0 1 94-15c91 60 146 167 135 282-44-2-87-14-127-35zM138 29c21 18 39 39 54 62A336 336 0 0 0 7 317 255 255 0 0 1 138 29zm70 90c19 39 31 82 32 128A335 335 0 0 0 90 451c-24-21-44-46-60-74 7-109 72-210 178-258zm48 393c-51 0-98-15-138-40 6-27 15-53 28-78 86 61 192 75 287 47-46 44-108 71-177 71z"/></svg>',
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M0 24C0 11 11 0 24 0h46c22 0 41 13 50 32h411c26 0 46 25 39 50l-41 153c-9 31-37 53-70 53H171l5 29c2 11 12 19 24 19h288a24 24 0 1 1 0 48H200c-35 0-65-25-71-58L77 55c0-4-4-7-7-7H24C11 48 0 37 0 24zm128 440a48 48 0 1 1 96 0 48 48 0 1 1-96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>',
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M128 0c18 0 32 14 32 32v32h128V32a32 32 0 1 1 64 0v32h48c27 0 48 22 48 48v48H0v-48c0-26 22-48 48-48h48V32c0-18 14-32 32-32zM0 192h448v272c0 27-21 48-48 48H48c-26 0-48-21-48-48V192zm64 80v32c0 9 7 16 16 16h32c9 0 16-7 16-16v-32c0-9-7-16-16-16H80c-9 0-16 7-16 16zm128 0v32c0 9 7 16 16 16h32c9 0 16-7 16-16v-32c0-9-7-16-16-16h-32c-9 0-16 7-16 16zm144-16c-9 0-16 7-16 16v32c0 9 7 16 16 16h32c9 0 16-7 16-16v-32c0-9-7-16-16-16h-32zM64 400v32c0 9 7 16 16 16h32c9 0 16-7 16-16v-32c0-9-7-16-16-16H80c-9 0-16 7-16 16zm144-16c-9 0-16 7-16 16v32c0 9 7 16 16 16h32c9 0 16-7 16-16v-32c0-9-7-16-16-16h-32zm112 16v32c0 9 7 16 16 16h32c9 0 16-7 16-16v-32c0-9-7-16-16-16h-32c-9 0-16 7-16 16z"/></svg>',
];

const projects = [
  {
    'title': 'Learning Platform',
    'description': 'Admin-created content distribution system via different messengers.',
  },
  {
    'title': 'Healthcare App',
    'description': 'Application for children\' parents to track appointments, vaccinations, and other health-related data.',
  },
  {
    'title': 'Job Search Platform',
    'description': 'Platform for job seekers and employers to find each other.',
  },
  {
    'title': 'Sport Clubs Control Panel',
    'description': 'Panel for managing club members, events, finances and much more.',
  },
  {
    'title': 'Shop Management',
    'description': 'System for managing white-labels, shop products, orders, customers and other.',
  },
  {
    'title': 'Social Network Scheduler',
    'description': 'Application for scheduling posts in social networks.',
  },
];
</script>

<template>
  <section class="block" style="flex-direction: column; color: white; gap: 1rem; padding: 1rem;">
    <h2 v-animate-on-scroll style="margin-bottom: 2rem; font-size: 36px;">Projects I worked on</h2>

    <div class="projects-wrap">
      <div
          v-for="(project, i) in projects"
          :key="i"
          v-animate-on-scroll
          :data-delay="i % 2 === 0 ? 200 : 0"
          class="project glass-block"
      >
        <div class="icon-container" v-html="svgIcons[i]" />

        <div>
          <h3>{{ project.title }}</h3>

          <span style="font-weight: 100">{{ project.description }}</span>
        </div>
      </div>
    </div>
  </section>
</template>
