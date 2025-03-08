<template>
  <div class="container">
    .container
  </div>
</template>

<style scoped>
@property --rotation {
  syntax: '<angle>';
  inherits: false;
  initial-value: 0turn;
}

.container {
  position: relative;
  width: 10rem;
  aspect-ratio: 1 / 1;
  line-height: 10rem;
  text-align: center;
  border-radius: 0.5rem;

  overflow: hidden;
}

.container::before {
  content: '';
  position: absolute;
  z-index: -1;

  inset: -1em;
  filter: blur(0.5em);
  border: 1.5em solid;

  border-image: conic-gradient(from var(--rotation, 0turn), #fb3f00, #ff7e00, #ffea00, #00f3ff, #bb00ff, #fb3f00) 1;
  animation: 4s rotate linear infinite;
}

@keyframes rotate {
  from {
    --rotation: 0turn;
  }
  to {
    --rotation: 1turn;
  }
}
</style>
