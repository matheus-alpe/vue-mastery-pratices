<script setup>
useHead({
  link: [
    { rel: 'stylesheet', href: '/css/pico.min.css' },
    { rel: 'stylesheet', href: '/css/custom.css' }
  ],
  bodyAttrs: {
    'data-theme': 'dark'
  }
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
