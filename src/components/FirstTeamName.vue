<template>
  <div class="first-team-name">
    <div class="first-team-background"></div>
    <h2 class="first-team-title">{{ this.teamName }}</h2>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'FirstTeamName',
  props: ['teamName'],
}
</script>

<style scoped>
  .first-team-title {
    bottom: 10px;
    left: 145px;
  }
  .first-team-background {
    background: #0082B1;
    position: absolute;
    width: 344px;
    height: 36px;
    left: 52px;
    clip-path: polygon(0% 0%, 86% 0%, 96% 100%, 11% 100%);
  }
</style>
