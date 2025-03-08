<template>
  <article class="article">
    <h1>Counter</h1>
    <section v-for="i in 10" :key="i">
      <h2>二级标题</h2>
      <h3 v-for="j in 5" :key="j">
        三级标题
      </h3>
    </section>
  </article>
</template>

<style scoped>
.article {
  counter-reset: section;
  border: 1px solid var(--vp-c-divider);
  padding: 1rem;
  box-sizing: border-box;
  height: 300px;
  overflow-y: scroll;
}

.article section {
  counter-reset: paragraph;
}

.article h2 {
  margin: 0;
}

.article h2::before {
  counter-increment: section;
  content: counter(section) '. ';
  color: skyblue;
}

.article h3::before {
  counter-increment: paragraph;
  content: counter(section) '.' counter(paragraph) ' ';
  color: tomato;
}
</style>
