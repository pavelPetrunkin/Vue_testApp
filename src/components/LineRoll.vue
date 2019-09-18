<template>
  <div class="circle">
  </div>
</template>

<script type="text/javascript">

    export default {
        name: 'LineRoll',
        props: ['characters', 'enemies'],
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
  }
</style>
