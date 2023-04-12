<script setup>
defineProps({
  resource: {
    type: String,
    default: 'page',
  },
})
</script>

<template>
  <h1>Oops!</h1>
  <h3>the {{ resource }} you're looking for is not here.</h3>

  <nav>
    <RouterLink :to="{ name: 'event-list' }">Back to the home page</RouterLink>
  </nav>
</template>
