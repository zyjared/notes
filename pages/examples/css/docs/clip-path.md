<script setup>
import Code from '../code/clip-path.vue'
</script>

# clip-path

## 效果

<Code />

## 源码

:::code-group
```css [style]
.container {
  width: 200px;
  aspect-ratio: 1 / 1;
  background: linear-gradient(135deg, #52dff5aa, #5296f5aa, #4676fbaa);

  text-align: center;

  --radius: 32px;
  --content-bg: #fff;
  color: #000;

  border-radius: var(--radius);
  overflow: hidden;
  cursor: pointer;

  box-shadow: var(--vp-shadow-3);
}

.container::before {
  display: block;
  content: '';
  margin-top: 68px;
  height: 32px;
  width: 200px;
  background: var(--content-bg);
  clip-path: path('M 200 0 A 32 32 0 0 1 168 32 L 200 32 Z ');
  transition: margin-top 0.3s ease-in-out;
}

.container:hover {
  &::before {
    margin-top: var(--radius);
  }
}

.container .content {
  border-top-left-radius: var(--radius);
  height: calc(100% - 2 * var(--radius));
  line-height: 100px;
  background: var(--content-bg);
}
```

```html [template]
<div class="container">
  <div class="content">
    .content
  </div>
</div>
```
:::