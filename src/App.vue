<script setup>
import { ref } from 'vue';

import NotificationToast from './components/NotificationToast.vue'
import PostCard from './components/PostCard.vue';

const message = ref('Image uploaded succesfully')

const clearNotification = () => {
  message.value = ''
}
</script>

<template>
  <NotificationToast 
    status="success"
    :message=message
    @clear-notification="clearNotification"
  />
  <PostCard />
</template>
