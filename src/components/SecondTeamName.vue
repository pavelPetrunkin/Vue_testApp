<template>
  <div>
    <div class="second-team-background"></div>
    <h2 class="second-team-title">{{this.teamName}}</h2>
  </div>
</template>

<script type="text/javascript">

export default {
  name: 'SecondTeamName',
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

  .second-team-background {
    background: #B63129;
    position: absolute;
    width: 328px;
    height: 36px;
    right: 311px;
    clip-path: polygon(10% 0%, 100% 0%, 88% 100%, 0% 100%);
  }

  .second-team-title {
    bottom: 10px;
    right: 106px;
  }

</style>
