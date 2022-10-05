<template>
    <div>
      <ul>
        <li :id="`id${todo.id}`" v-for="todo in todos" :key="todo.id">
          {{todo.text}}
        </li>
      </ul>
    </div>
  </template>
  
  <script setup lang="ts">
    import { ref } from 'vue'
    
    const todos = ref([{
        id: 1,
        text: 'Learn Vue.js 3 with TypeScript',
        completed: false
    }])

  </script>