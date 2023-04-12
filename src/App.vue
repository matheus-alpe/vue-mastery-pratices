<script setup>
import { inject } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

const GStore = inject('GStore')
</script>

<template>
  <div id="layout">
    <div v-if="GStore.flashMessage" id="flashMessage">
      {{ GStore.flashMessage }}
    </div>

    <header>
      <div class="wrapper">
        <nav>
          <RouterLink :to="{ name: 'event-list' }">Events</RouterLink> |
          <RouterLink :to="{ name: 'about' }">About</RouterLink>
        </nav>
      </div>
    </header>
    <RouterView />
  </div>
</template>

<style>
@keyframes yellow-fade {
  from {
    background: yellow;
  }

  to {
    background: transparent;
  }
}

#flashMessage {
  animation: yellow-fade 3s;
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
}

#layout {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
nav {
  display: flex;
  justify-content: center;
  gap: 10px;
  padding: 30px;
}
nav a {
  font-weight: bold;
  color: #2c3e50;
}
nav a.router-link-exact-active {
  color: #42b983;
}
h2 {
  font-size: 20px;
}
</style>
