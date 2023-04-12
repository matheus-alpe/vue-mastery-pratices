<script setup>
import TodoForm from './TodoForm.vue'
import TodoList from './TodoList.vue'
</script>

<template>
  <div class="todo-app">
    <h1 class="green">To Do List</h1>

    <TodoForm />

    <TodoList />
  </div>
</template>

<style>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.todo-app h1,
.todo-app h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .todo-app h1,
  .todo-app h3 {
    text-align: left;
  }
}
</style>
