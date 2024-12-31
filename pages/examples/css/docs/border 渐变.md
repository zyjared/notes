<script setup>
import Code from '../code/border 渐变.vue'
</script>

# border 渐变

## 效果

<Code />

## 源码

:::code-group
```css [style]
.container {
  border: 2px solid transparent;
  border-image: linear-gradient(90deg, #14b8a6, #7c3aed) 1;
  padding: 1em;
}
```

```html [template]
<div class="container">
  <div> .content </div>
</div>
```
:::