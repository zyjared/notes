<script setup lang='ts'>
import { computed } from 'vue'
import { icons } from './icons'

type Icon = 'github' | 'sun' | 'moon' | keyof typeof icons | { url: string }

const props = defineProps<{
  icon: Icon
}>()

const VPIcons = {
  github: 'vpi-social-github',
  sun: 'vpi-sun',
  moon: 'vpi-moon',
}

const isName = computed(() => typeof props.icon === 'string')
</script>

<template>
  <span
    class="icon"
    :class="isName ? VPIcons[props.icon as string] : ''"
    :style="isName
      ? icons[props.icon as string]
        ? {
          '--icon': `url(${icons[props.icon as string]})`,
        }
        : ''
      : { '--icon': `url(${props.icon})` }"
  />
</template>

<style scoped>
.icon {
    display: inline-block;
    width: 1em;
    height: 1em;
    mask-size: cover;
    color: inherit;
    background-color: currentColor;
    box-sizing: border-box;
    vertical-align: middle;
    mask: var(--icon) no-repeat;
}
</style>
