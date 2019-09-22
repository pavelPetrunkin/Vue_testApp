<template>
  <div class="pair-runes">
    <img src="/static/runes/rune.svg" alt="cake"/>
    <img src="/static/runes/rune.svg" alt="cake"/>
  </div>
</template>

<script type="text/javascript">

export default {
  name: 'PairRunes',
  props: ['characters', 'enemies', 'selectorIndex']
}
</script>

<style>

  .triangle-runes {
    display: flex;
  }

</style>
