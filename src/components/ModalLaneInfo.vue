<template>
  <div class="modal-lane-info">
    <p>CHAMPION POWER SPIKES</p>
    <div class="lane-role-selector">
      <img class="lane-role-img" :src="characters[selectorIndex].role" />
      <p>{{(characters[selectorIndex].lane)[0].toLocaleUpperCase() + (characters[selectorIndex].lane).slice(1) }} Lane</p>
      <img class="lane-enemy-selector-img" src="/static/roleSelector/chevron-down.svg" />
    </div>
    <div class="lane-info-field">
      <div class="lane-character-field block">
        <p class="nick">{{characters[selectorIndex].nick}}</p>
        <img :class="'lane-character-img' + checkEnemyLine()" :src="characters[selectorIndex].avatar" />
      </div>
      <div class="lane-enemy-field block">
        <img :class="'lane-enemy-img' + checkEnemyLine()" :src="enemies[selectorIndex].avatar" />
        <p class="nick">{{enemies[selectorIndex].nick}}</p>
      </div>
    </div>

  </div>
</template>

<script type="text/javascript">

export default {
  name: 'ModalLaneInfo',
  props: ['characters', 'enemies', 'selectorIndex', 'spellSlot', 'itemsSlot'],
  computed: {
    data () {
      return {
        spells: this.$store.getters.STATE.spells
      }
    }
  },
  methods: {
    checkEnemyLine () {
      return parseInt(this.selectorIndex) === 0 ? ' first' : ' other'
    }
  }
}
</script>

<style>
  .modal-lane-info {
    position: absolute;
    width: 480px;
    height: 200px;
    left: 290px;
    top: 322px;
    background: #00000D;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }

  .lane-role-selector p {
    font-family: Work Sans,sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    color: #868797;
  }

  .modal-lane-info > p:first-child {
    color: #868797;
    font-family: Work Sans,sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    margin-top: 25px;
  }

  .lane-role-selector {
    position: absolute;
    height: 31px;
    background: #1C1F33;
    right: 15px;
    top: 14px;
    display: flex;
    align-items: center;
    padding: 0 10px;
  }

  .lane-role-selector p {
    margin-right: 20px;
    margin-left: 10px;
  }

  .lane-character-img.first {
    width: 66px;
    position: relative;
    top: 2px;
    left: 1px;
    height: 66px;
  }
  .lane-enemy-img.first {
    width: 66px;
    height: 66px;
    top: 2px;
    position: relative;
    right: 1px;
  }

  .lane-info-field .nick {
    font-family: Work Sans,sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
    color: #EAEAEE;
  }

  .lane-character-field .nick {
    padding-right: 11px;
  }

  .lane-info-field .block {
    display: flex;
    width: 42%;
  }

  .lane-enemy-field {
    justify-content: flex-start;
  }

  .lane-character-field {
    justify-content: flex-end;
  }

  .lane-info-field {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

</style>
