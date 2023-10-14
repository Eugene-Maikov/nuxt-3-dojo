<template>
  <div>
    <ProductDetails :product="product"/>
  </div>
</template>

<!-- id продукта -->
<script setup>
const {id} = useRoute().params
const uri = `https://fakestoreapi.com/products/${id}`

// Получитить продукт
const {data: product} = await useFetch(uri, {key: id})

if (!product.value) {
  throw createError({statusCode: 404, statusMessage: 'Продукт не найден', fatal: true})
}

definePageMeta({
  layout: 'products'
})
</script>

<style scoped></style>
