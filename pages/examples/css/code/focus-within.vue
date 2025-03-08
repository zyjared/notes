<template>
  <form class="form">
    <label>
      <span>爱好</span>
      <select name="hobby">
        <option value="eat">吃饭</option>
        <option value="sleep">睡觉</option>
      </select>
    </label>
  </form>
</template>

<style scoped>
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
</style>
