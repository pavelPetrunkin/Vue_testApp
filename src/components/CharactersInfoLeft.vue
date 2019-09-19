<template>
  <div class="modal-container">
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

  </div>
</template>

<script type="text/javascript">

import FirstTeamName from './FirstTeamName'

export default {
  name: 'CharactersInfoLeft',
  props: ['characters', 'firstTeam', 'selectorIndex'],
  components: {
    FirstTeamName
  },
  mounted () {
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
