export default defineNuxtRouteMiddleware((to, from) => {
  const isAuthenticated = useCookie('is-authenticated')
  const currentUser = useCookie('current-user')

  if (!isAuthenticated.value) {
    return navigateTo('/login')
  }

  if (currentUser.value !== to.params.username) {
    return navigateTo('/profile/' + currentUser.value)
  }
})
