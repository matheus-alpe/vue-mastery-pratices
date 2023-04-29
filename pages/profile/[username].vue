<script setup>
definePageMeta({
  middleware: function (to, from) {
    const isAuthenticated = useCookie('is-authenticated')
    const currentUser = useCookie('current-user')

    if (!isAuthenticated.value) {
      return navigateTo('/login')
    }

    if (currentUser.value !== to.params.username) {
      return navigateTo('/profile/' + currentUser.value)
    }
  }
})
</script>

<template>
  <article class="grid">
    <div>
      <hgroup>
        <h1>Profile for "{{ $route.params.username }}"</h1>
        <h2>This is a simple user card.</h2>
      </hgroup>
      <nuxt-link to="/logout">Logout</nuxt-link>
    </div>
    <div></div>
  </article>
</template>

<style lang="scss" scoped></style>
