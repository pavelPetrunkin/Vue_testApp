<template>
  <div id="app">
    <div id="game-stage-background">

    </div>
    <router-view
      :characters="data.characters"
      :enemies="data.enemies"

    />
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
        characters: this.$store.getters.STATE.characters,
        enemies: this.$store.getters.STATE.enemies,
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
