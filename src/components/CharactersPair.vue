<template>
  <div>
    <div class="players-pair">
      <div class="first-player">
        <div class="player-info">
          <div class="header">
            <p class="name">{{character.name}}</p>
            <p class="nick"> {{character.nick}}</p>
          </div>
          <div class="character-info">
            <div class="stats-info">
              <div class="stats">
                <div>
                  <p>Champ stats:</p>
                  <p>{{character.rankedWin + '/' + character.rankedLose}} - 36.5%</p>
                </div>
                <div>
                  <p>Ranked stats:</p>
                  <p>{{character.champWin + '/' + character.champLose}} - 64.0%</p>
                </div>
              </div>
              <div class="stats-name">
                <p>Debuff Tag</p>
                <p>Sub Tag</p>
                <p>Sub Tag</p>
                <p>Main Tag</p>
              </div>
            </div>
            <div class="skills">
              <div>
                <img :src="character.ability1" alt="">
                <img :src="character.ability3" alt="">
              </div>
              <div>
                <img :src="character.ability2" alt="">
                <img :src="character.ability4" alt="">
              </div>
            </div>
          </div>
        </div>
        <div>
          <img :src="character.avatar" alt="">
        </div>
      </div>

      <div class="second-player">
        <div class="player-info">
          <div class="header">
            <p class="name">{{enemy.name}}</p>
            <p class="nick"> {{enemy.nick}}</p>
          </div>
          <div>
            <div class="character-info">
              <div class="skills">
                <div class="abilities-row1">
                  <img :src="enemy.ability3" alt="">
                  <img :src="enemy.ability1" alt="">
                </div>
                <div class="abilities-row2">
                  <img :src="enemy.ability4" alt="">
                  <img :src="enemy.ability2" alt="">
                </div>
              </div>
              <div class="stats-info">
                <div class="stats">
                  <div>
                    <p>Champ stats:</p>
                    <p>50/4 - 36.5%</p>
                  </div>
                  <div>
                    <p>Ranked stats:</p>
                    <p>{{enemy.rankedWin + '/' + enemy.rankedLose}} - 64.0%</p>
                  </div>
                </div>
                <div class="stats-name">
                  <p>Debuff Tag</p>
                  <p>Sub Tag</p>
                  <p>Sub Tag</p>
                  <p>Main Tag</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img :src="enemy.avatar" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">

    export default {
        name: 'CharactersPair',
        props: ['character','enemy'],
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

  .players-pair {
    display: flex;
    justify-content: center;
    height: 140px;
    padding-top: 6px;
  }

  .first-player .header {
    justify-content: flex-end;
  }

  .name {
    font-family: Work Sans,serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    color: #B6B7C6;
    background: black;
    padding: 0 10px;
    height: 24px;
    display: flex;
    align-items: center;
  }

  .nick {
    font-family: Work Sans,serif;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    color: #EAEAEE;
    margin-right: 60px;
  }

  .first-player {
    display: flex;
    margin-right: 131px;
  }

  .first-player .stats {
    display: flex;
  }

  .second-player {
    display: flex;
    flex-direction: row-reverse;
  }

  .second-player .header {
    flex-direction: row-reverse;
    justify-content: flex-end;
  }

  .second-player .stats {
    display: flex;
    flex-direction: row-reverse;
  }

  .second-player .abilities-row1 {
    position: relative;
    right: 2px;
  }

  .second-player .abilities-row2 {
    position: relative;
    right: 11px;
  }

  .first-player .stats-name {
    justify-content: flex-end;
  }

  .header {
    display: flex;
    padding-left: 4px;
  }

  .header p {
    margin-top: 15px;
    margin-bottom: 14px;
  }

  .skills {
    display: flex;
    padding-top: 6px;
  }

  .skills img {
    background: #00000D;
    margin-bottom: 2px;
    height: 24px;
    width: 24px;
  }

  .character-info {
    display: flex;
  }

  .first-player .stats-info {
    justify-content: flex-end;
  }

  .stats-info {
    display: flex;
    flex-wrap: wrap;
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

  .stats p:last-child {
    color: #FFFFFF;
    font-weight: bold;
  }

  .stats div:last-child {
    position: relative;
    left: 6px;
  }

  .stats div:last-child p:first-child {
    display: flex;
  }

  .second-player .stats div:first-child {
    position: relative;
    left: 25px;
  }

  .stats-name {
    display: flex;
    flex-basis: 100%;
  }

  .stats-name p:first-child {
    color: #FFFFFF;
  }

</style>
