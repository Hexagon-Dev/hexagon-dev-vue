<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
import { WebGLRenderer } from 'three/src/renderers/WebGLRenderer';
import { PerspectiveCamera } from 'three/src/cameras/PerspectiveCamera';
import { Scene } from 'three/src/scenes/Scene';
import { DirectionalLight } from 'three/src/lights/DirectionalLight';
import { TorusGeometry } from 'three/src/geometries/TorusGeometry';
import { Mesh } from 'three/src/objects/Mesh';
import { MeshNormalMaterial } from 'three/src/materials/MeshNormalMaterial';
import { OrbitControls } from 'three/addons/controls/OrbitControls';
import { RenderPass } from 'three/addons/postprocessing/RenderPass';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass';
import { Vector2 } from 'three/src/math/Vector2';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer';

const scrollTop = ref(0);

function onScroll() {
  scrollTop.value = window.scrollY;
}

onMounted(() => document.addEventListener('scroll', onScroll));
onBeforeUnmount(() => document.removeEventListener('scroll', onScroll));

const rotating = ref(false);

const opacity = computed(() => {
  if (scrollTop.value > 0) {
    return 0.4;
  }

  return rotating.value ? 1 : 0.6;
})

function animate() {
  requestAnimationFrame(animate);
  orbit.update();
  composer.render();
}

const renderer = new WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

const camera = new PerspectiveCamera(60, window.innerWidth / window.innerHeight, 50, 200);
camera.position.set(0, 0, 100);

const scene = new Scene();

const light = new DirectionalLight('hsl(0, 100%, 100%)');
light.position.set(0, 0, 10);
scene.add(light);
scene.add(new Mesh(new TorusGeometry(30, 5, 3, 6), new MeshNormalMaterial()));

const orbit = new OrbitControls(camera, renderer.domElement);
orbit.update();
orbit.enablePan = false;
orbit.enableZoom = false;
orbit.autoRotate = true;
orbit.autoRotateSpeed = -2;
orbit.enableDamping = true;
orbit.maxPolarAngle = Math.PI / 2;
orbit.minPolarAngle = Math.PI / 2;

orbit.addEventListener('start', () => rotating.value = true);
orbit.addEventListener('end', () => rotating.value = false);

const composer = new EffectComposer(renderer);
composer.addPass(new RenderPass(scene, camera));
composer.addPass(new UnrealBloomPass(new Vector2(window.innerWidth, window.innerHeight), 3, 1, 0));

animate();

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
  composer.setSize(window.innerWidth, window.innerHeight);
}, false);

onMounted(() => document.getElementById('renderable').appendChild(renderer.domElement));
</script>

<template>
  <section class="block main">
    <div :style="{ opacity }" class="renderable" id="renderable"/>
    <transition>
      <div v-if="!rotating" class="name-container">
        <h1 class="name">HEXAGON-DEV</h1>
        <h2 class="role">FULL-STACK DEVELOPER</h2>
      </div>
    </transition>

    <div class="scroll-div">
      <svg class="handle" xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 448 512"><path d="M32 288a32 32 0 1 0 0 64h384a32 32 0 1 0 0-64H32zm0-128a32 32 0 1 0 0 64h384a32 32 0 1 0 0-64H32z"/></svg>
    </div>
  </section>
</template>

<style scoped>
.name {
  font-size: 8cqw;
  -webkit-text-stroke: 1px white;
  z-index: 5;
}
.role {
  font-size: 2cqw;
  color: white;
  z-index: 5;
}
.scroll-div {
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 0;
  width: 100%;
  cursor: default;
  height: 20%;
  z-index: 40;
}
.handle { display: none }
.name-container {
  pointer-events: none;
  z-index: 10;
}
.renderable {
  position: fixed;
  left: 0;
  top: 0;
  transition-duration: .3s;
}

@media only screen and (max-width: 900px) {
  .name { font-size: 12cqw }
  .role { font-size: 4cqw }
  .name-container {
    padding: 1rem;
    text-align: center;
  }
  .handle {
    display: block;
    width: 3rem;
  }
}
</style>