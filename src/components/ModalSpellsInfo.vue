<template>
  <div class="modal-spells-info">
    <p>YOUR SKILL ORDER</p>
    <div class="spells-role-selector">
      <img class="lane-role-img" :src="characters[selectorIndex].role" />
      <p>{{(characters[selectorIndex].lane)[0].toLocaleUpperCase() + (characters[selectorIndex].lane).slice(1) }}
        Lane: {{this.firstTeam.name[0] + this.firstTeam.name.toLowerCase().slice(1)}}</p>
      <img class="lane-enemy-selector-img" src="/static/roleSelector/chevron-down.svg" />
    </div>
    <div class="spells-info-field">
      <div class="player-spells">
        <img v-for="(spell, i) in characters[selectorIndex].spells" :key="i" :src="spell" />
      </div>
      <div class="spells-table">
        <div class="spells-lvl-order">
          <p v-for="(number, i) in [...Array(18)]" :key="i">
            {{i+1}}
          </p>
        </div>
      </div>
    </div>

  </div>
</template>

<script type="text/javascript">
import OneRune from './OneRune'
import PairRunes from './PairRunes'
import LaneExp from './LaneExp'

export default {
  name: 'ModalSpellsInfo',
  components: {PairRunes, OneRune, LaneExp},
  props: ['characters', 'enemies', 'selectorIndex', 'firstTeam'],
  methods: {
    checkEnemyLine () {
      return parseInt(this.selectorIndex) === 0 ? ' first' : ' other'
    },
    getLaneExp (player) {
      return player[this.selectorIndex].laneStageExp
    }
  }
}
</script>

<style>
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

  .modal-spells-info .spells-table {
    padding-left: 14px;
  }

</style>
