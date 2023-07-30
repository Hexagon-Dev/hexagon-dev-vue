<template>
  <section class="block main">
    <div :style="[ rotating ? 'opacity: 1;' : 'opacity: .5;' ]" class="renderable" ref="renderable"/>
    <transition>
      <div v-if="!rotating" class="name-container">
        <h1 class="name">HEXAGON-DEV</h1>
        <h2 class="subname">{{ $t('subtitle').toString() }}</h2>
      </div>
    </transition>
    <transition>
      <div v-if="!rotating" class="locales">
        <button
          @click.prevent.stop="changeLocale(locale)"
          :class="{ 'active': $i18n.locale === locale }"
          :key="locale"
          v-for="locale in $i18n.availableLocales"
        >
          {{ locale.toUpperCase() }}
        </button>
      </div>
    </transition>
    <div class="scroll-div">
      <img class="handle" src="/handle.svg" alt="Handle">
    </div>
  </section>
</template>

<script>
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { Vector2 } from 'three/src/math/Vector2.js';
import { Mesh } from 'three/src/objects/Mesh.js';
import { WebGLRenderer } from 'three/src/renderers/WebGLRenderer.js';
import { Scene } from 'three/src/scenes/Scene.js';
import { PerspectiveCamera } from 'three/src/cameras/PerspectiveCamera.js';
import { DirectionalLight } from 'three/src/lights/DirectionalLight.js';
import { TorusGeometry } from 'three/src/geometries/TorusGeometry.js';
import { MeshNormalMaterial } from 'three/src/materials/MeshNormalMaterial.js';

export default {
  data() {
    return { rotating: false };
  },
  methods: {
    animate() {
      requestAnimationFrame(this.animate);
      this.orbit.update();
      this.composer.render();
    },
    changeLocale(locale) {
      if (locale === this.$i18n.locale) {
        return;
      }

      this.$i18n.locale = locale;
    },
  },
  mounted() {
    this.renderer = new WebGLRenderer();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.$refs.renderable.appendChild(this.renderer.domElement);

    this.camera = new PerspectiveCamera(60, window.innerWidth / window.innerHeight, 50, 200);
    this.camera.position.set(0, 0, 100);

    this.scene = new Scene();

    this.light = new DirectionalLight('hsl(0, 100%, 100%)');
    this.light.position.set(0, 0, 10);
    this.scene.add(this.light);

    const geometry = new TorusGeometry(30, 5, 3, 6);
    this.hexagon = new Mesh( geometry, new MeshNormalMaterial() );
    this.scene.add(this.hexagon);

    this.orbit = new OrbitControls(this.camera, this.renderer.domElement);
    this.orbit.update();
    this.orbit.enablePan = false;
    this.orbit.enableZoom = false;
    this.orbit.autoRotate = true;
    this.orbit.autoRotateSpeed = -2;
    this.orbit.enableDamping = true;
    this.orbit.maxPolarAngle = Math.PI / 2;
    this.orbit.minPolarAngle = Math.PI / 2;

    this.orbit.addEventListener('start', () => this.rotating = true);
    this.orbit.addEventListener('end', () => this.rotating = false);

    const renderScene = new RenderPass(this.scene, this.camera);
    const bloomPass = new UnrealBloomPass(
      new Vector2(window.innerWidth, window.innerHeight),
      3,
      1,
      0
    );

    this.composer = new EffectComposer(this.renderer);
    this.composer.addPass(renderScene);
    this.composer.addPass(bloomPass);

    this.animate();

    window.addEventListener('resize', () => {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();

      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.composer.setSize(window.innerWidth, window.innerHeight);
    }, false);
  },
};
</script>
