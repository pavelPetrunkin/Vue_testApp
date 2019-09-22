<template>
  <div class="one-rune">
    <img src="/static/runes/rune.svg" alt="cake"/>
  </div>
</template>

<script type="text/javascript">

export default {
  name: 'OneRune',
  props: ['characters', 'enemies', 'selectorIndex']
}
</script>

<style>

  .one-rune {
    display: flex;
  }

</style>
