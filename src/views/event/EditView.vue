<script setup>
import { ref } from 'vue'
import { onBeforeRouteLeave } from 'vue-router'

defineProps({
  event: {
    type: Object,
  },
})

const unsavedChanges = ref(true)

onBeforeRouteLeave(() => {
  if (unsavedChanges.value) {
    const answer = window.confirm(
      'Do you really want to leave? You have unsaved changes.'
    )

    if (!answer) {
      return false
    }
  }
})
</script>

<template>
  <div v-if="event">
    <p>Edit the event here</p>
  </div>
</template>
