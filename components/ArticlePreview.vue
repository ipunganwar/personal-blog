<template>
  <li class="transition-all duration-500 ease-in-out">
    <a :href="`/blog/${article.slug}`">
      <nuxt-img
        class="rounded-lg"
        :src="article.img"
        preset="preview"
        width="400"
        height="300"
      />
      <ul v-if="article.tags" class="flex space-x-3 mt-2">
        <li class="text-gray-400 font-bold" v-for="tag in article.tags" :key="tag">
          {{ tag }}
        </li>
      </ul>
      <h2 class="mt-2 text-3xl font-semibold">{{ article.title }}</h2>
    </a>
  </li>
</template>

<script>
export default {
  props: {
    article: Object,
  }
}
</script>