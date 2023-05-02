<script setup>
import { ref } from 'vue'
import ProductDisplay from './components/ProductDisplay.vue'

const cart = ref([])
const premium = ref(true)
  
function updateCart(id) {
  cart.value.push(id)
}
</script>

<template>
  <div class="h-16 mb-6 bg-gradient-to-r from-ocean to-leaf"></div>

  <div class="my-6 mx-24 p-7 mist-border-1 bg-white float-right">Cart({{ cart.length }})</div>
  <product-display :premium="premium" @add-to-cart="updateCart"></product-display>
</template>
