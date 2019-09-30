<template>
  <div>
    <div @click="this.open" class="players-pair">
      <div class="hidden-hover" v-if="this.isOpen && this.index === this.selectorIndex"></div>
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
                  <p class="stats_champ">Champ Stats:</p>
                  <p class="stats_champ-val">{{character.champWin + '/' + character.champLose}} - 36.5%</p>
                </div>
                <div>
                  <p class="stats_ranked">Ranked Stats:</p>
                  <p class="stats_ranked-val">{{character.rankedWin + '/' + character.rankedLose}} - 64.0%</p>
                </div>
              </div>
              <div class="stats-name">
                <p>Debuff Tag</p>
                <p>Sub Tag</p>
                <p>Sub Tag</p>
                <p>Main Tag</p>
              </div>
            </div>
            <Skills :character="character"/>
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
              <Skills :character="enemy"/>
              <div class="stats-info">
                <div class="stats">
                  <div>
                    <p>Champ Stats:</p>
                    <p>{{enemy.champWin + '/' + enemy.champLose}} - 36.5%</p>
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
import Skills from './Skills'
export default {
  name: 'CharactersPair',
  props: ['character', 'enemy', 'index', 'openModal', 'isOpen', 'selectorIndex'],
  components: {
    Skills
  },
  methods: {
    open () {
      this.$emit('startAnimation');
      setTimeout(() => {
        this.$emit('openModal', {open: true, index: this.index});
        this.$emit('stopAnimation');
      }, 500);
    }
  }
}
</script>

<style lang="scss">
  .players-pair {
    position: relative;
    display: flex;
    justify-content: center;
    height: 140px;
    &:hover {
      background: radial-gradient(circle, #44465D 0%, rgba(68, 70, 93, 0) 100%);
      cursor: pointer;
    }
  }

  .first-player .header {
    justify-content: flex-end;
    padding-right: 15px;
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
    width: 130px;
    justify-content: center;
    transition: all 3s ease-in-out 2s;
  }

  .player-info {
    padding-top: 5px;
    width: 510px;
  }

  .nick {
    font-family: Work Sans,serif;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    color: #EAEAEE;
    width: 159px;
    text-align: right;
  }

  .first-player {
    display: flex;
    padding-right: 130px;
    z-index: 1;
    .character-info {
      justify-content: flex-end;
    }
    .stats {
      display: flex;
      div:first-child {
        position: relative;
        right: 26px;
      }

      .stats_champ-val {
        position: relative;
        left: 6px;
      }

      .stats_ranked-val {
        position: relative;
        right: 4px;
      }

      .stats_ranked {
        padding-left: 7px;
      }
    }
    .stats-name {
      justify-content: flex-end;
      top: 1px;
    }
    .stats-info {
      justify-content: flex-end;
    }
  }

  .second-player {
    display: flex;
    flex-direction: row-reverse;
    z-index: 1;
    .nick {
      width: 161px;
      text-align: left;
    }
    .character-info {
      justify-content: flex-start;
    }
    .header {
      flex-direction: row-reverse;
      justify-content: flex-end;
      position: relative;
    }
    .stats {
      display: flex;
      flex-direction: row-reverse;
      div:first-child {
        position: relative;
        left: 26px;
      }
      div:last-child {
        position: relative;
        left: 6px;
      }
    }
    .stats-info {
      position: relative;
      right: -3px;

    }
  }

  .header {
    display: flex;
    p {
      margin-top: 15px;
      margin-bottom: 14px;
      position: relative;
    }
  }

  .skills {
    display: flex;
    padding-top: 6px;
    padding-left: 5px;
    flex-wrap: wrap;
    width: 68px;
    img {
      background: #00000D;
      height: 22px;
      width: 22px;
      border: 1px solid gray;
      margin-right: 7px;
    }
  }

  .character-info {
    display: flex;
  }

  .stats {
    width: 100%;
    justify-content: flex-end;
    p:last-child {
      color: #FFFFFF;
      font-weight: bold;
    }
  }

  .stats-info {
    display: flex;
    flex-wrap: wrap;
    p {
      margin: 0;
      font-family: Work Sans,serif;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 16px;
      text-align: left;
      color: #868797;
    }
  }

  .second-player .stats-name {
    display: flex;
    flex-basis: 100%;
    position: relative;
    padding-bottom: 5px;
    left: 5px;
    top: 1px;
    justify-content: flex-start;
    width: 237px;
  }

  .first-player .stats-name {
    display: flex;
    flex-basis: 100%;
    position: relative;
    padding-bottom: 5px;
    justify-content: flex-end;
    width: 237px;
  }

  .first-player .stats-name p {
    display: flex;
    justify-content: center;
  }

  .players-pair:not(:first-child) {
    display: flex;
  }

  .first-player, .second-player .stats-name p:last-child {
    color: #FFFFFF;
  }

  .stats-name p {
    display: flex;
    align-items: center;
    position: relative;
    background: #1C1F33;
    height: 20px;
    top: 4px;
    padding: 0 10px 0 9px;
    margin-right: 10px;
    letter-spacing: -1px;
    word-spacing: 1px;
  }

  .hidden-hover {
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(270deg, #44465D 0%, rgba(68, 70, 93, 0) 100%);
    transform: matrix(-1, 0, 0, 1, 0, 0);
  }
</style>
