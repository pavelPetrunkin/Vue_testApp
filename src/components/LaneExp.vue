<template>
  <div class="lane-exp">
    <LaneExpEarly :expEarly="laneExp.early"/>
    <LaneExpMid :expMid="laneExp.mid"/>
    <LaneExpLate :expLate="laneExp.late"/>
  </div>
</template>

<script type="text/javascript">
import LaneExpEarly from './LaneExpEarly'
import LaneExpLate from './LaneExpLate'
import LaneExpMid from './LaneExpMid'
export default {
  name: 'LaneExp',
  props: ['laneExp'],
  components: {
    LaneExpEarly,
    LaneExpMid,
    LaneExpLate
  },
  mounted () {
  }
}
</script>

<style>

  .lane-exp {
    display: flex;
    height: 38%;
    flex-basis: 100%;
    position: relative;
    justify-content: space-between;
  }

  .lane-exp img {
    position: absolute;
    top: 3px;
  }

  .lane-exp p {
    font-family: Work Sans,sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
    color: #868797;
    margin: 0;
    top: 26px;
    position: relative;
  }

</style>
