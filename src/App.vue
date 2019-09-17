<template>
  <div id="app">
    <div id="game-stage-background">

    </div>
    <router-view
      :characters="data.characters"
      :filter="data.filter"
      :idList="data.idList"
      :pagination="data.pagination"
      v-on:create="createTodo"
      v-on:checkOne="checkTodo"
      v-on:getPage="changePage"/>
  </div>
</template>

<script>

import VsStage from './components/VsStage'

export default {
  name: 'App',
  components: {
    VsStage
  },
  mounted () {
    // console.log(this.characters)
  },
  computed: {
    data () {
      return {
        idList: this.$store.getters.STATE.idList,
        inputText: this.$store.getters.STATE.inputText,
        characters: this.$store.getters.STATE.characters,
        filter: this.$store.getters.STATE.filter,
        pagination: this.$store.getters.STATE.pagination,
        editing: this.$store.getters.STATE.editing
      }
    }
  },

  methods: {
    createTodo (newTodo) {
      this.idList.unshift(newTodo.id)
      this.characters.unshift(newTodo)
      let payload = {idList: this.idList.slice(), characters: this.characters.slice()}
      this.$store.dispatch('SAVE_TODO', payload)
    },
    checkTodo (index) {
      this.characters[index].checked = !this.characters[index].checked
      let payload = {characters: this.characters.slice()}
      this.$store.dispatch('CHANGE_CHECK', payload)
    },
    changePage (page) {
      this.$store.dispatch('GET_PAGE', page)
    }
  }
}
</script>

<style>
#app {
  text-align: center;
}

</style>
