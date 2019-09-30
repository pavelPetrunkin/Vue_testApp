<template>
  <div class="second-team-name">
    <div class="second-team-background"></div>
    <h2 class="second-team-title">{{this.teamName}}</h2>
  </div>
</template>

<script type="text/javascript">

export default {
  name: 'SecondTeamName',
  props: ['teamName'],
}
</script>

<style scoped>
  .second-team-background {
    background: #B63129;
    position: absolute;
    width: 328px;
    height: 36px;
    right: 50px;
    clip-path: polygon(10% 0%, 100% 0%, 88% 100%, 0% 100%);
  }
  .second-team-title {
    bottom: 10px;
    right: 130px;
  }
</style>
