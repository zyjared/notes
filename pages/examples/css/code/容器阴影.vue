<template>
  <div class="wrapper">
    <div class="container">
      <span> .container </span>
    </div>
  </div>
</template>

<style scoped>
.wrapper,
.container {
  display: flex;
  align-items: center;
}

.container {
  justify-content: center;
  border-radius: 0.2rem;
  width: 10rem;
  height: 10rem;
  font-weight: bold;
  box-shadow:
    5px 5px 10px #16161830,
    -2px -2px 4px #ffffff;
}

.dark .container {
  box-shadow:
    5px 5px 10px #161618aa,
    -2px -2px 4px #ffffff10;
}
</style>
