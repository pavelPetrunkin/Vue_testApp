<template>
  <div :class="['vs-info', {'d-none': isOpenCharactersInfo}]">
    <CharactersInfo
      :characters="characters"
      :enemies="enemies"
      :firstTeam="firstTeam"
      :secondTeam="secondTeam"
      :open="isOpenCharactersInfo"
      :selectorIndex="selectorIndex"
      :spellSlot="spellSlot"
      :itemsSlot="itemsSlot"
    />
    <div id="header-id" class="header">
      <FirstTeamName :teamName="this.firstTeam.name"/>
      <div class="middle-comparison">
        <div class="stage-background"></div>
        <div class="middle-border"></div>
        <div  class="role">
          <LineRoll
            v-for="(role,index) in roles"
            :role="role[0]"
            :key="index"/>
        </div>
        <h2 class="game-stage-title">TEAM COMPARISON</h2>
      </div>

      <SecondTeamName :teamName="this.secondTeam.name"/>
    </div>
    <div :class="['characters-list', {'clicked': clicked}]">
      <CharactersPair
        v-for="(pair,index) in pairs"
        :character="pair[0]"
        :enemy="pair[1]"
        :key="index"
        :index="index"
        :selectorIndex="selectorIndex"
        :isOpen="isOpenCharactersInfo"
        @openModal="openCharactersInfo"
        @startAnimation="startAnimation"
        @stopAnimation="stopAnimation"
      />
    </div>
  </div>
</template>

<script type="text/javascript">

import CharactersInfo from './CharactersInfo.vue';
import CharactersPair from './CharactersPair.vue';
import LineRoll from './LineRoll.vue';
import FirstTeamName from './FirstTeamName.vue';
import SecondTeamName from './SecondTeamName.vue';
import { mapActions } from 'vuex';

const pairSplit = (characters, enemies) => {
  return characters.map((item, index) => [item, enemies[index]])
}

const roleSplit = (characters) => {
  return characters.map((item) => [item.role])
}

export default {
  name: 'VsStage',
  props: [
    'characters', 'enemies',
    'firstTeam', 'secondTeam',
    'isOpenCharactersInfo', 'selectorIndex',
    'spellSlot', 'itemsSlot'],
  components: {
    CharactersPair,
    LineRoll,
    FirstTeamName,
    SecondTeamName,
    CharactersInfo
  },
  data() {
    return { clicked: false }
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
    ...mapActions(['CHARACTERS_INFO']),
    openCharactersInfo(payload) {
      return this.CHARACTERS_INFO(payload)
    },
    startAnimation() {
      return this.clicked = true;
    },
    stopAnimation() {
      return this.clicked = false;
    }
  }
}
</script>

<style lang="scss">
  .circle-roles, .circle {
    border: 2px solid black;
    border-radius: 20px;
    width: 36px;
    height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    background: black;
    div {
      display: flex;
    }
  }
  #header-id {
    .first-team-name {
      position: relative;
    }
    .second-team-name {
      position: relative;
    }
  }
  .triangle-runes {
    display: flex;
  }
  .stats-modal {
    margin-top: 10px;
    div:first-child {
      margin-bottom: 10px;
    }
  }
  .vs-info {
    position: relative;
    z-index: 1;
    padding-left: 8px;
  }
  .role {
    position: absolute;
    right: 190px;
    top: 129px;
    height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .stage-background {
    background: #00000D;
    position: absolute;
    width: 381px;
    height: 38px;
    top: 18px;
    clip-path: polygon(0 0, 100% 0, 90% 100%, 11% 100%);
  }
  .header {
    display: flex;
    justify-content: space-between;
    padding: 59px 16rem 0 16rem;
  }
  .characters-list {
    padding-top: 23px;
    &.clicked {
      & .first-player {
        transition:  padding-right .7s ease;
        padding-right: 84% !important;
      }
    }
    div:not(:first-child) {
      .first-player {
        margin-right: 0;
        width: 50%;
        justify-content: flex-end;
        padding-right: 130px;
        .stats {
          position: relative;
          right: -5px;
        }
      }
      .second-player {
        width: 50%;
        justify-content: flex-end;
        .skills {
          padding-left: 4px;
        }
        .abilities-row2 {
          right: 14px;
        }
        .stats-info {
          left: 4px;
        }
        .stats-name {
          left: 3px;
        }
        .header {
          padding-left: 20px;
        }
      }
    }
    div:first-child {
      .first-player {
        .abilities-row2, .abilities-row1 {
          position: relative;
          left: 5px;
          top: 1px;
        }
        .stats-name {
          left: 2px;
        }
        .header {
          padding: 0 6px 0 0;
        }
        .stats {
          position: relative;
          left: -5px;
        }
      }
      .second-player {
        .header {
          padding: 0 0 0 4px;
        }
      }
    }
  }
  .middle-comparison {
    position: relative;
    width: 25rem;
    left: 24px;
  }
  .middle-border {
    z-index: 1;
    right: 209px;
    height: 752px;
    width: 2px;
    background: #00000D;
    position: absolute;
    top: 56px;
  }
  .stats.other-row {
    top: 24px;
  }
  .header {
    h2 {
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
  }
  .modal-container {
    .first-team-name {
      position: absolute;
    }
    .first-team-background {
      bottom: 3px;
      left: 31px;
      background: #0082B1;
      position: absolute;
      width: 344px;
      height: 36px;
      clip-path: polygon(0% 0%, 86% 0%, 96% 100%, 11% 100%);
    }
    .first-team-name h2 {
      font-family: Work Sans,serif;
      font-style: normal;
      font-weight: bold;
      font-size: 20px;
      line-height: 23px;
      text-align: center;
      position: absolute;
      left: 95px;
      width: 200px;
      margin: 0;
      z-index: 1;
      color: #FFFFFF;
    }
    .second-team-name {
      position: absolute;
      width: 0;
      height: 0;
      right: 403px;
    }
    .second-team-background {
      bottom: 3px;
      left: 0;
      background: #B63129;
      position: absolute;
      width: 329px;
      height: 36px;
      clip-path: polygon(10% 0%, 100% 0%, 88% 100%, 0% 100%);
    }
    .second-team-name h2 {
      font-family: Work Sans,serif;
      font-style: normal;
      font-weight: bold;
      font-size: 20px;
      line-height: 23px;
      text-align: center;
      position: absolute;
      left: 64px;
      width: 200px;
      margin: 0;
      z-index: 1;
      color: #FFFFFF;
    }
    .abilities {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .abilities-row1 {
        margin-right: 10px;
      }
    }
  }
  .stats-name.other-row {
    top: 34px;
  }
  #modal-skills-other-row, #modal-skills-my-row {
    margin: 14px auto 0;
    .abilities-row2 img {
      margin-right: 0;
    }
  }
  .modal-wrapper {
    .stats-name {
      color: white;
      position: relative;
      top: 4px;
    }
    .avatars {
      top: 202px;
      right: 88px;
      position: absolute;
    }
    .modal {
      justify-content: flex-start;
      height: 58px;
      width: 58px;
      position: relative;
    }
    .role-modal {
      background: black;
      position: absolute;
      top: 70px;
      right: 220px;
    }
    .stats-name p {
      background: #1C1F33;
      width: fit-content;
      margin: 0 auto 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: Work Sans, serif;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 16px;
      height: 20px;
    }
    .modal-container {
      .other-row {
        img:nth-child(1) {
          top: 165px;
        }
        img:nth-child(2) {
          top: 115px;
        }
        img:nth-child(3) {
          top: 65px;
        }
      }
    }
    .modal-container:first-child {
      padding: 20px 25px 20px 45px;
      .avatars {
        top: 181px;
        right: 86px;
      }
      .roles-modal {
        left: 164px;
        top: 232px;
      }
      .role-modal {
        left: 220px;
      }
    }
  }
  .game-stage-title {
    top: 1px;
    right: 10px;
  }
  .roles-modal {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 62px;
    position: absolute;
    right: 164px;
    height: 190px;
    top: 232px;
  }
</style>
