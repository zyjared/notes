
<script setup>
import Code from '../border 动画.vue'
</script>

# border 动画

## 效果

<Code />

## 源码

::: code-group
```css
.container {
  --radius: 6px;
  --border-width: 2px;

  width: fit-content;
  position: relative;
  z-index: 1;
  overflow: hidden;
  border-radius: var(--radius);
  padding: 0.5em 0.75em;
}

.container::before,
.container::after {
  display: block;
  content: '';
  position: absolute;
  inset: 0;
  z-index: -1;
  background-color: var(--vp-c-bg);
}

.container::before {
  top: 0;
  left: 50%;
  z-index: -2;
  transform-origin: left;
  width: 200%;
  background: linear-gradient(0deg, #fff0, #465efb, #fff0);
  animation: rotate 6s linear infinite;
}

.container::after {
  margin: var(--border-width);
  border-radius: var(--radius);
  outline: 1px solid var(--vp-c-border);
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
```

```html
<div class="container">
  .container
</div>
```
:::
