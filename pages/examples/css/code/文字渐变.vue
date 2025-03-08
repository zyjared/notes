<template>
  <div class="container">
    <span> 文字渐变 </span>
  </div>
</template>

<style scoped>
.container {
  display: inline-block;
  background: linear-gradient(135deg, #52f0f5, #505ef9);
  background-clip: text;
}

.container span {
  color: transparent;
  font-size: 2rem;
  line-height: 2rem;
  font-weight: bold;
}
</style>
