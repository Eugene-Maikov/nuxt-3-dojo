<!-- Вывод таблицы с продуктами -->
<template>
  <div>
    <div class="grid grid-cols-4 gap-5">
      <div v-for="p in products">
        <ProductCard :product="p"/>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'products'
})

// Вызов продуктов
const {data: products} = await useFetch('https://fakestoreapi.com/products')

useHead({
  title: 'Nuxt Dojo | Товары',
  meta: [
    {name: 'description', content: 'Nuxt 3 Товары'}
  ]
})
</script>

<style scoped></style>