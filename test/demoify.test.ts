import { describe, expect, it } from 'vitest'
import { matchAllTags } from '../src/node/plugins/vitePluginDemoify/match'
import { transformCodeToMd } from '../src/node/plugins/vitePluginDemoify/transform'

describe('demoifyPlugin', () => {
  const v = `
<script setup lang="ts">
console.log('hello world')
</script>
<template>
  <div>hello world</div>
</template>
<style scoped>
div { color: red; }
</style>
`

  describe('match', () => {
    it('matchAllTags', () => {
      expect(matchAllTags(v, 'script')).toMatchObject([{ code: `console.log('hello world')` }])
    })

    it('matchAllTags - html', () => {
      expect(matchAllTags(v, 'template')).toMatchObject([{ code: '<div>hello world</div>' }])
    })
  })

  describe('transform', () => {
    it('transformCodeToMd', () => {
      expect(transformCodeToMd(
        { code: v, source: '/code.vue', file: '/docs/code.md' },
      )).contains(`import Code from '../code.vue'`)
    })
  })
})
