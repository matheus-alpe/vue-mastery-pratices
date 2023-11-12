<script setup>
const { data, error } = await useFetch('/api/asdsa')
</script>

<template>
  <h1>Home page for nuxt 3</h1>

  <div v-if="data">
      <img :src="data.sprite"/>
      <h2>{{ data.id }}: {{ data.name }}</h2>
  </div>

  <p v-else>{{ error }}</p>
</template>
