<template>
  <div class="container">
    <span class="font"> clamp 函数 </span>
  </div>
</template>

<style scoped>
.container {
  border: 1px solid var(--vp-c-divider);
  padding: 1rem;
  color: var(--vp-c-text-3);
  width: clamp(20rem, 50%, 90%);
  font-size: clamp(1rem, 2.5vw, 2rem);
}
</style>
