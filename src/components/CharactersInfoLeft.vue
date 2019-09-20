<template>
  <div class="modal-container">
    <LineRoll
      :role="characters[selectorIndex].role"
      :selectorIndex="selectorIndex"/>
    <FirstTeamName :teamName="this.firstTeam"/>
    <div class="my-row-avatar-left" v-if="parseInt(this.selectorIndex) === 0">
      <img :src="this.characters[this.selectorIndex].avatar" alt="">
      <p>{{this.characters[selectorIndex].name}}</p>
    </div>
    <div class="other-avatar-left" v-if="parseInt(this.selectorIndex) !== 0">
      <img :src="this.characters[this.selectorIndex].avatar" alt="">
      <p>{{this.characters[selectorIndex].name}}</p>
    </div>
    <p v-if="parseInt(this.selectorIndex) === 0" class="my-row-nick-left">{{this.characters[selectorIndex].nick}}</p>
    <p v-if="parseInt(this.selectorIndex) !== 0" class="other-row-nick-left">{{this.characters[selectorIndex].nick}}</p>
    <Skills :character="characters[selectorIndex]"
            :selectorIndex="selectorIndex"/>
    <div :class="'stats' + checkStats()">
      <div>
        <p>Ranked Stats:</p>
        <p>{{characters[selectorIndex].rankedWin + '/' + characters[selectorIndex].rankedLose}} - 64.0%</p>
      </div>
      <div>
        <p>Champ Stats:</p>
        <p>{{characters[selectorIndex].champWin + '/' + characters[selectorIndex].champLose}} - 36.5%</p>
      </div>
    </div>
    <div :class="'stats-name' + checkStatsName()">
      <p>Main Tag</p>
      <p>Sub Tag</p>
      <p>Sub Tag</p>
      <p>Debuff Tag</p>
      <ModalAvatars :characters="characters" :selectorIndex="selectorIndex"/>
      <ModalRoles :characters="characters" :selectorIndex="selectorIndex" class="roles-modal"/>
    </div>
  </div>
</template>

<script type="text/javascript">

import FirstTeamName from './FirstTeamName'
import Skills from './Skills'
import LineRoll from './LineRoll'
import ModalAvatars from './ModalAvatars'
import ModalRoles from './ModalRoles'

export default {
  name: 'CharactersInfoLeft',
  props: ['characters', 'firstTeam', 'selectorIndex'],
  components: {
    Skills,
    FirstTeamName,
    LineRoll,
    ModalAvatars,
    ModalRoles
  },
  methods: {
    checkStats () {
      if (this.selectorIndex === undefined) {
        return ''
      } else if (parseInt(this.selectorIndex) === 0) {
        return ' my-row stats-modal'
      } else {
        return ' other-row stats-modal'
      }
    },
    checkStatsName () {
      if (this.selectorIndex === undefined) {
        return ''
      } else if (parseInt(this.selectorIndex) === 0) {
        return ' my-row stats-name-modal'
      } else {
        return ' other-row stats-name-modal'
      }
    }
  }
}
</script>

<style>
  .my-row-avatar-left {
    position: relative;
    left: 8px;
    bottom: 5px;
  }
  .other-avatar-left {
    position: relative;
    top: 10px;
    left: 8px;
  }

  .my-row-avatar-left p {
    width: 60px;
    margin: 0 auto;
    background: black;
    color: white;
    position: relative;
    bottom: 32px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    height: 18px;
  }

  .modal-container {
    background: black;
  }

  .other-avatar-left p {
    bottom: 17px;
    margin: 0 auto;
    background: black;
    color: white;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    height: 18px;
  }

  .my-row-nick-left {
    font-family: Work Sans,serif;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    color: #EAEAEE;
    margin: 0;
    text-align: center;
    position: relative;
    bottom: 21px;
    left: 35px;
    width: 128px;
  }

  .other-row-nick-left {
    font-family: Work Sans,serif;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    color: #EAEAEE;
    margin: 0;
    text-align: center;
    position: relative;
    left: 35px;
    width: 128px;
    top: 9px;
  }

  .modal-body {
    margin: 20px 0;
  }

</style>
