<script setup lang="ts">
import { onMounted, shallowRef } from 'vue'

const createArray = (length: number) => Array.from({ length })

const paragraphs = shallowRef<string[]>(createArray(15).map(() => '段落渐隐'))

onMounted(async () => {
  // eslint-disable-next-line ts/ban-ts-comment
  // @ts-expect-error
  const { fakerZH_CN: faker } = await import('https://esm.sh/@faker-js/faker')
  paragraphs.value = createArray(15).map(() => faker.music.songName())
})
</script>

<template>
  <div class="container">
    <section class="content">
      <div class="content-body">
        <p v-for="(p, index) in paragraphs" :key="index">
          {{ p }}
        </p>
      </div>
    </section>
  </div>
</template>

<style scoped>
.container {
  --bg: var(--vp-c-bg-alt);
  background-color: var(--bg);
  padding: 1em;
  border-radius: 10px;
}

.content {
  height: 300px;
  mask-image: linear-gradient(to bottom, transparent 0%, #000 5%, #000 50%, transparent 100%);
  mask-size: 100% 100%;
}

.content-body {
  width: 100%;
  height: 100%;
  padding-bottom: 150px;
  text-align: center;
  overflow-y: scroll;
}

.content-body::-webkit-scrollbar {
  width: 0;
}
</style>
