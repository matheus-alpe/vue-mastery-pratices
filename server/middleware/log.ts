export default defineEventHandler((event) => {
  console.log(new Date(Date.now()).toLocaleString(), '->', event.node.req.url)
})
