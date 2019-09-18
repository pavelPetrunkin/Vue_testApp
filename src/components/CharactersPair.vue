<template>
  <div>
    <div class="players-pair">
      <div class="hidden-hover"></div>
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
                  <p>Champ Stats:</p>
                  <p>{{character.champWin + '/' + character.champLose}} - 36.5%</p>
                </div>
                <div>
                  <p>Ranked Stats:</p>
                  <p>{{character.rankedWin + '/' + character.rankedLose}} - 64.0%</p>
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
              <div class="abilities-row1">
                <img :src="character.ability1" alt="">
                <img :src="character.ability2" alt="">
              </div>
              <div class="abilities-row2">
                <img :src="character.ability3" alt="">
                <img :src="character.ability4" alt="">
              </div>
            </div>
          </div>
        </div>
        <div class="avatar">
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
                  <img :src="enemy.ability4" alt="">
                </div>
                <div class="abilities-row2">
                  <img :src="enemy.ability1" alt="">
                  <img :src="enemy.ability2" alt="">
                </div>
              </div>
              <div class="stats-info">
                <div class="stats">
                  <div>
                    <p>Champ Stats:</p>
                    <p>50/4 - 36.5%</p>
                  </div>
                  <div>
                    <p>Ranked Stats:</p>
                    <p>{{enemy.rankedWin + '/' + enemy.rankedLose}} - 64.0%</p>
                  </div>
                </div>
                <div class="stats-name">
                  <p>Main Tag</p>
                  <p>Sub Tag</p>
                  <p>Sub Tag</p>
                  <p>Debuff Tag</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="avatar">
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
    position: relative;
    display: flex;
    justify-content: center;
    height: 140px;
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
    padding-right: 11px;
    padding-left: 10px;
    height: 24px;
    display: flex;
    align-items: center;
  }

  .avatar {
    display: flex;
  }

  .player-info {
    padding-top: 5px;
  }

  .nick {
    font-family: Work Sans,serif;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    color: #EAEAEE;
  }

  .second-player .nick {
    margin-right: 60px;
  }

  .first-player {
    display: flex;
    margin-right: 131px;
    z-index: 1;
    position: relative;
  }

  .first-player .stats {
    display: flex;
  }

  .second-player {
    display: flex;
    flex-direction: row-reverse;
    position: relative;
    z-index: 1;
  }

  .second-player .header {
    flex-direction: row-reverse;
    justify-content: flex-end;
    left: 4px;
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

  .header {
    display: flex;
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

  .character-info {
    display: flex;
  }

  .stats {
    width: 100%;
    justify-content: flex-end;
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

  .players-pair:not:first-child {
    display: flex;
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

  .hidden-hover {
    position: absolute;
    width: 105rem;
    height: 100%;
  }

  .hidden-hover:hover {
    background: linear-gradient(270deg, #44465D 0%, rgba(68, 70, 93, 0) 100%);
    transform: matrix(-1, 0, 0, 1, 0, 0);
  }

</style>
