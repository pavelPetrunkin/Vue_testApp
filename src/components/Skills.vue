<template>
  <div class="skills modal" :id="'modal-skills' + checkIndex()">
    <div class="abilities abilities-row1">
      <img src="../assets/skills/arcanecomet.svg" alt="">
      <img src="../assets/skills/domination.svg" alt="">
    </div>
    <div class="abilities abilities-row2">
      <img src="../assets/skills/flash.svg" alt="">
      <img src="../assets/skills/teleport.svg" alt="">
    </div>
  </div>
</template>
<script type="text/javascript">

export default {
  name: 'Skills',
  props: ['character', 'selectorIndex'],
  methods: {
    checkIndex () {
      if (this.selectorIndex === undefined) {
        return ''
      } else if (parseInt(this.selectorIndex) === 0) {
        return '-my-row'
      } else {
        return '-other-row'
      }
    }
  }
}

</script>

<style scoped lang="scss">
  .first-player {
    .header {
      justify-content: flex-end;
      padding-right: 15px;
    }
    .stats {
      display: flex;
    }
    .stats-name {
      justify-content: flex-end;
      top: 1px;
    }
    .stats-info {
      justify-content: flex-end;
    }
    .stats-name {
      display: flex;
      flex-basis: 100%;
      position: relative;
      padding-bottom: 5px;
      justify-content: space-around;
      width: 237px;
    }
  }

  .second-player {
    .stats-info {
      position: relative;
      right: 5px;
    }
    .nick {
      width: 161px;
      text-align: left;
    }
    .header {
      flex-direction: row-reverse;
      justify-content: flex-end;
      position: relative;
    }
    .stats {
      display: flex;
      flex-direction: row-reverse;
    }
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

  .stats {
    p:last-child {
      color: #FFFFFF;
      font-weight: bold;
    }
    div:last-child {
      position: relative;
      left: 6px;
      p:first-child {
        display: flex;
        justify-content: center;
      }
    }
  }

  .first-player {
    .stats {
      div:first-child {
        position: relative;
        right: 24px;
        p:last-child {
          position: relative;
          left: 2px;
        }
      }
      div:last-child {
        p:last-child {
          position: relative;
          right: 12px;
        }
      }

    }
  }

  .second-player .stats div:first-child {
    position: relative;
    left: 25px;
  }
</style>
