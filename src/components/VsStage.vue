<template>
  <div>
    <div id="header-id" class="header">
      <div>
        <div class="first-team-background"></div>
        <h2 class="first-team-title">LOREM IPSUM</h2>
      </div>
      <div>
        <div class="stage-background"></div>
        <div class="middle-border"></div>
        <h2 class="game-stage-title">TEAM COMPARISON</h2>
      </div>

      <div>
        <div class="second-team-background"></div>
        <h2 class="second-team-title">DOLOR SIT AMET</h2>
      </div>
    </div>
    <div class="characters-list">
      <CharactersPair
        v-for="(pair,index) in pairs"
        :character="pair[0]"
        :enemy="pair[1]"
        :key="index"
      />

    </div>
  </div>
</template>

<script type="text/javascript">

import CharactersPair from "./CharactersPair";

function pairSplit (characters,enemies){
    return characters.map( (item,index) => [item,enemies[index]])
}

export default {
  name: 'VsStage',
  props: ['characters', 'enemies'],
  components: {
    CharactersPair,
  },
  mounted () {
  },
  computed: {
    pairs () {
      return pairSplit(this.characters,this.enemies)
    },
    countChecked () {
      return this.characters.filter(item => item.checked === true).length
    },
    countUnchecked () {
      return this.characters.filter(item => item.checked === false).length
    },
    countAll () {
      return this.characters.length
    }

  },
  methods: {
    showAll () {
      this.filter = 'showAll'
      this.characters.forEach((item, i) => {
        this.characters[i].blocked = false
      })
    },
    showChecked () {
      this.filter = 'showChecked'
      this.characters.forEach((item, i) => {
        if (this.characters[i].checked) {
          this.characters[i].blocked = false
        }
      })
    },
    getPage (page) {
      this.$emit('getPage', page)
    },
    showUnchecked () {
      this.filter = 'showUnchecked'
      this.characters.forEach((item, i) => {
        if (!this.characters[i].checked) {
          this.characters[i].blocked = false
        }
      })
    },
    checkTodo (index) {
      this.$emit('checkOne', index)
    },
    createItem () {
      if (this.inputText !== undefined && this.inputText !== '') {
        let newTodo = {
          name: this.inputText,
          isEditing: false,
          checked: false,
          id: getNewId(this.idList),
          blocked: false,
          item: 'item'
        }
        this.$emit('create', newTodo)
      }
    },
    editTodo (index) {
      this.characters[index].isEditing = true
      this.index = index
      this.$el.querySelector('.editing').focus()
    },
    handleInput (e) {
      let text = e.target.innerHTML
      if (text !== '') {
        this.characters[this.index].name = text
      }
    },
    deleteTodo (index) {
      this.characters.splice(index, 1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .stage-background {
    background: #00000D;
    position: absolute;
    width: 381px;
    height: 38px;
    left: 650px;
    top: 77px;
  }

  .game-stage-title {
    top: 1px;
  }



  .header {
    display: flex;
    justify-content: space-between;
    padding: 59px 284px 0 312px;
  }

  .middle-border {
    right: 759px;
    height: 752px;
    width: 2px;
    background: #00000D;
    position: absolute;
    top: 115px;
  }

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
    width: 329px;
    height: 36px;
  }

  .second-team-background {
    background: #B63129;
    position: absolute;
    width: 329px;
    height: 36px;
    right: 230px;
  }

  .first-team-title {
    position: absolute;
    bottom: 10px;
    left: 93px;
  }

  .second-team-title {
    bottom: 10px;
    right: 106px;
  }

</style>
