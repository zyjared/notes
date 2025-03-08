<script setup>
import Code from '../code/focus-within.vue'
</script>

# focus-within

## 效果

<Code />

## 源码

:::code-group
```css [style]
.form label:focus-within span {
  color: tomato;
}

.form select {
  width: 8em;
  padding: 0 0.5em;
  margin-left: 0.5em;
  text-align: center;
  border: 1px solid skyblue;
}
```

```html [template]
<form class="form">
  <label>
    <span>爱好</span>
    <select name="hobby">
      <option value="eat">吃饭</option>
      <option value="sleep">睡觉</option>
    </select>
  </label>
</form>
```
:::