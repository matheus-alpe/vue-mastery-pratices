<script setup>
import { inject } from 'vue'

const GStore = inject('GStore')

defineProps({
  id: {
    required: true,
  },
})
</script>

<template>
  <div v-if="GStore.event">
    <h1>{{ GStore.event.title }}</h1>

    <nav>
      <RouterLink :to="{ name: 'event-details' }">Details</RouterLink>
      |
      <RouterLink :to="{ name: 'event-register' }">Register</RouterLink>
      |
      <RouterLink :to="{ name: 'event-edit' }">Edit</RouterLink>
    </nav>

    <RouterView :event="GStore.event" />
  </div>
</template>
