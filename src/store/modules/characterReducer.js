let state = {
  characters: [
    {
      nick: 'Cyber Shnitzel',
      ability1: '/static/skills/arcanecomet.svg',
      ability2: '/static/skills/domination.svg',
      ability3: '/static/skills/flash.svg',
      ability4: '/static/skills/teleport.svg',
      name: 'Nami',
      rankedWin: 72,
      rankedLose: 129,
      champWin: 50,
      champLose: 4,
      lane: 'top',
      spells: ['/static/spells/spellSlot.svg', '/static/spells/spellSlot.svg', '/static/spells/spellSlot.svg', '/static/spells/spellSlot.svg'],
      laneStageExp: {early: '/static/laneStageExp/late.svg', late: '/static/laneStageExp/early.svg', mid: '/static/laneStageExp/mid.svg'},
      role: '/static/roles/top.svg',
      avatar: '/static/charactersImage/nami.svg'
    },
    {
      nick: 'Cortanitoh',
      ability1: '/static/skills/arcanecomet.svg',
      ability2: '/static/skills/domination.svg',
      ability3: '/static/skills/flash.svg',
      ability4: '/static/skills/teleport.svg',
      name: 'Miss Fortune',
      rankedWin: 72,
      rankedLose: 129,
      champWin: 50,
      champLose: 4,
      lane: 'bottom',
      spells: ['/static/spells/spellSlot.svg', '/static/spells/spellSlot.svg', '/static/spells/spellSlot.svg', '/static/spells/spellSlot.svg'],
      laneStageExp: {early: '/static/laneStageExp/late.svg', late: '/static/laneStageExp/early.svg', mid: '/static/laneStageExp/mid.svg'},
      role: '/static/roles/bottom.svg',
      avatar: '/static/charactersImage/missfortune.svg'
    },
    {
      nick: 'Krozenio',
      ability1: '/static/skills/arcanecomet.svg',
      ability2: '/static/skills/domination.svg',
      ability3: '/static/skills/flash.svg',
      ability4: '/static/skills/teleport.svg',
      name: 'Lux',
      rankedWin: 72,
      rankedLose: 129,
      champWin: 50,
      champLose: 4,
      lane: 'jungle',
      spells: ['/static/spells/spellSlot.svg', '/static/spells/spellSlot.svg', '/static/spells/spellSlot.svg', '/static/spells/spellSlot.svg'],
      laneStageExp: {early: '/static/laneStageExp/late.svg', late: '/static/laneStageExp/early.svg', mid: '/static/laneStageExp/mid.svg'},
      role: '/static/roles/jungle.svg',
      avatar: '/static/charactersImage/lux.svg'
    },
    {
      nick: 'Hakkai',
      ability1: '/static/skills/arcanecomet.svg',
      ability2: '/static/skills/domination.svg',
      ability3: '/static/skills/flash.svg',
      ability4: '/static/skills/teleport.svg',
      name: 'Lee Sin',
      rankedWin: 72,
      rankedLose: 129,
      champWin: 50,
      champLose: 4,
      lane: 'mid',
      spells: ['/static/spells/spellSlot.svg', '/static/spells/spellSlot.svg', '/static/spells/spellSlot.svg', '/static/spells/spellSlot.svg'],
      laneStageExp: {early: '/static/laneStageExp/late.svg', late: '/static/laneStageExp/early.svg', mid: '/static/laneStageExp/mid.svg'},
      role: '/static/roles/mid.svg',
      avatar: '/static/charactersImage/leesin.svg'
    },
    {
      nick: 'kingatlas10',
      ability1: '/static/skills/arcanecomet.svg',
      ability2: '/static/skills/domination.svg',
      ability3: '/static/skills/flash.svg',
      ability4: '/static/skills/teleport.svg',
      name: 'Khazix',
      rankedWin: 72,
      rankedLose: 129,
      champWin: 50,
      champLose: 4,
      lane: 'support',
      spells: ['/static/spells/spellSlot.svg', '/static/spells/spellSlot.svg', '/static/spells/spellSlot.svg', '/static/spells/spellSlot.svg'],
      laneStageExp: {early: '/static/laneStageExp/late.svg', late: '/static/laneStageExp/early.svg', mid: '/static/laneStageExp/mid.svg'},
      role: '/static/roles/support.svg',
      avatar: '/static/charactersImage/khazix.svg'
    }
  ],
  enemies: [
    {
      nick: 'King Hauke',
      ability1: '/static/skills/flash.svg',
      ability2: '/static/skills/teleport.svg',
      ability3: '/static/skills/arcanecomet.svg',
      ability4: '/static/skills/domination.svg',
      name: 'Jax',
      rankedWin: 72,
      rankedLose: 129,
      champWin: 50,
      champLose: 4,
      lane: 'top',
      spells: ['/static/spells/spellSlot.svg', '/static/spells/spellSlot.svg', '/static/spells/spellSlot.svg', '/static/spells/spellSlot.svg'],
      laneStageExp: {early: '/static/laneStageExp/late2.svg', late: '/static/laneStageExp/early.svg', mid: '/static/laneStageExp/mid.svg'},
      role: '/static/roles/top.svg',
      avatar: '/static/charactersImage/jax.svg'
    },
    {
      nick: 'Hdops',
      ability1: '/static/skills/flash.svg',
      ability2: '/static/skills/teleport.svg',
      ability3: '/static/skills/arcanecomet.svg',
      ability4: '/static/skills/domination.svg',
      name: 'Heimerdinger',
      rankedWin: 72,
      rankedLose: 129,
      champWin: 50,
      champLose: 4,
      lane: 'bottom',
      spells: ['/static/spells/spellSlot.svg', '/static/spells/spellSlot.svg', '/static/spells/spellSlot.svg', '/static/spells/spellSlot.svg'],
      laneStageExp: {early: '/static/laneStageExp/late.svg', late: '/static/laneStageExp/early.svg', mid: '/static/laneStageExp/mid.svg'},
      role: '/static/roles/bottom.svg',
      avatar: '/static/charactersImage/heimerdinger.svg'
    },
    {
      nick: 'its me rulez',
      ability1: '/static/skills/flash.svg',
      ability2: '/static/skills/teleport.svg',
      ability3: '/static/skills/arcanecomet.svg',
      ability4: '/static/skills/domination.svg',
      name: 'Draven',
      rankedWin: 72,
      rankedLose: 129,
      champWin: 50,
      champLose: 4,
      lane: 'jungle',
      laneStageExp: {early: '/static/laneStageExp/late.svg', late: '/static/laneStageExp/early.svg', mid: '/static/laneStageExp/mid.svg'},
      role: '/static/roles/jungle.svg',
      avatar: '/static/charactersImage/draven.svg'
    },
    {
      nick: 'Diosa eterna',
      ability1: '/static/skills/flash.svg',
      ability2: '/static/skills/teleport.svg',
      ability3: '/static/skills/arcanecomet.svg',
      ability4: '/static/skills/domination.svg',
      name: 'Caitlyn',
      rankedWin: 72,
      rankedLose: 129,
      champWin: 50,
      champLose: 4,
      lane: 'mid',
      laneStageExp: {early: '/static/laneStageExp/late.svg', late: '/static/laneStageExp/early.svg', mid: '/static/laneStageExp/mid.svg'},
      role: '/static/roles/mid.svg',
      avatar: '/static/charactersImage/caitlyn.svg'
    },
    {
      nick: 'hanstoppable',
      ability1: '/static/skills/flash.svg',
      ability2: '/static/skills/teleport.svg',
      ability3: '/static/skills/arcanecomet.svg',
      ability4: '/static/skills/domination.svg',
      name: 'Bard',
      rankedWin: 72,
      rankedLose: 129,
      champWin: 50,
      champLose: 4,
      lane: 'support',
      laneStageExp: {early: '/static/laneStageExp/late.svg', late: '/static/laneStageExp/early.svg', mid: '/static/laneStageExp/mid.svg'},
      role: '/static/roles/support.svg',
      avatar: '/static/charactersImage/bard.svg'
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
  spellSlot: '/static/spells/spell.svg',
  itemsSlot: '/static/items/items.svg',
  spells: [1, 2, 3, 4],
  lvlSpellsQ: [1, 0, 0, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  lvlSpellsE: [1, 0, 0, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  lvlSpellsR: [1, 0, 0, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  lvlSpellsW: [1, 0, 0, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]

}

let getters = {
  CHARACTERS: state => {
    return state.characters
  },
  STATE: state => {
    return state
  }
}

let mutations = {
  OPEN_CHARACTERS_INFO: (state, payload) => {
    state.isOpenCharactersInfo = payload.open
    state.selectorIndex = payload.index
  },
  CLOSE_CHARACTERS_INFO: (state, payload) => {
    state.isOpenCharactersInfo = payload
    state.selectorIndex = ''
  }
}

let actions = {
  CHARACTERS_INFO: async (context, payload) => {
    payload.open ? context.commit('OPEN_CHARACTERS_INFO', payload)
      : context.commit('CLOSE_CHARACTERS_INFO', false)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
