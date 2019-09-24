<template>
  <div id="spells-grid">
    <div v-for="(number, i) in [...Array(4)]" :key="`line-${i}`" class="line"></div>
    <p class="lvl-order" v-for="(number, i) in [...Array(18)]" :key="`lvl-${i}`">
      {{i+1}}
    </p>
    <div v-for="(spell, i) in checkSpellsQ()"  :key="`Q-${i}`" class="first-row">
      <img v-show="spell" :src="spell" alt="" />
      <div v-show="spell" class="q-line skill-line"></div>
      <p class="keycode-spell">{{spell !== '' ? 'Q' : ''}}</p>
    </div>
    <div v-for="(spell, i) in checkSpellsW()"  :key="`W-${i}`" class="first-row">
      <img v-show="spell" :src="spell" alt="" />
      <div v-show="spell" class="w-line skill-line"></div>
      <p class="keycode-spell">{{spell !== '' ? 'W' : ''}}</p>
    </div>
    <div v-for="(spell, i) in checkSpellsE()"  :key="`E-${i}`" class="first-row">
      <img v-show="spell" :src="spell" alt="" />
      <div v-show="spell" class="e-line skill-line"></div>
      <p class="keycode-spell">{{spell !== '' ? 'E' : ''}}</p>
    </div>
    <div v-for="(spell, i) in checkSpellsR()"  :key="`R-${i}`" class="first-row">
      <img v-show="spell" :src="spell" alt="" />
      <div v-show="spell" class="r-line skill-line"></div>
      <p class="keycode-spell">{{spell !== '' ? 'R' : ''}}</p>
    </div>
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
    grid-template-rows: repeat(4,1fr);
    grid-template-columns: repeat(18,1fr);
    width: 100%;
    padding-left: 8px;
    padding-right: 41px;
    grid-gap: 6px;
    position: relative;
    top: 1px;
  }
  #spells-grid > .line:nth-child(1) {
    top: 36px;
  }
  #spells-grid > .line:nth-child(2) {
    top: 64px;
  }
  #spells-grid > .line:nth-child(3) {
    top: 89px;
  }
  #spells-grid > .line:nth-child(4) {
    top: 113px;
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
    font-size: 10px;
    line-height: 12px;
    font-weight: bold;
  }

  #spells-grid .first-row {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
  }

  .line {
    border-top: 1px dashed #1C1F33;
    position: absolute;
    width: calc(100% - 39px);
    z-index: 1;
    right: 30px;
    left: 9px;
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

  #spells-grid .skill-line {
    position: absolute;
    background-color: #1C1F33;
    width: 1px;
    bottom: 18px;
  }

  #spells-grid .e-line.skill-line {
    height: 57px;
  }

  #spells-grid .w-line.skill-line {
    height: 31px;
  }

  #spells-grid .q-line.skill-line {
    height: 0;
  }

  #spells-grid .r-line.skill-line {
    height: 81px;
    bottom: 16px;
  }

  #spells-grid .lvl-order {
    margin: auto auto;
  }

  #spells-grid img {
    margin: auto auto;
  }

</style>
