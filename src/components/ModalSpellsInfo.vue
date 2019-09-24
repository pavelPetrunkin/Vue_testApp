<template>
  <div class="modal-spells-info">
    <p>YOUR SKILL ORDER</p>
    <div class="spells-role-selector" @click="showSelector">
      <img class="lane-role-img" :src="characters[selectorIndex].role" />
      <p>{{(characters[selectorIndex].lane)[0].toLocaleUpperCase() + (characters[selectorIndex].lane).slice(1) }}
        Lane: {{this.firstTeam.name[0] + this.firstTeam.name.toLowerCase().slice(1)}}</p>
      <img class="lane-enemy-selector-img" src="/static/roleSelector/chevron-down.svg" />
      <div :class="[openSelector ? 'selector-wrapper' : 'selector-hide']">
        <div class="selector-option" @click="event => selectAndClose(event, 'LOREM IPSUM')">
          LOREM IPSUM
        </div>
        <div class="selector-option" @click="event => selectAndClose(event, 'LOREM IPSUM 2')">
          LOREM IPSUM 2
        </div>
      </div>
    </div>
    <div class="spells-info-field">
      <div class="player-spells">
        <img v-for="(spell, i) in characters[selectorIndex].spells" :key="i" :src="spell" />
      </div>
      <SpellsGrid
        :lvlSpellsQ="data.lvlSpellsQ"
        :lvlSpellsW="data.lvlSpellsW"
        :lvlSpellsE="data.lvlSpellsE"
        :lvlSpellsR="data.lvlSpellsR"/>
    </div>

  </div>
</template>

<script type="text/javascript">
import SpellsGrid from './SpellsGrid'
export default {
  name: 'ModalSpellsInfo',
  components: {SpellsGrid},
  props: ['characters', 'enemies', 'selectorIndex', 'firstTeam'],
  data: function () {
    return {
      openSelector: false
    }
  },
  methods: {
    checkEnemyLine () {
      return parseInt(this.selectorIndex) === 0 ? ' first' : ' other'
    },
    getLaneExp (player) {
      return player[this.selectorIndex].laneStageExp
    },
    showSelector () {
      this.openSelector = true
    },
    selectAndClose (event, value) {
      event.stopPropagation()
      this.openSelector = false
      return this.$store.commit('CHANGE_TEAM', value)
    }
  },
  computed: {
    data () {
      return {
        lvlSpellsQ: this.$store.getters.STATE.lvlSpellsQ,
        lvlSpellsR: this.$store.getters.STATE.lvlSpellsR,
        lvlSpellsW: this.$store.getters.STATE.lvlSpellsW,
        lvlSpellsE: this.$store.getters.STATE.lvlSpellsE
      }
    }
  }
}
</script>

<style scoped>

  #spells-grid .lvl-order {
    font-family: Work Sans,sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 12px;
    text-align: center;
    color: #868797;
    margin: 0;
  }
  .selector-hide {
    display: none;
  }
  .selector-wrapper {
    position: absolute;
    top: 32px;
    border: 1px solid aqua;
    background: #1C1F33;
    width: 100%;
    left: 0;
    z-index: 1000;
  }

  .selector-option {
    color: #868797;
    height: 21px;
    text-align: left;
    font-size: 12px;
    line-height: 21px;
    padding: 5px;
  }

  .modal-spells-info {
    position: absolute;
    width: 590px;
    height: 200px;
    right: 290px;
    top: 322px;
    background: #00000D;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }

  @media (max-width: 1655px) {
    .modal-spells-info {
      right: 262px;
    }
  }

  .spells-role-selector p {
    font-family: Work Sans,sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    color: #868797;
  }

  .modal-spells-info > p:first-child {
    color: #868797;
    font-family: Work Sans,sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    margin-top: 25px;
  }

  .spells-role-selector {
    cursor: pointer;
    position: absolute;
    height: 31px;
    background: #1C1F33;
    right: 15px;
    top: 14px;
    display: flex;
    align-items: center;
    padding: 0 10px;
  }

  .modal-spells-info > p:first-child {
    padding-left: 25px;
  }

  .spells-role-selector p {
    margin-right: 29px;
    margin-left: 10px;
  }

  .spells-info-field {
    display: flex;
    width: 100%;
    height: 100%;
    position: relative;
    padding-bottom: 24px;
  }

  .spells-lvl-order {
    display: flex;
    color: white;
    justify-content: space-between;
  }

  .spells-lvl-order p {
    font-family: Work Sans,sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 12px;
    text-align: center;
    margin-bottom: 0;
    padding-left: 6px;
    color: #868797;
  }

  .modal-spells-info .player-spells {
    width: 100%;
    display: flex;
    padding-top: 28px;
    justify-content: space-between;
  }

  .modal-spells-info .player-spells {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    align-items: flex-start;
    padding-left: 25px;
    width: 17px;
  }

</style>
