<template>
  <div class="glass-block" :style="style">
    <div ref="el" style="height: 100%">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref } from 'vue';

const props = defineProps({
  padding: { type: Number, default: 16 },
  depth: { type: Number, default: 10 },
  radius: { type: Number, default: 12 },
  strength: { type: Number, default: 100 },
  chromaticAberration: { type: Number, default: 60 },
  blur: { type: Number, default: 2 },
});

const el = ref();
const height = ref();
const width = ref();
const resizeObserver = new ResizeObserver(async () => {
  await nextTick();

  height.value = el.value.offsetHeight;
  width.value = el.value.scrollWidth;
});

onMounted(() => resizeObserver.observe(el.value));
onBeforeUnmount(() => resizeObserver.unobserve(el.value));

function getDisplacementMap({ height, width, radius, depth }) {
  return (
      'data:image/svg+xml;utf8,' +
      encodeURIComponent(
          `<svg height="${height}" width="${width}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
        <style>.mix { mix-blend-mode: screen; }</style>
        <defs>
          <linearGradient id="Y" x1="0" x2="0" y1="${Math.ceil(
              (radius / height) * 15
          )}%" y2="${Math.floor(100 - (radius / height) * 15)}%">
            <stop offset="0%" stop-color="#0F0" />
            <stop offset="100%" stop-color="#000" />
          </linearGradient>
          <linearGradient id="X" x1="${Math.ceil(
              (radius / width) * 15
          )}%" x2="${Math.floor(100 - (radius / width) * 15)}%" y1="0" y2="0">
            <stop offset="0%" stop-color="#F00" />
            <stop offset="100%" stop-color="#000" />
          </linearGradient>
        </defs>
        <rect x="0" y="0" height="${height}" width="${width}" fill="#808080" />
        <g filter="blur(2px)">
          <rect x="0" y="0" height="${height}" width="${width}" fill="#000080" />
          <rect x="0" y="0" height="${height}" width="${width}" fill="url(#Y)" class="mix" />
          <rect x="0" y="0" height="${height}" width="${width}" fill="url(#X)" class="mix" />
          <rect x="${depth}" y="${depth}" height="${height - 2 * depth}" width="${width - 2 * depth}" fill="#808080" rx="${radius}" ry="${radius}" filter="blur(${depth}px)" />
        </g>
      </svg>`
      )
  );
}

function getDisplacementFilter({ height, width, radius, depth, strength = 100, chromaticAberration = 0 }) {
  return (
      'data:image/svg+xml;utf8,' +
      encodeURIComponent(
          `<svg height="${height}" width="${width}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="displace" color-interpolation-filters="sRGB">
            <feImage x="0" y="0" height="${height}" width="${width}" href="${getDisplacementMap({ height, width, radius, depth })}" result="displacementMap" />
            <feDisplacementMap transform-origin="center" in="SourceGraphic" in2="displacementMap" scale="${strength + chromaticAberration * 2}" xChannelSelector="R" yChannelSelector="G" />
            <feColorMatrix type="matrix" values="1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" result="displacedR" />
            <feDisplacementMap in="SourceGraphic" in2="displacementMap" scale="${strength + chromaticAberration}" xChannelSelector="R" yChannelSelector="G" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 1 0" result="displacedG" />
            <feDisplacementMap in="SourceGraphic" in2="displacementMap" scale="${strength}" xChannelSelector="R" yChannelSelector="G" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 1 0" result="displacedB" />
            <feBlend in="displacedR" in2="displacedG" mode="screen"/>
            <feBlend in2="displacedB" mode="screen"/>
          </filter>
        </defs>
      </svg>`
      ) + '#displace'
  );
}

const style = computed(() => {
  if (!height.value || !width.value) {
    return {};
  }

  return {
    borderRadius: `${props.radius}px`,
    boxShadow: 'inset 0 0 4px 0px white',
    willChange: 'transform, filter, backdrop-filter',
    backdropFilter: `blur(${props.blur / 2}px) url('${getDisplacementFilter({
      height: height.value + (props.padding * 2),
      width: width.value + (props.padding * 2),
      radius: props.radius,
      depth: props.depth,
      strength: props.strength,
      chromaticAberration: props.chromaticAberration,
    })}') blur(${props.blur}px) brightness(1.1) saturate(1.5)`,
  };
})
</script>
