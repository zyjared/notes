<script setup lang='ts'>
defineProps({
  speed: {
    type: Number,
    default: -2,
  },
  xsSpeed: {
    type: Number,
    default: -2,
  },
  mobileSpeed: {
    type: Number,
    default: -2,
  },
  tabletSpeed: {
    type: Number,
    default: -2,
  },
  desktopSpeed: {
    type: Number,
    default: -2,
  },
  percentage: {
    type: Number,
    default: 0.5,
  },
  zIndex: {
    type: Number,
    default: 0,
  },
})
</script>

<template>
  <div
    class="rellax"
    :data-rellax-speed="speed"
    :data-rellax-xs-speed="xsSpeed"
    :data-rellax-mobile-speed="mobileSpeed"
    :data-rellax-tablet-speed="tabletSpeed"
    :data-rellax-desktop-speed="desktopSpeed"
    :data-rellax-percentage="percentage"
    :data-rellax-z-index="zIndex"
  >
    <slot />
  </div>
</template>
