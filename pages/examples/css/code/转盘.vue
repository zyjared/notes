<script setup lang='ts'>
import { tryOnUnmounted } from '@vueuse/core'
import { computed, ref, shallowRef, watch } from 'vue'

interface Item {
  key: any
  label: string
  value: any
}

/**
 * 转盘的旋转持续时间 ms
 */
const duration = 5000

const color = '#5c73e7'
const fillColor = '#fff'
const strokeColor = '#5c73e7'
const strokeWidth = 1

const itmes = shallowRef<Item[]>([
  { key: 1, label: '吃饭', value: 'eat' },
  { key: 2, label: '睡觉', value: 'sleep' },
  { key: 3, label: '看电影', value: 'movie' },
  { key: 4, label: '打游戏', value: 'game' },
  { key: 5, label: '学习', value: 'study' },
])

// 布局
// -----------------------------------------

const Wheel = ref<HTMLElement | null>(null)
const base = computed(() => Wheel.value && itmes.value.length > 1
  ? ({
      degree: 360 / itmes.value.length,
      radius: Wheel.value.offsetWidth / 2,
    })
  : undefined,
)

const clipPath = computed(() => itmes.value.length && base.value
  ? getFanshapedPath(base.value)
  : '',
)

/**
 * 设矩形的宽为 `2 * radius`，高为 `radius`，
 * 则扇形的圆心在 `(radius, radius)`
 */
function getFanshapedPath(options: { radius: number, degree: number }) {
  const { radius, degree } = options

  const radian = degree * Math.PI / 360

  const x = radius * (1 - Math.abs(Math.sin(radian)))
  const y = radius * (1 - Math.abs(Math.cos(radian)))

  return `M ${radius}, ${radius} L ${x}, ${y} A ${radius}, ${radius} 0 0, 1 ${2 * radius - x}, ${y} Z`
}

// 旋转
// -----------------------------------------

const {
  index: wheelIndex,
  start,
  spinning,
  degree,
  preDegree,
} = useWheel(itmes.value.length, { duration })

const discStyle = computed(() => {
  return {
    '--duration': `${duration}ms`,
    '--rotate': `${degree.value + 360 * 10}deg`,
    '--pre-rotate': `${preDegree.value}deg`,
  }
})

function useWheel(count: number, options: { duration?: number } = {}) {
  const { duration = 5000 } = options

  const index = ref<undefined | number>(undefined)
  const spinning = ref(false)

  let timer: ReturnType<typeof setTimeout>

  const degree = ref(0)
  const preDegree = ref(0)

  function start() {
    if (spinning.value) {
      return
    }
    spinning.value = true

    // 随机选择
    const i = Math.floor(Math.random() * count)
    index.value = i

    // 旋转角度
    const each = 360 / count
    const deg = 360 - i * each + Math.floor((Math.random() - 0.5) * each)

    preDegree.value = degree.value
    degree.value = deg

    timer = setTimeout(() => {
      spinning.value = false
    }, duration)
  }

  function stop() {
    spinning.value = false
    preDegree.value = degree.value
    clearTimeout(timer)
    // ...
  }

  tryOnUnmounted(() => {
    stop()
  })

  return {
    index,
    spinning,
    start,
    stop,
    degree,
    preDegree,
  }
}
</script>

<template>
  <p>
    <span> 选中项：</span>
    <span>
      {{ spinning ? '请稍后...' : wheelIndex !== undefined ? itmes[wheelIndex].label : '未开始' }}
    </span>
  </p>
  <section
    class="wheel"
    :class="{ wheel__spinning: spinning }"
    :style="{
      '--color': color,
      '--fill': fillColor,
      '--stroke': strokeColor,
      '--duration': `${duration}ms`,
    }"
  >
    <div class="wheel-container">
      <div class="wheel-operator">
        <button class="btn" :disabled="spinning" @click="start">
          {{ spinning ? '正在选择' : '开始' }}
        </button>
      </div>
      <div ref="Wheel" class="wheel-disc" :style="discStyle">
        <svg
          v-for="(item, index) in itmes"
          :key="item.key"
          class="wheel-item"
          xmlns="http://www.w3.org/2000/svg"
          :style="{
            transform: `rotate(${base ? (base.degree * index) : 0}deg)`,
          }"
        >
          <path :d="clipPath" :fill="fillColor" :stroke="strokeColor" :stroke-width="strokeWidth" />
          <foreignObject x="0" y="0" width="100%" height="100%">
            <div class="wheel-item-content">
              <span>{{ item.label }}</span>
              <span>{{ item.value }}</span>
            </div>
          </foreignObject>
        </svg>
      </div>
    </div>
  </section>
</template>

<style scoped>
.wheel {
  --color: #fff;
  --fill: white;
  --stroke: slateblue;

  border-radius: 50%;
  box-shadow: var(--vp-shadow-2);
  width: fit-content;
  position: relative;
  padding: 0.5em;
  border: 1px solid var(--stroke);
}

.wheel-container::before {
  content: '';
  border: 20px solid transparent;
  border-top-color: var(--stroke);
  position: absolute;
  top: 0;
  left: 50%;
  z-index: 1;
  transform: translate(-50%, -15%);
}

.wheel-disc {
  position: relative;
  width: 300px;
  aspect-ratio: 1;
  background-color: var(--fill);
  color: var(--color);
  border-radius: 50%;
  overflow: hidden;
}

.wheel-item {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 50%;
  transform-origin: bottom center;
}

.wheel-item-content,
.wheel-operator {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.wheel-item-content {
  width: 100%;
  height: 100%;
  padding-bottom: 2em;
}

.wheel-operator {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 1;
  width: 80px;
  aspect-ratio: 1;
  transform: translate(-50%, -50%);
  background-color: var(--stroke);
  border-radius: 50%;
  overflow: hidden;
  box-shadow: var(--vp-shadow-2);
}

.wheel-operator .btn {
  width: 100%;
  height: 100%;
  color: var(--fill);
}

.wheel-operator .btn:disabled {
  cursor: wait;
  opacity: 0.75;
}

/*
 * 旋转
 * -----------------------------------
 */
.wheel-disc {
  --duration: 5000ms;
  --rotate: 0deg;
  --pre-rotate: 0deg;
  transform: rotate(var(--rotate));
}

.wheel__spinning .wheel-disc {
  animation: rotate var(--duration) ease-in-out forwards;
}

@keyframes rotate {
  from {
    transform: rotate(var(--pre-rotate));
  }
  to {
    transform: rotate(var(--rotate));
  }
}
</style>
