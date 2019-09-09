<template>
  <div id="app">
    <router-view
      :todos="todos"
      :filter="filter"
      :idList="idList"
      :pagination="pagination"
      v-on:create="createTodo"/>
  </div>
</template>

<script>

import ToDoList from './components/ToDoList'

export default {
  name: 'App',
  components: {
    ToDoList
  },

    mounted() {
      console.log(this.todos)
    },
  data () {
    return {
      idList: [0, 1],
      inputText: '',
      todos : JSON.parse(localStorage.getItem('todos') || '[]'),
      filter: 'showAll',
      pagination: {
        pageNumber: 1,
        pageItems: 3
      },
      editing: {
        focusTodo: ''
      }
    }
  },
  methods: {
    createTodo (newTodo) {
      this.idList.unshift(newTodo.id)
      this.todos.unshift(newTodo)
      localStorage.setItem('todos',JSON.stringify(this.todos))
    }
  }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
