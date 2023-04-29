export default defineNuxtRouteMiddleware(async (to, from) => {
  console.log('--- Error Handler Global Middleware ---')

  // if (to.path === '/login') {
  //   throw createError({
  //     statusCode: 405,
  //     statusMessage: 'Oh snap it broke!'
  //   })
  // }

  // return abortNavigation('Failed at global middleware')

  // try {
  //   const data = await fetch('/api/this-path')
  //   return navigateTo('profile', data)
  // } catch (error) {
  //   return abortNavigation(error)
  // }
})
