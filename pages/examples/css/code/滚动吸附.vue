<template>
  <div class="container-1">
    <div
      v-for="n in 10" :key="n" class="item"
      :style="`background-color: ${n % 2 === 0 ? '#fca5a5' : '#64748b'}`"
    >
      {{ n }}
    </div>
  </div>

  <br>

  <div class="container-2">
    <div
      v-for="n in 15" :key="n" class="item"
      :style="`background-color: ${n % 2 === 0 ? '#334155' : '#34d399'}`"
    >
      {{ n }}
    </div>
  </div>
</template>

<style scoped>
.container-1,
.container-2,
.item {
  height: 200px;
  line-height: 200px;
  font-size: 50px;
  font-weight: bold;
  text-align: center;
  box-sizing: border-box;
}

.container-1,
.container-2 {
  overflow-y: scroll;
  overflow-x: hidden;
  scroll-snap-type: y mandatory;
}

.item {
  scroll-snap-align: start;
  scroll-snap-stop: always;
}

.container-2 .item:not(:first-child, :last-child) {
  height: 100px;
  line-height: 100px;
  scroll-snap-align: center;
}
</style>
