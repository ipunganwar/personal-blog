<template>
  <div class="pt-24 p-24">
    <h1 class="text-7xl font-black text-center">New on the blog</h1>
    <ul class="grid grid-cols-3 gap-8 mt-8">
      <ArticlePreview v-for="article in articles" :key="article.slug" :article="article"></ArticlePreview>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const articles = await $content('articles', params.slug).fetch()

    return { articles }
  },
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>