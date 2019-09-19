<template>
  <div id="app">
    <router-view
      :characters="data.characters"
      :enemies="data.enemies"
      :secondTeam="data.secondTeam"
      :firstTeam="data.firstTeam"
      :isOpenCharactersInfo="data.isOpenCharactersInfo"
      :selectorIndex="data.selectorIndex"
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
  computed: {
    data () {
      return {
        characters: this.$store.getters.STATE.characters,
        enemies: this.$store.getters.STATE.enemies,
        firstTeam: this.$store.getters.STATE.firstTeam,
        secondTeam: this.$store.getters.STATE.secondTeam,
        isOpenCharactersInfo: this.$store.getters.STATE.isOpenCharactersInfo,
        selectorIndex: this.$store.getters.STATE.selectorIndex
      }
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
