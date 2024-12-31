<script setup lang='ts'>
import type { CssColor } from '@typings/css'
import { computed, type PropType } from 'vue'
import Card from './index.vue'

const props = defineProps({
  barColor: {
    type: String as PropType<CssColor>,
    default: 'indigo-3',
  },
  title: {
    type: String,
    default: '',
  },
})

const barColor = computed(() => `var(--vp-c-${props.barColor})`)
</script>

<template>
  <Card class="card-bar" :title="title">
    <slot />
  </Card>
</template>

<style scoped>
.card-bar {

    /* 卡片圆角 */
    --radius: .5rem;

    /** 卡片的 padding */
    --padding: .75rem;

    /* 左侧 bar 的最终宽度 */
    --bar-w: .4rem;

    position: relative;
    border-radius: var(--radius);
    padding: var(--padding) var(--padding) var(--padding) calc(var(--padding) + var(--bar-w) * 0.5);
}

.card-bar::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    background-color: v-bind(barColor);
    clip-path: inset(0 round var(--radius));
    animation: 1s show .2s ease-in-out 1 forwards;
    transition: var(--zy-transition-all);
}

@keyframes show {
    0% {
        clip-path: inset(0 round var(--radius));
    }

    20% {
        clip-path: inset(var(--padding) round var(--radius));
    }

    50% {
        clip-path: inset(var(--padding) calc(100% - var(--bar-w) - var(--padding)) var(--padding) var(--padding) round var(--radius));
    }

    /* 70% {
        clip-path: inset(var(--padding) calc(100% - var(--bar-w)) var(--padding) 0 round var(--radius));
        transform: translateX(0);
    } */

    100% {
        clip-path: inset(var(--padding) calc(100% - var(--bar-w)) var(--padding) 0 round var(--radius));
        transform: translateX(calc(var(--bar-w) * -0.5));
    }
}
</style>
