<template>
  <div class="modal-container">
  <SecondTeamName :teamName="this.secondTeam"/>
    <div class="my-row-avatar" v-if="parseInt(this.selectorIndex) === 0">
      <img :src="this.enemies[this.selectorIndex].avatar" alt="">
    </div>
    <div class="other-avatar" v-if="parseInt(this.selectorIndex) !== 0">
      <img :src="this.enemies[this.selectorIndex].avatar" alt="">
    </div>
    <div class="modal-footer">
      <slot name="footer">
      </slot>
    </div>
  </div>
</template>

<script type="text/javascript">

import SecondTeamName from './SecondTeamName'

export default {
  name: 'CharactersInfoRight',
  props: ['enemies', 'secondTeam', 'selectorIndex'],
  components: {
    SecondTeamName
  },
  mounted () {
  }
}
</script>

<style>
  .my-row-avatar {
    position: relative;
    right: 10px;
    bottom: 5px;
  }
  .other-avatar {
    position: relative;
    top: 10px;
    right: 10px;
  }

  .modal-body {
    margin: 20px 0;
  }

</style>
