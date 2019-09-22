<template>
  <div id="spells-grid">
    <p class="lvl-order" v-for="(number, i) in [...Array(18)]" :key="i">
      {{i+1}}
    </p>
    <img v-for="(spell, i) in checkSpellsQ()"  :key="i" :src="spell" alt="" />
    <img v-for="(spell, i) in checkSpellsW()"  :key="i" :src="spell" alt="" />
    <img v-for="(spell, i) in checkSpellsE()"  :key="i" :src="spell" alt="" />
    <img v-for="(spell, i) in checkSpellsR()"  :key="i" :src="spell" alt="" />
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'SpellsGrid',
  data: function () {
    return {
      spellsQ: [...this.data.lvlSpellsQ],
      spellsW: [...this.data.lvlSpellsW],
      spellsE: [...this.data.lvlSpellsE],
      spellsR: [...this.data.lvlSpellsR]
    }
  },
  methods: {
    checkSpellsQ () {
      return this.spellsQ.forEach((item, i) => {
        item === 1 ? this.spellsQ[i] = '/static/spells/keycodeQ.svg' : this.spellsQ[i] = ''
      })
    },
    checkSpellsW () {
      return this.spellsW.forEach((item, i) => {
        item === 1 ? this.spellsW[i] = '/static/spells/keycodeW.svg' : this.spellsW[i] = ''
      })
    },
    checkSpellsE () {
      return this.spellsE.forEach((item, i) => {
        item === 1 ? this.spellsE = '/static/spells/keycodeE.svg' : this.spellsE[i] = ''
      })
    },
    checkSpellsR () {
      return this.spellsR.forEach((item, i) => {
        item === 1 ? this.spellsR[i] = '/static/spells/keycodeR.svg' : this.spellsR[i] = ''
      })
    }
  },
  computed: {
    data () {
      return {
        lvlSpellsQ: this.$store.getters.STATE.lvlSpellsQ,
        lvlSpellsW: this.$store.getters.STATE.lvlSpellsW,
        lvlSpellsE: this.$store.getters.STATE.lvlSpellsE,
        lvlSpellsR: this.$store.getters.STATE.lvlSpellsR
      }
    }
  }
}
</script>
<style>
  #spells-grid {
    display: grid;
    grid-template-rows: repeat(5,1fr);
    grid-template-columns: repeat(18,1fr);
    width: 100%;
    padding-left: 8px;
    padding-right: 41px;s
  }
  #grid > div {
    font-size: 5vw;
    padding: .5em;
    background: gold;
    text-align: center;
  }

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

</style>
