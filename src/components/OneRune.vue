<template>
  <div class="one-rune">
    <img src="../assets/runes/rune.svg" alt="rune"/>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'OneRune',
  props: ['characters', 'enemies', 'selectorIndex']
}
</script>

<style scoped>
  .one-rune {
    display: flex;
  }
</style>
