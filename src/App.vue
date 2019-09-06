<template>
  <div id="app">
    <todo-list v-bind:todos="todos"
               v-bind:filters="filters"
               v-bind:pagination="pagination"
               v-on:create-todo="createTodo">
    </todo-list>
  </div>
</template>

<script>
export default {
  name: 'App',
    components: {
        TodoList,
    },
    data() {
        return {
            todos: [{
                name: 'Todo A',
                isEditing: false,
                checked: false,
            }, {
                name: 'Todo B',
                isEditing: false,
                checked: true,
            }],
            idList: [],
            filters: {
                showAll: true,
                showChecked: false,
                showUnchecked: false,
                },
            pagination: {
                pageNumber: 1,
                pageItems: 3,
            }
        };
    },
    methods: {
        createTodo(newTodo) {
            this.todos.unshift(newTodo);
            this.idList.unshift(newTodo.id)
        },
        deleteTodo
    },

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
