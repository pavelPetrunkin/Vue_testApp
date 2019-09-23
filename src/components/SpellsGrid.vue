<template>
  <div id="spells-grid">
    <p class="lvl-order" v-for="(number, i) in [...Array(18)]" :key="i">
      {{i+1}}
    </p>
    <div v-for="(spell, i) in checkSpellsQ()"  :key="i" class="first-row">
      <img :src="spell" alt="" />
      <p class="keycode-spell">{{spell !== '' ? 'Q' : ''}}</p>
    </div>
    <img v-for="(spell, i) in checkSpellsQ()"  :key="i" :src="spell" alt="" />
    <img v-for="(spell, i) in checkSpellsW()"  :key="i" :src="spell" alt="" />
    <img v-for="(spell, i) in checkSpellsE()"  :key="i" :src="spell" alt="" />
    <img v-for="(spell, i) in checkSpellsR()"  :key="i" :src="spell" alt="" />
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'SpellsGrid',
  props: [
    'lvlSpellsQ',
    'lvlSpellsW',
    'lvlSpellsE',
    'lvlSpellsR'
  ],
  data: function () {
    return {
      spellsQ: [...this.lvlSpellsQ],
      spellsW: [...this.lvlSpellsW],
      spellsE: [...this.lvlSpellsE],
      spellsR: [...this.lvlSpellsR],
      slotsQ: [...this.lvlSpellsQ],
      slotsW: [...this.lvlSpellsW],
      slotsE: [...this.lvlSpellsE],
      slotsR: [...this.lvlSpellsR]
    }
  },
  methods: {
    checkSpellsQ () {
      this.spellsQ.forEach((item, i) => {
        item === 1 ? this.spellsQ[i] = '/static/spells/keycodeQ.svg' : this.spellsQ[i] = ''
      })
      return this.spellsQ
    },
    checkSpellsW () {
      this.spellsW.forEach((item, i) => {
        item === 1 ? this.spellsW[i] = '/static/spells/keycodeW.svg' : this.spellsW[i] = ''
      })
      return this.spellsW
    },
    checkSpellsE () {
      this.spellsE.forEach((item, i) => {
        item === 1 ? this.spellsE[i] = '/static/spells/keycodeE.svg' : this.spellsE[i] = ''
      })
      return this.spellsE
    },
    checkSpellsR () {
      this.spellsR.forEach((item, i) => {
        item === 1 ? this.spellsR[i] = '/static/spells/keycodeR.svg' : this.spellsR[i] = ''
      })
      return this.spellsR
    },
    checkSlotsQ () {
      this.slotsQ.forEach((item, i) => {
        item === 1 ? this.slotsQ[i] = 'Q' : this.slotsQ[i] = ''
      })
      return this.slotsQ
    },
    checkSlotsW () {
      this.slotsW.forEach((item, i) => {
        item === 1 ? this.slotsW[i] = 'W' : this.slotsW[i] = ''
      })
      return this.slotsW
    },
    checkSlotsE () {
      this.slotsE.forEach((item, i) => {
        item === 1 ? this.slotsE[i] = 'E' : this.slotsE[i] = ''
      })
      return this.slotsE
    },
    checkSlotsR () {
      this.slotsR.forEach((item, i) => {
        item === 1 ? this.slotsR[i] = 'R' : this.slotsR[i] = ''
      })
      return this.slotsR
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
    padding-right: 41px;
    grid-gap: 6px;
    position: relative;
    top: 1px;
  }
  #grid > div {
    font-size: 5vw;
    padding: .5em;
    background: gold;
    text-align: center;
  }

  .keycode-spell {
    color: white;
    margin: 0;
    position: absolute;
    height: 16px;
    width: 16px;
  }

  #spells-grid .first-row {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
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

  #spells-grid .lvl-order {
    margin: auto auto;
  }

  #spells-grid img {
    margin: auto auto;
  }

</style>
