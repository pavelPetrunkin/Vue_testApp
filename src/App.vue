<template>
  <div id="app">
    <router-view :todos="todos" :filter="filter" :idList="idList" :pagination="pagination"/>
  </div>
</template>

<script>

import ToDoList from './components/ToDoList'

export default {
  name: 'App',
  components: {
    ToDoList
  },
  data () {
    return {
      idList: [0, 1],
      inputText: '',
      todos: [{
        name: 'Todo A',
        isEditing: false,
        id: 0,
        checked: false,
        blocked: false,
        item: 'item' + (this.checked ? ' checked' : '')
      }, {
        name: 'Todo B',
        isEditing: false,
        checked: true,
        id: 1,
        blocked: false,
        item: 'item' + (this.checked ? ' checked' : '')
      }],
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
      this.todos.unshift(newTodo)
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
