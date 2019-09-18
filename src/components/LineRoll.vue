<template>
  <div class="circle">
    <div>
      <img :src="role"/>
    </div>
  </div>
</template>

<script type="text/javascript">

export default {
  name: 'LineRoll',
  props: ['role'],
  mounted () {
  },
  computed: {
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .circle {
    border: 2px solid black;
    border-radius: 20px;
    width: 36px;
    height: 36px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
  }

  .circle div {
    display: flex;
  }
</style>
