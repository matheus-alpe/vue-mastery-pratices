<script setup>
import { useTodoListStore } from '@/stores/todoList'

defineProps({
  todo: {
    type: Object,
    required: true
  }
})

const { toggleCompleted, deleteTodo } = useTodoListStore()
</script>

<template>
  <li>
    <div class="content">
      <span :class="{ completed: todo.completed }">{{ todo.item }}</span>

      <div>
        <button @click.stop="toggleCompleted(todo.id)">&#10004;</button>
        <button @click.stop="deleteTodo(todo.id)">&#10539;</button>
      </div>
    </div>
  </li>
</template>

<style>
.content {
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
}

.content button {
  all: unset;
}

.content div {
  display: flex;
  gap: 5px;
  font-size: 1rem;
}

.completed {
  text-decoration: line-through;
  opacity: 0.5;
}
</style>
