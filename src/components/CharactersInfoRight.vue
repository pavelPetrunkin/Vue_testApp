<template>
  <div class="modal-container">
  <SecondTeamName :teamName="this.secondTeam"/>
    <div class="my-row-avatar-right" v-if="parseInt(this.selectorIndex) === 0">
      <img :src="this.enemies[this.selectorIndex].avatar" alt="">
      <p>{{this.enemies[selectorIndex].name}}</p>
    </div>
    <div class="other-avatar-right" v-if="parseInt(this.selectorIndex) !== 0">
      <img :src="this.enemies[this.selectorIndex].avatar" alt="">
      <p>{{this.enemies[selectorIndex].name}}</p>
    </div>
    <p v-if="parseInt(this.selectorIndex) === 0" class="my-nick-row-right">{{this.enemies[selectorIndex].nick}}</p>
    <p v-if="parseInt(this.selectorIndex) !== 0" class="other-nick-row-right">{{this.enemies[selectorIndex].nick}}</p>
    <Skills :character="enemies[selectorIndex]"
            :selectorIndex="selectorIndex"/>

  </div>
</template>

<script type="text/javascript">

import SecondTeamName from './SecondTeamName'
import Skills from './Skills'

export default {
  name: 'CharactersInfoRight',
  props: ['enemies', 'secondTeam', 'selectorIndex'],
  components: {
    SecondTeamName,
    Skills
  },
  mounted () {
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
