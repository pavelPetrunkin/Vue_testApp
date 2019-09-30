<template>
  <div>
    <transition name="modal">
      <div v-if="open">
        <div class="modal-mask">
          <div @click="closeCharactersInfo" class="outer-close" ></div>
          <div class="modal-wrapper">
              <CharactersInfoLeft
                :characters="characters"
                :selectorIndex="selectorIndex"
                :firstTeam="firstTeam.name"
              />
            <ModalHelp :itemsSlot="itemsSlot" :spellSlot="spellSlot"/>
            <ModalEnemyHelp
              :spellSlot="spellSlot"
              :enemies="enemies"
              :characters="characters"
              :selectorIndex="selectorIndex"
            />
            <ModalLaneInfo
              :enemies="enemies"
              :characters="characters"
              :selectorIndex="selectorIndex"
            />
            <CharactersInfoRight
              :characters="enemies"
              :selectorIndex="selectorIndex"
              :secondTeam="secondTeam.name"
            />
            <ModalSkillsInfo
              :enemies="enemies"
              :characters="characters"
              :selectorIndex="selectorIndex"
              :firstTeam="firstTeam"
            />
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script type="text/javascript">

import CharactersInfoLeft from './CharactersInfoLeft'
import CharactersInfoRight from './CharactersInfoRight'
import ModalHelp from './ModalHelp'
import ModalEnemyHelp from './ModalEnemyHelp'
import ModalLaneInfo from './ModalLaneInfo'
import ModalSkillsInfo from './ModalSpellsInfo'
import { mapActions } from 'vuex';

export default {
  name: 'CharactersInfo',
  props: [
    'open', 'characters',
    'enemies', 'firstTeam',
    'secondTeam', 'selectorIndex',
    'itemsSlot', 'spellSlot'],
  components: {
    CharactersInfoLeft,
    CharactersInfoRight,
    ModalHelp,
    ModalEnemyHelp,
    ModalLaneInfo,
    ModalSkillsInfo
  },
  methods: {
    ...mapActions(['CHARACTERS_INFO']),
    closeCharactersInfo () {
      return this.CHARACTERS_INFO(false)
    }
  }
}
</script>

<style scoped lang="scss">
  .modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: table;
  }

  .modal-wrapper {
    display: flex;
    justify-content: space-between;
  }

  .outer-close {
    width: 100%;
    height: 100%;
    position: absolute;
  }

  .modal-container {
    padding: 20px 45px 20px 25px;
    border-radius: 2px;
    -webkit-box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    -webkit-transition: all .3s ease;
    transition: all .3s ease;
    font-family: Helvetica, Arial, sans-serif;
    position: relative;
    z-index: 3;
    height: 789px;
    width: 170px;
    top: 45px;
    background: black;
  }

  .modal-header h3 {
    margin-top: 0;
    color: #42b983;
  }

  .modal-default-button {
    float: right;
  }

  .modal-enter .modal-container,
  .modal-leave-active .modal-container {
    -webkit-transform: scaleX(2);
    transform: scaleX(2);
  }


</style>
