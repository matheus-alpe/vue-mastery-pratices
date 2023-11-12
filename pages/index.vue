<script setup>
const { data } = await useFetch('/api/pikachu')
</script>

<template>
  <h1>Home page for nuxt 3</h1>

  <div>
      <img :src="data.sprite"/>
      <h2>{{ data.id }}: {{ data.name }}</h2>
  </div>
</template>
