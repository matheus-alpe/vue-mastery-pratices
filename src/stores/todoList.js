import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useTodoListStore = defineStore('todoList', () => {
  const todoList = ref([])
  const id = ref(0)

  function addTodo(item) {
    todoList.value.push({
      item,
      id: id.value++,
      completed: false
    })
  }

  function deleteTodo(itemId) {
    todoList.value = todoList.value.filter((item) => item.id !== itemId)
  }

  function toggleCompleted(itemId) {
    const todo = todoList.value.find((item) => item.id === itemId)
    if (!todo) return
    todo.completed = !todo.completed
  }

  return {
    todoList,
    addTodo,
    deleteTodo,
    toggleCompleted
  }
})
