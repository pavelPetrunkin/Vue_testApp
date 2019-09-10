<template>
  <div id="app">
    <router-view
      :todos="todos"
      :filter="filter"
      :idList="idList"
      :pagination="pagination"
      v-on:create="createTodo"
      v-on:checkOne="checkTodo"/>
  </div>
</template>

<script>

import ToDoList from './components/ToDoList'

export default {
  name: 'App',
  components: {
    ToDoList
  },
  mounted () {
    // console.log(this.todos)
  },
  data () {
    return {
      idList: this.$store.getters.STATE.idList,
      inputText: this.$store.getters.STATE.inputText,
      todos: this.$store.getters.STATE.todos,
      filter: this.$store.getters.STATE.filter,
      pagination: this.$store.getters.STATE.pagination,
      editing: this.$store.getters.STATE.editing
    }
  },
  methods: {
    createTodo (newTodo) {
      this.idList.unshift(newTodo.id)
      this.todos.unshift(newTodo)
      let payload = {idList: this.idList.slice(), todos: this.todos.slice()}
      this.$store.dispatch('SAVE_TODO', payload)
    },
    checkTodo (index) {
      this.todos[index].checked = !this.todos[index].checked
      let payload = {todos: this.todos.slice()}
      this.$store.dispatch('CHANGE_CHECK', payload)
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
