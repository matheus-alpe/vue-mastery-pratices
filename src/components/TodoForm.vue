<script setup>
import { ref } from 'vue'
import { useTodoListStore } from '@/stores/todoList'

const todo = ref('')

const todoStore = useTodoListStore()

function add() {
  const item = todo.value
  if (!item.length) return
  todoStore.addTodo(item)
}

function clear() {
  todo.value = ''
}

function submit() {
  add()
  clear()
}
</script>

<template>
  <form @submit.prevent="submit">
    <input
      v-model="todo"
      type="text"
    />
    <button>Add</button>
  </form>
</template>

<style></style>
