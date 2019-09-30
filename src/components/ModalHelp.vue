<template>
  <div class="modal-help">
    <p>HOW TO START?</p>
    <p>Lorem ipsum dolor <img class="spell-slot1" src="../assets/spells/spell.svg"/>Q sit amet,
      consectetur adipiscing elit.
      Mauris imperdiet <img class="spell-slot2" src="../assets/spells/spell.svg"/>E gravida velit,
      tincidunt posuere leo ultrices id.
      <br>Aliquam interdum metus et orci: <img v-for="spell in data.spells" :key="spell" src="../assets/items/items.svg" class="items-info"/>
    </p>
  </div>
</template>

<script type="text/javascript">

export default {
  name: 'ModalHelp',
  props: ['characters', 'selectorIndex', 'spellSlot', 'itemsSlot'],
  computed: {
    data () {
      return {
        spells: this.$store.getters.spells
      }
    }
  }
}
</script>

<style>
  .modal-help {
    position: absolute;
    width: 451px;
    height: 180px;
    left: 290px;
    top: 112px;
    background: #1C1F33;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
  @media (max-width: 1655px) {
    .modal-help {
      left: 262px;
    }
  }
  .spell-slot1 {
    position: relative;
    top: 4px;
    margin-right: 4px;
  }

  .spell-slot2 {
    position: relative;
    top: 3px;
    margin-right: 4px;
    margin-left: 3px;
  }

  .items-info {
    position: relative;
    top: 4px;
    margin-right: 10px;
    left: 4px;
  }

  .modal-help p {
    padding-left: 26px;
  }

  .modal-help p:nth-child(2) {
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

  .modal-help p:first-child {
    color: #868797;
    font-family: Work Sans,serif;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    margin-top: 25px;
  }
</style>
