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
    console.log(this.laneExp)
  }
}
</script>

<style>

</style>
