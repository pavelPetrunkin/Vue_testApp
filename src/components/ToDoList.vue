<template>
  <div>
    <div id="header-id" class="header">
      <h2>My To Do List</h2>

      <div class="typer">
        <input type="text" id="text-input"  v-model="inputText" placeholder="New item..." name="task">
        <button class="button-add" @click="createItem()" id="addId">Add</button>
      </div>

      <div class="options">
        <div class="filter-check">
          <div class="check">
            <div class="checkAll">

              <input type="checkbox" class="input-checkAll" id="checkAll" name="Check/uncheck all">
              <label style="margin:0" for="checkAll">CheckAll</label>
            </div>
            <button class="button-delete" @click="deleteChecked()" id="deleteId">Delete checked</button>
          </div>

          <div class="filters">
            <div class='showAll active-filter'>
              <label @click="filter.showAll" id="show-all" class='filter'>
                <p>Show all</p>
              </label>
            </div>

            <div class='showChecked'>
              <label @click="filter.showChecked" id="show-checked" class='filter'>
                <p>Show Checked</p>
              </label>
            </div>

            <div class='showUnchecked'>
              <label @click="filter.showUnchecked" id="show-unchecked"  class='filter'>
                <p>Show Unchecked</p>
              </label>
            </div>
          </div>
        </div>

      </div>

    </div>

    <ul id="list">
      <li v-for="(todo,index) in todos" :key="todo.id" :class="todo.item" v-show="!todos.blocked">
        <input @click="checkTodo(index)" type="checkbox" id="checkItem" class="check-item"  v-model="todo.checked" >
        <p @dblclick="editTodo(index)" class="editing" @blur="handleInput">{{todo.name}}</p>
        <a href='#' @click="deleteTodo(index)" class='close' aria-hidden='true'>&times;</a>
      </li>
    </ul>

    <div class="pagination">
      <button v-for="(page,index) in pages" :key="index"
              id='#pageNumber'
              class="page-number"
              :value="index+1"
              @click="changePage(index+1)">
        {{index+1}}
      </button>
    </div>
  </div>
</template>

<script type="text/javascript">
function getMaxOfArray (numArray) {
  return (Math.max.apply(null, numArray) + 1)
}

export default {
  name: 'ToDoList',
  props: ['todos', 'filter', 'pagination', 'idList', 'inputText'],
  mounted(){
      console.log(this.todos); // Все нормально
  },
  data() {
      return {
          index: '',
          pages: Math.ceil(this.todos.length/this.pagination.pageItems),
      }
  },
  methods: {
    showAll () {
      this.filter = 'showAll'
      this.todos.forEach((item, i) => {
        this.todos[i].blocked = false
      })
    },
    showChecked () {
      this.filter = 'showChecked'
      this.todos.forEach((item, i) => {
        if (this.todos[i].checked) {
          this.todos[i].blocked = false
        }
      })
    },
    changePage (index) {
      this.pagination.pageNumber = index
    },
    showUnchecked () {
      this.filter = 'showUnchecked'
      this.todos.forEach((item, i) => {
        if (!this.todos[i].checked) {
          this.todos[i].blocked = false
        }
      })
    },
    checkTodo (index) {
      this.todos[index].checked = !this.todos[index].checked
    },
    createTodo () {
        return {
            name: this.inputText,
            isEditing: false,
            checked: false,
            id: getMaxOfArray(this.idList),
            blocked: false,
            item: 'item'
        };
    },
    editTodo (index) {
        this.todos[index].isEditing = true
        this.index = index
        this.$el.querySelector('.editing').focus()
    },
    handleInput (e) {
        let text = e.target.innerHTML
        if(text !== ''){
            this.todos[this.index].name = text
        }
    },
    deleteTodo (index) {
      this.todos.splice(index, 1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /* Include the padding and border in an element's total width and height */
  * {
    box-sizing: border-box;
  }

  /* Remove margins and padding from the list */
  ul {
    margin: 0;
    padding: 0 2em;
  }

  /* Style the list items */
  ul li {
    position: relative;
    font-size: 18px;
    transition: 0.2s;
    align-items: center;
    display: flex;
  }

  li p {
    cursor: pointer;
  }

  /* When clicked on, add a background color and strike out text */
  ul li.checked {
    background: #888;
    color: #fff;
  }

  ul li.checked p {
    text-decoration: line-through;
  }

  /* Style the close button */
  .close {
    margin-left: 1em;
    padding: 12px 16px 12px 16px;
  }

  .close:hover {
    background-color: #f44336;
    color: white;
  }

  /* Style the header */
  .header {
    background-color: burlywood;
    padding: 30px 40px;
    color: white;
    text-align: center;
  }

  /* Clear floats after the header */
  .header:after {
    content: "";
    display: table;
    clear: both;
  }

  /* Style the input */
  #text-input {
    margin: 0;
    border: none;
    border-radius: 0;
    width: 75%;
    float: left;
    font-size: 16px;
  }

  /* Style the "Add" button */
  .button-add {

    width: 25%;
    color: #555;
    float: left;
    text-align: center;
    font-size: 16px;
    cursor: pointer;
    transition: 0.3s;
    border-radius: 0;

    margin-top: 1em;
    background: darkgray;
    border: none;
    padding: 10px;
  }

  .checkAll {
    width: 100%;
    float: left;
    text-align: center;
    font-size: 16px;
    border-radius: 2em;
    cursor: pointer;
    background: darkgray;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .checkAll label {
    cursor: pointer;
  }

  .button-add:hover {
    background-color: #bbb;
  }

  .pagination{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .page-number {
    width: 4%;
    color: #555;
    float: left;
    text-align: center;
    font-size: 20px;
    cursor: pointer;
    transition: 0.3s;
    border-radius: 2em;
    margin-left: 0.5em;
    margin-right: 0.5em;
    background: darkgray;
    border: none;
    margin-bottom: 1em;
  }

  .active-page{
    background-color: deepskyblue;
  }

  .check {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 15%;
    height: 100%;
    margin-right: 1em;
  }

  li {
    background: cadetblue;
    margin-bottom: 1em;
  }

  .check div:first-child {
    margin: 0;
  }

  .button-delete {
    border:none;
    border-radius: 1em;
    background: white;

    margin-top: 1em;
    width: 100%;
    font-size: 15px;
  }

  .input-checkAll {
    margin: 0;
    padding: 0;
    width: 16%;
  }

  label {
    margin: 0;
  }

  li p {
    overflow-x:hidden;
    margin: 1em 0;
  }

  .filters {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .filters p {
    margin: 0;
    font-size: 16px;
  }

  .options {

    justify-content: space-between;
    width: 100%;
    align-items: center;
  }

  .filters div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 6px;
    width: 100%;
  }

  .active-filter {
    color: deepskyblue;
    border-bottom: 2px deepskyblue solid;
  }

  .typer {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  .filter-check {
    display: flex;
    width: 100%;
    align-items: center;
  }

  .button-reset {
    background: white;
    border: white;
  }

  .editing {
    background: blueviolet;
    border-radius: 1em;
    padding: 0.5em;
    color: white;
    width: 100%;
    max-height: 68px;
  }

  .currentPage {
    background: #f44336;
  }

  .check-item {
    margin: 0 1em;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2em;
    width: 2em;
    background: #fff;

  }

  .filter p {
    cursor: pointer;
  }

</style>
