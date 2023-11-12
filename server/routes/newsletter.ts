/*
- Server routes intercept requests and return a response to the user
- use /pages for client-related logic
*/
export default defineEventHandler((event) => {
    // can redirect too
    return sendRedirect(event, 'test', 302)
})
