<template>
  <div :class="'circle' + checkRole()">
    <div>
      <img :src="role"/>
    </div>
  </div>
</template>

<script type="text/javascript">

export default {
  name: 'LineRoll',
  props: ['role', 'selectorIndex'],
  mounted () {
  },
  computed: {
  },
  methods: {
    checkRole () {
      if (this.selectorIndex === undefined) {
        return ''
      } else if (parseInt(this.selectorIndex) === 0) {
        return ' my-row role-modal'
      } else {
        return ' other-row role-modal'
      }
    }
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
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
  }

  .circle div {
    display: flex;
  }
</style>
