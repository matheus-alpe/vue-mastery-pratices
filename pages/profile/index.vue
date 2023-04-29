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
        <h1>Profile Placeholder</h1>
        <p>A minimalist profile page</p>
      </hgroup>
    </div>
  </article>
</template>
