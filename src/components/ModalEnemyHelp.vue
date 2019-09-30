<template>
  <div class="modal-enemy-help">
    <p>PLAYING AGAINST</p>
    <p>Sed velit neque, commodo in <img class="enemy-spell-slot1" src="../assets/spells/spell.svg"/> cursus a,
      scelerisque quis turpis. Cras sodales suscipit metus,
      lacinia congue mi mollis at.
      Sed tellus justo, ultrices id commodo ac,
      <img class="enemy-spell-slot2" src="../assets/spells/spell.svg"/> dapibus eget urna. Cras congue lacinia suscipit...
      <br> <a href="asd">See More</a>
    </p>
    <div class="enemy-selector">
      <img :class="'enemy-img' + checkEnemyLine()" :src="enemies[selectorIndex].avatar" />
      <p id="enemy-nick" >{{enemies[selectorIndex].name}}</p>
      <img class="enemy-selector-img" src="../assets/enemySelector/chevron-down.svg" />
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'ModalEnemyHelp',
  props: ['characters', 'enemies', 'selectorIndex', 'spellSlot'],
  computed: {
    data () {
      return {
        spells: this.$store.getters.spells
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

<style lang="scss">
  .modal-enemy-help {
    position: absolute;
    width: 620px;
    height: 180px;
    right: 290px;
    top: 112px;
    background: #1C1F33;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    a {
      font-family: Work Sans,serif;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 20px;
      text-align: right;
      text-decoration-line: underline;
      color: #65E4FF;
      position: relative;
      left: 506px;
      top: 7px;
    }
    p {
      padding-left: 25px;
      &:nth-child(2) {
        font-family: Work Sans,serif;
        font-weight: normal;
        font-size: 14px;
        line-height: 22px;
        text-align: left;
        margin-top: 6px;
        padding-right: 10px;
        color: #ffffff;
      }
      &:first-child {
        color: #868797;
        font-family: Work Sans,serif;
        font-weight: bold;
        font-size: 14px;
        line-height: 16px;
        margin-top: 25px;
      }
    }
  }

  @media (max-width: 1655px) {
    .modal-enemy-help {
      right: 262px;
    }
  }

  .enemy-selector-img {
    margin-right: 10px;
    margin-left: 19px;
    p {
      font-family: Work Sans,serif;
      font-style: normal;
      font-weight: bold;
      font-size: 12px;
      line-height: 14px;
      color: #868797;
    }
  }

  #enemy-nick {
    padding-left: 7px;
  }
  .enemy-img {
    &.first{
      width: 26px;
      margin-left: 10px;
      height: 26px;
    }
    &.other{
      width: 22px;
      margin-left: 10px;
      height: 22px;
    }
  }

  .enemy-selector {
    position: absolute;
    height: 31px;
    background: black;
    right: 15px;
    top: 14px;
    display: flex;
    align-items: center;
    p {
      margin: 0;
    }
  }

  .enemy-spell-slot1 {
    position: relative;
    top: 4px;
    margin-left: 2px;
  }

  .enemy-spell-slot2 {
    position: relative;
    top: 3px;
    margin-right: 1px;
    margin-left: 2px;
  }
</style>
