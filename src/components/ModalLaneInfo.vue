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
        <div class="spec-info">
          <p class="nick">{{characters[selectorIndex].nick}}</p>
          <div class="runes">
            <div class="small-runes">
              <img src="/static/runes/rune_small.svg" alt="cake"/>
              <img src="/static/runes/rune_small.svg" alt="cake"/>
              <img src="/static/runes/rune_small.svg" alt="cake"/>
            </div>
            <div class="triangle-runes">
              <PairRunes />
              <OneRune />
            </div>
            <div class="pentagon-runes">
              <PairRunes />
              <PairRunes />
              <OneRune />
            </div>
          </div>
        </div>
        <img :class="'lane-character-img' + checkEnemyLine()" :src="characters[selectorIndex].avatar" />
        <LaneExp :laneExp="getLaneExp(characters)"></LaneExp>
      </div>
      <img class="fighting-icon" src="/static/fightingIcon/icon.svg" alt="alter" />
      <div class="lane-enemy-field block">
        <img :class="'lane-enemy-img' + checkEnemyLine()" :src="enemies[selectorIndex].avatar"  alt="cake"/>
        <div class="spec-info">
          <p class="nick">{{enemies[selectorIndex].nick}}</p>
          <div class="runes">

            <div class="pentagon-runes">
              <OneRune />
              <PairRunes />
              <PairRunes />
            </div>
            <div class="triangle-runes">
              <OneRune />
              <PairRunes />
            </div>
            <div class="small-runes">
              <img src="/static/runes/rune_small.svg" alt="cake"/>
              <img src="/static/runes/rune_small.svg" alt="cake"/>
              <img src="/static/runes/rune_small.svg" alt="cake"/>
            </div>
          </div>
        </div>
        <LaneExp :laneExp="getLaneExp(enemies)"></LaneExp>
      </div>
    </div>

  </div>
</template>

<script type="text/javascript">
import OneRune from './OneRune'
import PairRunes from './PairRunes'
import LaneExp from './LaneExp'

export default {
  name: 'ModalLaneInfo',
  components: {PairRunes, OneRune, LaneExp},
  props: ['characters', 'enemies', 'selectorIndex', 'spellSlot', 'itemsSlot'],
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

  @media (max-width: 1655px) {
    .modal-lane-info {
      left: 262px;
    }
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

  .modal-lane-info > p:first-child {
    padding-left: 25px;
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
    margin-bottom: 19px;
  }

  .lane-enemy-field .nick {
    display: flex;
  }

  .lane-info-field .block {
    display: flex;
    width: 42%;
    flex-wrap: wrap;
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

  .lane-info-field .small-runes {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 32px;
  }

  .lane-character-field .small-runes {
    align-items: flex-start;
  }

  .lane-enemy-field .small-runes {
    align-items: flex-end;
  }

  .spec-info {
    width: 52%;
  }

  .lane-info-field .pair-runes {
    display: flex;
    flex-direction: column;
    height: 32px;
    justify-content: space-between;
  }

  .lane-info-field .runes {
    display: flex;
  }

  .lane-enemy-field .runes {
    justify-content: flex-end;
  }

  .lane-enemy-field .small-runes {
    margin-left: 4px;
  }
  .lane-character-field .small-runes {
    margin-right: 4px;
  }
  .lane-enemy-field .pair-runes {
    margin-left: 4px;
  }
  .lane-character-field .pair-runes {
    margin-right: 4px;
  }

  .lane-character-field .triangle-runes {
    margin-right: 10px;
  }
  .lane-enemy-field .triangle-runes {
    margin-left: 10px;
  }

  .lane-info-field .pentagon-runes {
    display: flex;
  }

  .lane-character-field .late img {
    left: 130px;
  }

  .lane-character-field .late p {
    right: 21px;
  }

  .lane-character-field .early img {
    left: 10px;
  }

  .lane-character-field .early p {
    left: 36px;
  }

  .lane-character-field .mid img {
    left: 70px;
  }

  .lane-character-field .mid p {
    left: 7px;
  }

  .lane-enemy-field .late img {
    right: 130px;
  }

  .lane-enemy-field .late p {
    right: 38px;
  }

  .lane-enemy-field .early img {
    right: 10px;
  }

  .lane-enemy-field .early p {
    left: 18px;
  }

  .lane-enemy-field .mid img {
    right: 70px;
  }

  .lane-enemy-field .mid p {
    right: 11px;
  }

  .lane-info-field .fighting-icon {
    padding-bottom: 22px;
  }

  .lane-enemy-img.other {
    width: 50px;
    height: 50px;
    padding-top: 11px;
    padding-left: 7px;
    margin-right: 9px;
  }

  .lane-character-img.other {
    width: 50px;
    height: 50px;
    padding-top: 11px;
    padding-right: 7px;
    margin-left: 9px;
  }

</style>
