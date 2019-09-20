<template>
  <div class="modal-container">
    <LineRoll
      :role="characters[selectorIndex].role"
      :selectorIndex="selectorIndex"></LineRoll>
    <SecondTeamName :teamName="this.secondTeam"/>
    <div class="my-row-avatar-right" v-if="parseInt(this.selectorIndex) === 0">
      <img :src="this.characters[this.selectorIndex].avatar" alt="">
      <p>{{this.characters[selectorIndex].name}}</p>
    </div>
    <div class="other-avatar-right" v-if="parseInt(this.selectorIndex) !== 0">
      <img :src="this.characters[this.selectorIndex].avatar" alt="">
      <p>{{this.characters[selectorIndex].name}}</p>
    </div>
    <p v-if="parseInt(this.selectorIndex) === 0" class="my-nick-row-right">{{this.characters[selectorIndex].nick}}</p>
    <p v-if="parseInt(this.selectorIndex) !== 0" class="other-nick-row-right">{{this.characters[selectorIndex].nick}}</p>
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
      <ModalAvatars :characters="characters" :selectorIndex="selectorIndex"></ModalAvatars>
      <ModalRoles :characters="characters" :selectorIndex="selectorIndex" class="roles-modal"/>
    </div>
  </div>
</template>

<script type="text/javascript">

import SecondTeamName from './SecondTeamName'
import Skills from './Skills'
import LineRoll from './LineRoll'
import ModalAvatars from './ModalAvatars'
import ModalRoles from './ModalRoles'

export default {
  name: 'CharactersInfoRight',
  props: ['characters', 'secondTeam', 'selectorIndex'],
  components: {
    SecondTeamName,
    Skills,
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
  .my-row-avatar-right {
    position: relative;
    right: 10px;
    bottom: 5px;
  }
  .other-avatar-right {
    position: relative;
    top: 10px;
    right: 10px;
  }

  .stats {
    color: white;
  }

  .stats p {
    margin: 0;
    font-family: Work Sans,serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    color: #868797;
  }

  .stats p:last-child {
    color: #FFFFFF;
    font-weight: bold;
  }

  .modal-container {
    background: black;
  }

  .my-row-avatar-right p {
    width: 46px;
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

  .other-avatar-right p {
    bottom: 17px;
    margin: 0 auto;
    background: black;
    color: white;
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: end;
    -ms-flex-align: end;
    align-items: flex-end;
    height: 18px;
  }

  .my-nick-row-right {
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
    right: 11px;
  }

  .other-nick-row-right {
    font-family: Work Sans,serif;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    color: #EAEAEE;
    margin: 0;
    text-align: center;
    position: relative;
    right: 11px;
    top: 9px;
  }

  .modal-body {
    margin: 20px 0;
  }

</style>
