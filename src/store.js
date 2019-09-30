// eslint-disable-next-line
import Vue from 'vue';
import Vuex from 'vuex';
import arcanecomet from './assets/skills/arcanecomet.svg'
import flash from './assets/skills/flash.svg'
import teleport from './assets/skills/teleport.svg'
import domination from './assets/skills/domination.svg'
import spellSlot from './assets/spells/spellSlot.svg'
import spell from './assets/spells/spell.svg'
import itemsSlot from './assets/items/items.svg'
import nami from './assets/charactersImage/nami.svg'
import missfortune from './assets/charactersImage/missfortune.svg'
import lux from './assets/charactersImage/lux.svg'
import leesin from './assets/charactersImage/leesin.svg'
import khazix from './assets/charactersImage/khazix.svg'
import jax from './assets/charactersImage/jax.svg'
import heimerdinger from './assets/charactersImage/heimerdinger.svg'
import draven from './assets/charactersImage/draven.svg'
import caitlyn from './assets/charactersImage/caitlyn.svg'
import bard from './assets/charactersImage/bard.svg'

import early from './assets/laneStageExp/late.svg'
import late from './assets/laneStageExp/early.svg'
import mid from './assets/laneStageExp/mid.svg'
import bottom from './assets/roles/bottom.svg'
import top from './assets/roles/top.svg'
import middle from './assets/roles/mid.svg'
import jungle from './assets/roles/jungle.svg'
import support from './assets/roles/support.svg'

Vue.use(Vuex);
const spells = [spellSlot, spellSlot, spellSlot, spellSlot];
const abilities = {
  ability1: arcanecomet,
  ability2: domination,
  ability3: flash,
  ability4: teleport,
}
const defaultCharacterSettings = {
  rankedWin: 72,
  rankedLose: 129,
  champWin: 50,
  champLose: 4,
}
const laneStageExp = { early, late, mid }
const state = {
  characters: [
    {
      nick: 'Cyber Shnitzel',
      ...abilities,
      name: 'Nami',
      ...defaultCharacterSettings,
      lane: 'top',
      spells,
      laneStageExp,
      role: top,
      avatar: nami
    },
    {
      nick: 'Cortanitoh',
      ...abilities,
      name: 'Miss Fortune',
      ...defaultCharacterSettings,
      lane: 'bottom',
      spells,
      laneStageExp,
      role: bottom,
      avatar: missfortune
    },
    {
      nick: 'Krozenio',
      ...abilities,
      name: 'Lux',
      ...defaultCharacterSettings,
      lane: 'jungle',
      spells,
      laneStageExp,
      role: jungle,
      avatar: lux
    },
    {
      nick: 'Hakkai',
      ...abilities,
      name: 'Lee Sin',
      ...defaultCharacterSettings,
      lane: 'mid',
      spells,
      laneStageExp,
      role: middle,
      avatar: leesin
    },
    {
      nick: 'kingatlas10',
      ...abilities,
      name: 'Khazix',
      ...defaultCharacterSettings,
      lane: 'support',
      spells,
      laneStageExp,
      role: support,
      avatar: khazix
    }
  ],
  enemies: [
    {
      nick: 'King Hauke',
      ...abilities,
      name: 'Jax',
      ...defaultCharacterSettings,
      lane: 'top',
      spells,
      laneStageExp,
      role: top,
      avatar: jax
    },
    {
      nick: 'Hdops',
      ...abilities,
      name: 'Heimerdinger',
      ...defaultCharacterSettings,
      lane: 'bottom',
      spells,
      laneStageExp,
      role: bottom,
      avatar: heimerdinger
    },
    {
      nick: 'its me rulez',
      ...abilities,
      name: 'Draven',
      ...defaultCharacterSettings,
      lane: 'jungle',
      laneStageExp,
      role: jungle,
      avatar: draven
    },
    {
      nick: 'Diosa eterna',
      ...abilities,
      name: 'Caitlyn',
      ...defaultCharacterSettings,
      lane: 'mid',
      laneStageExp,
      role: middle,
      avatar: caitlyn
    },
    {
      nick: 'hanstoppable',
      ...abilities,
      name: 'Bard',
      ...defaultCharacterSettings,
      lane: 'support',
      laneStageExp,
      role: support,
      avatar: bard
    }
  ],
  firstTeam: {
    name: 'LOREM IPSUM'
  },
  secondTeam: {
    name: 'DOLOR SIT AMET'
  },
  isOpenCharactersInfo: false,
  selectorIndex: '',
  spellSlot: spell,
  itemsSlot,
  spells: [1, 2, 3, 4],
  lvlSpellsQ: [1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0],
  lvlSpellsE: [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
  lvlSpellsR: [0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0],
  lvlSpellsW: [0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0]

}

const getters = {
  characters: state => {
    return state.characters
  },
  enemies: state => {
    return state.enemies
  },
  firstTeam: state => {
    return state.firstTeam
  },
  secondTeam: state => {
    return state.secondTeam
  },
  isOpenCharactersInfo: state => {
    return state.isOpenCharactersInfo
  },
  selectorIndex: state => {
    return state.selectorIndex
  },
  spellSlot: state => {
    return state.spellSlot
  },
  itemsSlot: state => {
    return state.itemsSlot
  },
  spells: state => {
    return state.spells
  },
  lvlSpellsQ: state => {
    return state.lvlSpellsQ
  },
  lvlSpellsE: state => {
    return state.lvlSpellsE
  },
  lvlSpellsW: state => {
    return state.lvlSpellsW
  },
  lvlSpellsR: state => {
    return state.lvlSpellsR
  },
}

const mutations = {
  OPEN_CHARACTERS_INFO: (state, payload) => {
    state.isOpenCharactersInfo = payload.open
    state.selectorIndex = payload.index
  },
  CHANGE_TEAM: (state, payload) => {
    state.firstTeam.name = payload
  },
  CLOSE_CHARACTERS_INFO: (state, payload) => {
    state.isOpenCharactersInfo = payload
    state.selectorIndex = ''
  }
}

const actions = {
  CHARACTERS_INFO: async (context, payload) => {
    payload.open ? context.commit('OPEN_CHARACTERS_INFO', payload)
      : context.commit('CLOSE_CHARACTERS_INFO', false)
  }
}

export const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
});
