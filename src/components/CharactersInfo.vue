<template>
  <div>
    <modal v-if="open">
      <transition name="modal">
        <div class="modal-mask">
          <div @click="closeCharactersInfo" class="outer-close" ></div>
          <div class="modal-wrapper">
              <CharactersInfoLeft
                :characters="characters"
                :selectorIndex="selectorIndex"
                :firstTeam="firstTeam.name"/>
              <CharactersInfoRight
                :characters="enemies"
                :selectorIndex="selectorIndex"
                :secondTeam="secondTeam.name"/>
          </div>
        </div>
      </transition>
    </modal>
  </div>
</template>

<script type="text/javascript">

import CharactersInfoLeft from './CharactersInfoLeft'
import CharactersInfoRight from './CharactersInfoRight'

export default {
  name: 'CharactersInfo',
  props: ['open', 'characters', 'enemies', 'firstTeam', 'secondTeam', 'selectorIndex'],
  components: {
    CharactersInfoLeft,
    CharactersInfoRight
  },
  mounted () {
  },
  methods: {
    closeCharactersInfo () {
      return this.$store.dispatch('CHARACTERS_INFO', false)
    }
  }
}
</script>

<style>
  .modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .3);
    display: table;
    transition: opacity .3s ease;
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
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    -webkit-box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    -webkit-transition: all .3s ease;
    transition: all .3s ease;
    font-family: Helvetica, Arial, sans-serif;
    position: relative;
    z-index: 3;
    height: 789px;
    width: 181px;
    top: 45px;
  }

  .modal-header h3 {
    margin-top: 0;
    color: #42b983;
  }
  /*
   * The following styles are auto-applied to elements with
   * transition="modal" when their visibility is toggled
   * by Vue.js.
   *
   * You can easily play with the modal transition by editing
   * these styles.
   */

  .modal-default-button {
    float: right;
  }

  .modal-enter {
    opacity: 0;
  }

  .modal-leave-active {
    opacity: 0;
  }

  .modal-enter .modal-container,
  .modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }

</style>
