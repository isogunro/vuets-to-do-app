<template>
    <div></div>
  </template>
  
  <script setup lang="ts">
    import { ref } from 'vue'
    
    const todos = ref([{
        id: 1,
        text: 'Learn Vue.js 3 with TypeScript',
        completed: false
    }])

  </script>