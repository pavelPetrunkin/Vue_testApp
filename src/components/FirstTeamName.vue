<template>
  <div>
    <div class="first-team-background"></div>
    <h2 class="first-team-title">{{this.teamName}}</h2>
  </div>
</template>

<script type="text/javascript">

export default {
  name: 'FirstTeamName',
  props: ['teamName'],
  components: {
  },
  mounted () {
  },
  computed: {
  },
  methods: {
  }
}
</script>

<style scoped>

  .header h2 {
    font-family: Work Sans,serif;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    position: relative;
    z-index: 1;

    color: #FFFFFF;
  }

  .first-team-background {
    background: #0082B1;
    position: absolute;
    width: 344px;
    height: 36px;
    left: 312px;
    clip-path: polygon(0% 0%, 86% 0%, 96% 100%, 11% 100%);
  }

  .first-team-title {
    position: absolute;
    bottom: 10px;
    left: 74px;
  }

</style>
