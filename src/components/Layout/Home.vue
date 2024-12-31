<script setup lang="ts">
defineProps({
  name: {
    type: String,
  },
  text: {
    type: String,
  },
  tagline: {
    type: String,
  },
})
</script>

<template>
  <article class="main">
    <h1 v-if="name" class="name">
      <span class="clip">
        {{ name }}
      </span>
    </h1>
    <p v-if="text" class="text">
      {{ text }}
    </p>
    <p v-if="tagline" class="tagline">
      {{ tagline }}
    </p>
  </article>
</template>

<style scoped>
.main {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    gap: .25rem;
    padding-top: 5rem;
}

@media (min-width: 640px) {
    .main {
        padding-top: 8rem;
    }
}

.name,
.text {
    font-size: clamp(32px, 5vw, 64px);
    font-weight: 700;
    line-height: 1.2;
    padding: 0;
    margin: 0;
}

.name {
    display: inline-block;
    background: linear-gradient(135deg, #52f0f5, #505ef9);
    background-clip: text;
}

.dark .name {
    filter: drop-shadow(0 0 5px #52f0f588);
}

.name .clip {
    color: transparent;
    font-weight: bold;
}

.tagline {
    margin: 1em 0 0;
    color: var(--vp-c-text-2);
    white-space: pre-wrap;
    font-size: 20px;
}

/* border  */

.tagline {
    --radius: .5em;
    --border-width: 2px;

    width: fit-content;
    position: relative;
    z-index: 1;
    overflow: hidden;
    border-radius: var(--radius);
    padding: .5em 1em;
}

.tagline::before,
.tagline::after {
    display: block;
    content: "";
    position: absolute;
    inset: 0;
    z-index: -1;
    background-color: var(--vp-c-bg);
}

.tagline::before {
    top: 0;
    left: 50%;
    transform-origin: left;
    width: 200%;
    background: linear-gradient(0deg, #fff0, #465efb, #fff0);
    animation: rotate 6s linear infinite;
}

.tagline::after {
    border-radius: var(--radius);
    margin: var(--border-width);
}

@keyframes rotate {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}
</style>
