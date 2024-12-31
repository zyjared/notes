<script setup lang='ts'>
import Rellax from 'rellax'
import { onMounted, onUnmounted } from 'vue'

const props = defineProps<Rellax.RellaxOptions>()

let rellax: Rellax.RellaxInstance
onMounted(() => {
  rellax = new Rellax('.rellax', props)
})

onUnmounted(() => {
  rellax && rellax.destroy()
})
</script>

<template>
  <div class="rellax-container">
    <slot />
  </div>
</template>
