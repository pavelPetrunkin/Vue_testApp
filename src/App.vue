<template>
  <div id="app">
    <router-view
      :characters="data.characters"
      :enemies="data.enemies"
    />
    <div id="game-stage-background"></div>

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
        enemies: this.$store.getters.STATE.enemies
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

#game-stage-background {
  background: linear-gradient(121.91deg, #00000D -0.28%, #1C1F33 100%);
  opacity: 0.95;
  position: absolute;
  width: 100%;
  height: 900px;
  top: 0;
}

</style>
