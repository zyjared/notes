<script setup lang="ts">
import { ref } from 'vue'

interface Props {
  link: string
  text?: string
  lazy?: boolean
  icon?: string
}

const props = defineProps<Props>()

const iconError = ref(false)

function handleIconError(_img?: HTMLImageElement) {
  iconError.value = true
}

function onIconMounted(el: HTMLImageElement) {
  return el ? el.onerror = () => handleIconError(el) : undefined
}
</script>

<template>
  <a class="link-bar" :href="props.link" :class="{ 'link-bar-noi': !props.icon }" :target="props.link.startsWith('http') ? '_blank' : '_self'">
    <span v-if="props.icon" class="link__i" :class="{ 'link__i-error': iconError }">
      <img :ref="onIconMounted" :src="props.icon" :loading="props.lazy ? 'lazy' : 'eager'" title="icon">
    </span>
    <span>
      <slot>{{ props.text || props.link }}</slot>
    </span>
  </a>
</template>

<style scoped>
.link-bar {
  display: inline-block;
  text-decoration: none;
  border-radius: 999px;
  color: inherit;
  background-color: var(--vp-c-bg-soft);
  transition: var(--zy-transition-all);
  padding: 0.5rem 1rem;
}

.link-bar-noi {
  padding: 0.5rem 1rem;
}

.link-bar,
.link-bar span {
  vertical-align: middle;
}

.link-bar:hover {
  color: var(--vp-c-brand-1);
  box-shadow: var(--vp-shadow-1);
}

.link__i {
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  overflow: hidden;
  padding: 3px;
  box-sizing: border-box;
  box-shadow: var(--vp-shadow-1);
  transform: translate(-0.35rem);
}

.link__i-error {
  border-radius: 0;
  background: linear-gradient(125deg, var(--vp-c-brand-1), var(--vp-c-brand-2)) !important;
  clip-path: inset(3px round 0.25rem);
}

.link__i img {
  width: 100%;
  height: 100%;
  border-radius: inherit;
  object-fit: cover;
}

.link__i-error > img {
  display: none;
}
</style>
