<template>
  <section class="block main">
    <div :style="[ rotating ? 'opacity: 1;' : 'opacity: .5;' ]" class="renderable" id="renderable"/>
    <transition>
      <div v-if="!rotating" class="name-container">
        <h1 class="name">HEXAGON-DEV</h1>
        <h2 class="subname">FULL-STACK DEVELOPER</h2>
      </div>
    </transition>

    <div class="scroll-div">
      <svg class="handle" xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 448 512"><path d="M32 288a32 32 0 1 0 0 64h384a32 32 0 1 0 0-64H32zm0-128a32 32 0 1 0 0 64h384a32 32 0 1 0 0-64H32z"/></svg>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue';
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

const rotating = ref(false);

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
