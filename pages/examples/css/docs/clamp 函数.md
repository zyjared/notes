<script setup>
import Code from '../code/clamp 函数.vue'
</script>

# clamp 函数

## 效果

<Code />

## 源码

:::code-group
```css [style]
.container {
  border: 1px solid var(--vp-c-divider);
  padding: 1rem;
  color: var(--vp-c-text-3);
  width: clamp(20rem, 50%, 90%);
  font-size: clamp(1rem, 2.5vw, 2rem);
}
```

```html [template]
<div class="container">
  <span class="font"> clamp 函数 </span>
</div>
```
:::