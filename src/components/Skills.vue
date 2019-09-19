<template>
  <div class="skills">
    <div class="abilities abilities-row1">
      <img :src="character.ability1" alt="">
      <img :src="character.ability2" alt="">
    </div>
    <div class="abilities abilities-row2">
      <img :src="character.ability3" alt="">
      <img :src="character.ability4" alt="">
    </div>
  </div>
</template>

<script type="text/javascript">

export default {
  name: 'Skills',
  props: ['character']
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .first-player .header {
    justify-content: flex-end;
    padding-right: 15px;
  }

  .second-player .nick {
    width: 161px;
    text-align: left;
  }
  .first-player .stats {
    display: flex;
  }

  .second-player .header {
    flex-direction: row-reverse;
    justify-content: flex-end;
    position: relative;
  }

  .second-player .stats {
    display: flex;
    flex-direction: row-reverse;
  }

  .second-player .abilities-row1 {
    position: relative;
    right: 3px;
  }

  .second-player .abilities-row2 {
    position: relative;
    right: 11px;
  }

  .first-player .stats-name {
    justify-content: flex-end;
    top: 1px;
  }

  .first-player .abilities-row2 {
    position: relative;
    left: 1px;
  }

  .first-player .abilities-row1 {
    position: relative;
    left: 11px;
  }

  .header p {
    margin-top: 15px;
    margin-bottom: 14px;
    position: relative;
  }

  .skills {
    display: flex;
    padding-top: 5px;
  }

  .skills img {
    background: #00000D;
    height: 24px;
    width: 24px;
    border: 1px solid gray;
  }

  .first-player .stats-info {
    justify-content: flex-end;
  }

  .stats-info p {
    margin: 0;
    font-family: Work Sans,serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;

    color: #868797;
  }

  .second-player .stats-info {
    position: relative;
    right: 5px;
  }

  .stats p:last-child {
    color: #FFFFFF;
    font-weight: bold;
  }

  .stats div:last-child {
    position: relative;
    left: 6px;
  }

  .first-player .stats div:first-child {
    position: relative;
    right: 26px;
  }

  .first-player .stats div:first-child p:last-child {
    position: relative;
    left: 2px;
  }

  .first-player .stats div:last-child p:last-child {
    position: relative;
    right: 12px;
  }

  .stats div:last-child p:first-child {
    display: flex;
  }

  .second-player .stats div:first-child {
    position: relative;
    left: 25px;
  }

  .second-player .stats-name {
    display: flex;
    flex-basis: 100%;
    position: relative;
    padding-bottom: 5px;
    left: 5px;
    top: 1px;
    justify-content: space-around;
    width: 237px;
  }

  .first-player .stats-name {
    display: flex;
    flex-basis: 100%;
    position: relative;
    padding-bottom: 5px;
    justify-content: space-around;
    width: 237px;
  }

  .first-player .stats-name p {
    width: 65px;
    display: flex;
    justify-content: center;
  }

  .first-player .stats-name p:last-child {
    color: #FFFFFF;
  }

  .second-player .stats-name p:last-child {
    color: #FFFFFF;
  }

  .stats-name p {
    display: flex;
    align-items: center;
    position: relative;
    background: #1C1F33;
    height: 20px;
    top: 4px;

    right: 3px;
    letter-spacing: -1px;
    word-spacing: 1px;
  }



</style>
