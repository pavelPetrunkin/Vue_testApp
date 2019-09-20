<template>
  <div class="modal-lane-info">
    <p>CHAMPION POWER SPIKES</p>
    <div class="lane-role-selector">
      <img class="lane-role-img" :src="characters[selectorIndex].role" />
      <p>{{characters[selectorIndex].lane}}</p>
      <img class="lane-enemy-selector-img" src="/static/roleSelector/chevron-down.svg" />
    </div>
    <div class="lane-enemy-field">
      <p>{{enemies[selectorIndex].nick}}</p>
      <img :class="'lane-enemy-img' + checkEnemyLine()" :src="enemies[selectorIndex].avatar" />
    </div>
    <div class="lane-character-field">
      <p>{{characters[selectorIndex].nick}}</p>
      <img :class="'lane-character-img' + checkEnemyLine()" :src="characters[selectorIndex].avatar" />
    </div>
  </div>
</template>

<script type="text/javascript">

export default {
  name: 'ModalLineInfo',
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
    background: #1C1F33;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }

  .modal-lane-info p {
    padding-left: 26px;
  }

  .modal-lane-info p:nth-child(2) {
    font-family: Work Sans,serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 22px;
    text-align: left;
    margin-top: 6px;
    color: #ffffff;
    width: 420px;
  }

  .modal-lane-info p:first-child {
    color: #868797;
    font-family: Work Sans,serif;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    margin-top: 25px;
  }
</style>
