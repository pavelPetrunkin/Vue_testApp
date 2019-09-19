<template>
  <div class="modal-container">
    <FirstTeamName :teamName="this.firstTeam"/>
    <div class="my-row-avatar" v-if="parseInt(this.selectorIndex) === 0">
      <img :src="this.characters[this.selectorIndex].avatar" alt="">
    </div>
    <div class="other-avatar" v-if="parseInt(this.selectorIndex) !== 0">
      <img :src="this.characters[this.selectorIndex].avatar" alt="">
    </div>
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
  .my-row-avatar {
    position: relative;
    left: 8px;
    bottom: 5px;
  }
  .other-avatar {
    position: relative;
    top: 10px;
    left: 8px;
  }

  .modal-body {
    margin: 20px 0;
  }

</style>
