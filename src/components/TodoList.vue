<script setup>
import { useTodoListStore } from '@/stores/todoList'
import { storeToRefs } from 'pinia'
import TodoItem from './TodoItem.vue'

const todoStore = useTodoListStore()
const { todoList } = storeToRefs(todoStore)
</script>

<template>
  <ul>
    <TodoItem
      v-for="todo in todoList"
      :key="todo.id"
      :todo="todo"
    />
  </ul>
</template>

<style></style>
