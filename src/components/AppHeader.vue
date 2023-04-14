<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AppHeader',

  data() {
    return {
      loggedIn: false
    }
  }
})
</script>

<template>
  <div>
    <button v-show="loggedIn">Logout</button>
  </div>
</template>

<style></style>
