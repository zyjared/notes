<template>
  <section class="container">
    <div class="glass">
      <span> .glass </span>
    </div>
  </section>
</template>

<style scoped>
.container {
  position: relative;
  box-sizing: 1px solid var(--vp-c-divider);
  height: 10rem;
  padding: 2rem;
}

.container::before,
.container::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  height: 10rem;
  width: 10rem;
  background-color: tomato;
  border-radius: 50%;
}

.container::after {
  background-color: slateblue;
  left: auto;
  top: auto;
  right: 5rem;
  bottom: 0;
  border-radius: 0.5rem;
}

.glass {
  background-color: rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(5px);
  border-radius: 0.5rem;
  padding: 1rem;
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
}

.dark .glass {
  background-color: rgba(255, 255, 255, 0.1);
}
</style>
