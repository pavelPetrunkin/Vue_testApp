<template>
  <div>
    <div class="first-team-background"></div>
    <h2 class="first-team-title">{{this.teamName}}</h2>
  </div>
</template>

<script type="text/javascript">

    import CharactersPair from './CharactersPair'
    import LineRoll from './LineRoll'

    function pairSplit (characters, enemies) {
        return characters.map((item, index) => [item, enemies[index]])
    }

    function roleSplit (characters) {
        return characters.map((item) => [item.role])
    }

    export default {
        name: 'FirstTeamName',
        props: ['teamName'],
        components: {
        },
        mounted () {
        },
        computed: {
            pairs () {
                return pairSplit(this.characters, this.enemies)
            },
            roles () {
                return roleSplit(this.characters)
            }
        },
        methods: {
            checkTodo (index) {
                this.$emit('checkOne', index)
            },
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .header h2 {
    font-family: Work Sans,serif;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    position: relative;
    z-index: 1;

    color: #FFFFFF;
  }

  .first-team-background {
    background: #0082B1;
    position: absolute;
    width: 344px;
    height: 36px;
    left: 312px;
    clip-path: polygon(0% 0%, 86% 0%, 96% 100%, 11% 100%);
  }

  .first-team-title {
    position: absolute;
    bottom: 10px;
    left: 74px;
  }

</style>
