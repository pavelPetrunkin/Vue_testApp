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
      <img v-show="spell" src="../assets/spells/keycodeR.svg" alt="" />
      <div v-show="spell" class="r-line skill-line"></div>
      <p class="keycode-spell">{{spell !== '' ? 'R' : ''}}</p>
    </div>
  </div>
</template>

<script type="text/javascript">
  import keycodeQ from '../assets/spells/keycodeQ.svg'
  import keycodeW from '../assets/spells/keycodeW.svg'
  import keycodeE from '../assets/spells/keycodeE.svg'
  import keycodeR from '../assets/spells/keycodeR.svg'
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
          item === 1 ? this.spellsQ[i] = keycodeQ : this.spellsQ[i] = ''
        })
        return this.spellsQ
      },
      checkSpellsW () {
        this.spellsW.forEach((item, i) => {
          item === 1 ? this.spellsW[i] = keycodeW : this.spellsW[i] = ''
        })
        return this.spellsW
      },
      checkSpellsE () {
        this.spellsE.forEach((item, i) => {
          item === 1 ? this.spellsE[i] = keycodeE : this.spellsE[i] = ''
        })
        return this.spellsE
      },
      checkSpellsR () {
        this.spellsR.forEach((item, i) => {
          item === 1 ? this.spellsR[i] = keycodeR : this.spellsR[i] = ''
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

<style lang="scss">
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
    .first-row {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 2;
    }
    img {
      margin: auto auto;
    }
    & > .line:nth-child(1) {
      top: 36px;
    }
    & > .line:nth-child(2) {
      top: 64px;
    }
    & > .line:nth-child(3) {
      top: 89px;
    }
    & > .line:nth-child(4) {
      top: 113px;
    }
    .lvl-order {
      font-family: Work Sans,sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 12px;
      text-align: center;
      color: #868797;
      margin: auto auto;
    }
    .skill-line {
      position: absolute;
      background-color: #1C1F33;
      width: 1px;
      bottom: 18px;
      &.e-line {
        height: 57px;
      }
      &.w-line {
        height: 31px;
      }
      &.q-line {
        height: 0;
      }
      &.r-line {
        height: 81px;
        bottom: 16px;
      }
    }
  }

  #grid > div {
    font-size: 5vw;
    padding: .5em;
    background: gold;
    text-align: center;
  }
</style>

<style lang="scss" scoped>
  .keycode-spell {
    color: white;
    margin: 0;
    position: absolute;
    font-size: 10px;
    line-height: 12px;
    font-weight: bold;
  }

  .line {
    border-top: 1px dashed #1C1F33;
    position: absolute;
    width: calc(100% - 39px);
    z-index: 1;
    right: 30px;
    left: 9px;
  }
</style>
