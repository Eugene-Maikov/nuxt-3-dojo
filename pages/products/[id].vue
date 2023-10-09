<template>
  <div>
    <p>Products details for {{ id }}</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ipsum quidem delectus temporibus reprehenderit
      facilis quam eaque aut culpa numquam?</p>
  </div>
</template>

<script setup>
const { id } = useRoute().params
</script>

<style scoped></style>