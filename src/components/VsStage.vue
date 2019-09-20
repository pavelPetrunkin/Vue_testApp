<template>
  <div class="vs-info">
    <CharactersInfo
      :characters="characters"
      :enemies="enemies"
      :firstTeam="firstTeam"
      :secondTeam="secondTeam"
      :open="isOpenCharactersInfo"
      :selectorIndex="selectorIndex"
      :spellSlot="spellSlot"
      :itemsSlot="itemsSlot"
    />
    <div id="header-id" class="header">
      <FirstTeamName :teamName="this.firstTeam.name"/>
      <div>
        <div class="stage-background"></div>
        <div class="middle-border"></div>
        <div  class="role">
          <LineRoll
            v-for="(role,index) in roles"
            :role="role[0]"
            :key="index"/>
        </div>
        <h2 class="game-stage-title">TEAM COMPARISON</h2>
      </div>

      <SecondTeamName :teamName="this.secondTeam.name"/>
    </div>
    <div class="characters-list">
      <CharactersPair
        v-for="(pair,index) in pairs"
        :character="pair[0]"
        :enemy="pair[1]"
        :key="index"
        :index="index"
        :selectorIndex="selectorIndex"
        :isOpen="isOpenCharactersInfo"
        @openModal="openCharactersInfo"
      />
    </div>
  </div>
</template>

<script type="text/javascript">

import CharactersInfo from './CharactersInfo'
import CharactersPair from './CharactersPair'
import LineRoll from './LineRoll'
import FirstTeamName from './FirstTeamName'
import SecondTeamName from './SecondTeamName'

function pairSplit (characters, enemies) {
  return characters.map((item, index) => [item, enemies[index]])
}

function roleSplit (characters) {
  return characters.map((item) => [item.role])
}

export default {
  name: 'VsStage',
  props: [
    'characters', 'enemies',
    'firstTeam', 'secondTeam',
    'isOpenCharactersInfo', 'selectorIndex',
    'spellSlot', 'itemsSlot'],
  components: {
    CharactersPair,
    LineRoll,
    FirstTeamName,
    SecondTeamName,
    CharactersInfo
  },
  computed: {
    pairs () {
      return pairSplit(this.characters, this.enemies)
    },
    roles () {
      return roleSplit(this.characters)
    }
  },
  methods: {
    openCharactersInfo (payload) {
      return this.$store.dispatch('CHARACTERS_INFO', payload)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .vs-info {
    position: relative;
    z-index: 1;
  }

  .role {
    position: absolute;
    right: 820px;
    top: 188px;
    height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .stage-background {
    background: #00000D;
    position: absolute;
    width: 381px;
    height: 38px;
    left: 650px;
    top: 77px;
    clip-path: polygon(0 0, 100% 0, 90% 100%, 11% 100%);
  }

  .header {
    display: flex;
    justify-content: space-between;
    padding: 59px 284px 0 331px;
  }

  .characters-list {
    padding: 23px 252px 0 252px;
  }

  .middle-border {
    right: 839px;
    height: 752px;
    width: 2px;
    background: #00000D;
    position: absolute;
    top: 115px;
    z-index: 1;
  }

  .header h2 {
    font-family: Work Sans,serif;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    position: relative;
    z-index: 1;

    color: #FFFFFF;
  }

  .game-stage-title {
    top: 1px;
    right: 10px;
  }

</style>
