<script setup lang='ts'>
import DefaultTheme from 'vitepress/theme'
import LeafeonModel from './LeafeonModel.vue'
import Particles from './Particles.vue'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #home-hero-image>
      <div class="app-model-container">
        <LeafeonModel class="app-model" :size="500" :scale="2" />
      </div>
    </template>
  </Layout>
  <div class="app-bg">
    <Particles />
  </div>
</template>

<style>
.app-model-container {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: visible;
}

.app-model {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.app-bg {
    position: relative;
    z-index: -1;
}

:root {
  --vp-nav-bg-color: #f6f6f7aa;
  --vp-local-nav-bg-color: #f6f6f7aa;
  --vp-sidebar-bg-color: #f6f6f7;
}

.dark {
  --vp-nav-bg-color: #161618aa;
  --vp-local-nav-bg-color: #161618aa;
  --vp-sidebar-bg-color: #161618;
}

@media (min-width: 960px) {
  :root {
    --vp-sidebar-bg-color: #f6f6f7aa;
  }

  .dark {
    --vp-sidebar-bg-color: #161618aa;
  }
}

.curtain,
.is-home ~ .VPFooter,
.VPLocalNav,
.VPNavBar:has(.home.top),
.VPNavBar:not(.home.top) .content-body {
  background-color: unset !important;
}

.VPNavBar:not(.home.top),
.VPLocalNav .container {
  background-color: var(--vp-nav-bg-color);
  backdrop-filter: blur(2px);
}

.VPLocalNav {
  border-bottom: unset !important;
}

.VPLocalNav .container {
  border-bottom: 1px solid var(--vp-c-gutter);
}
</style>
