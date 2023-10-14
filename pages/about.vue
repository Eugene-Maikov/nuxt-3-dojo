<template>
  <div>
    <h2>About</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Odio voluptates cumque animi ipsa, dicta beatae molestias
      est consequatur accusantium tempore.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Odio voluptates cumque animi ipsa, dicta beatae molestias
      est consequatur accusantium tempore.</p>
  </div>
  <div>{{ data }}</div>
</template>

<script setup>
const {data} = await useFetch('/api/currency/GBP')
</script>

<style scoped>
h2 {
  margin-bottom: 20px;
  font-size: 36px;
}

p {
  margin: 20px 0;
}
</style>