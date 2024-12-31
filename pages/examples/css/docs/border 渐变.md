
<script setup>
import Code from '../border 渐变.vue'
</script>

# border 渐变

## 效果

<Code />

## 源码

::: code-group
```css
.container {
  border: 2px solid transparent;
  border-image: linear-gradient(90deg, #14b8a6, #7c3aed) 1;
  padding: 1em;
}
```

```html
<div class="container">
  <div> .content </div>
</div>
```
:::
