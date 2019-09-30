<template>
  <div id="app">
    <router-view
      :characters="characters"
      :enemies="enemies"
      :secondTeam="secondTeam"
      :firstTeam="firstTeam"
      :isOpenCharactersInfo="isOpenCharactersInfo"
      :selectorIndex="selectorIndex"
      :spellSlot="spellSlot"
      :itemsSlot="itemsSlot"
    />
    <div id="game-stage-background"></div>

  </div>
</template>

<script>
import VsStage from './components/VsStage';
import { mapGetters } from 'vuex';

export default {
  name: 'App',
  components: {
    VsStage,
  },
  computed: {
    ...mapGetters(['characters', 'enemies', 'firstTeam', 'secondTeam', 'isOpenCharactersInfo', 'selectorIndex', 'spellSlot', 'itemsSlot']),
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#game-stage-background {
  background: linear-gradient(121.91deg, #00000D -0.28%, #1C1F33 100%);
  opacity: 0.95;
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
}

body {
  height: 100vh;
  background-image: url("assets/bg.svg");
  margin: 0;
  overflow-x: hidden;
}

  .d-none {
    #header-id, .characters-list {
      display: none;
    }
  }

</style>
