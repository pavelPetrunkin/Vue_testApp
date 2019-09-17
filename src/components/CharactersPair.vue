<template>
  <div>
    <div class="players-pair">
      <div class="first-player">
        <div>
          <div class="header">
            <p class="name">{{character.name}}</p>
            <p class="nick"> {{character.nick}}</p>
          </div>
          <div>
            <div class="stats">
              <div>
                <p>Champ stats:</p>
                <p>50/4 - 36.5%</p>
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
          <div>
            <img src="" alt="">
            <img src="" alt="">
            <img src="" alt="">
            <img src="" alt="">
          </div>
        </div>
        <div>
          <img src="" alt="">
        </div>
      </div>

      <div class="second-player">
        <div>
          <div class="header">
            <p class="name">{{enemy.name}}</p>
            <p class="nick"> {{enemy.nick}}</p>
          </div>
          <div>
            <div class="stats">
              <div>
                <p>Champ stats:</p>
                <p>50/4 - 36.5%</p>
              </div>
              <div>
                <p>Ranked stats:</p>
                <p>{{enemy.champWin + '/' + enemy.champLose}} - 64.0%</p>
              </div>
            </div>
            <div class="stats-name">
              <p>Debuff Tag</p>
              <p>Sub Tag</p>
              <p>Sub Tag</p>
              <p>Main Tag</p>

            </div>
          </div>
          <div>
            <img src="" alt="">
            <img src="" alt="">
            <img src="" alt="">
            <img src="" alt="">
          </div>
        </div>
        <div>
          <img src="" alt="">
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
    justify-content: space-between;
  }

  .first-player .header {
    justify-content: flex-end;
  }

  .name {
    font-family: Work Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    color: #B6B7C6;
    background: black;
    padding: 0 6px;
    height: 24px;
  }

  .nick {
    font-family: Work Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    color: #EAEAEE;
  }

  .first-player .stats {
    justify-content: flex-end;
  }

  .first-player .stats-name {
    justify-content: flex-end;
  }

  .header {
    display: flex;
  }

  .stats {
    display: flex;
  }

  .stats-name {
    display: flex;
  }

</style>
