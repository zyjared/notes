<script setup lang='ts'>
import { computed, type PropType } from 'vue'

const props = defineProps({
  shadowLevel: {
    type: Number as PropType<1 | 2 | 3 | 4 | 5>,
    default: 2,
  },
  title: {
    type: String,
    default: '',
  },
})

const shadow = computed(() => `var(--vp-shadow-${props.shadowLevel})`)
</script>

<template>
  <div class="card">
    <div v-if="title" class="title">
      {{ title }}
    </div>
    <slot />
  </div>
</template>

<style scoped>
.card {
    background-color: var(--vp-c-bg-soft);
    padding: 1rem;
    border-radius: .5rem;
    box-shadow: v-bind(shadow);
}

.title {
    font-weight: bold;
    color: var(--vp-c-text-2);
    margin-bottom: .25rem;
}
</style>
