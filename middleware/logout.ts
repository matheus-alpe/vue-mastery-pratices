export default defineNuxtRouteMiddleware((to, from) => {
  const isAuthenticated = useCookie('is-authenticated')
  const currentUser = useCookie('current-user')

  isAuthenticated.value = ''
  currentUser.value = ''
  console.log('--- Logout Middleware ---')
})
