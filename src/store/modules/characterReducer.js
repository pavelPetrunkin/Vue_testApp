import axios from 'axios'

let state = {
  characters: [
    {
      nick:'Cyber Shnitzel',
      ability1: '/static/skills/arcanecomet.svg',
      ability2: '/static/skills/domination.svg',
      ability3: '/static/skills/flash.svg',
      ability4: '/static/skills/teleport.svg',
      name: 'Nami',
      rankedWin: 72,
      rankedLose: 129,
      champWin: 50,
      champLose: 4,
      role: 'knight',
      avatar: '/static/charactersImage/nami.svg'
    },
    {
      nick:'Cortanitoh',
      ability1: '/static/skills/arcanecomet.svg',
      ability2: '/static/skills/domination.svg',
      ability3: '/static/skills/flash.svg',
      ability4: '/static/skills/teleport.svg',
      name: 'Miss Fortune',
      rankedWin: 72,
      rankedLose: 129,
      champWin: 50,
      champLose: 4,
      role: 'knight',
      avatar: '/static/charactersImage/missfortune.svg'
    },
    {
      nick:'Krozenio',
      ability1: '/static/skills/arcanecomet.svg',
      ability2: '/static/skills/domination.svg',
      ability3: '/static/skills/flash.svg',
      ability4: '/static/skills/teleport.svg',
      name: 'Lux',
      rankedWin: 72,
      rankedLose: 129,
      champWin: 50,
      champLose: 4,
      role: 'tank',
      avatar: '/static/charactersImage/lux.svg'
    },
    {
      nick:'Hakkai',
      ability1: '/static/skills/arcanecomet.svg',
      ability2: '/static/skills/domination.svg',
      ability3: '/static/skills/flash.svg',
      ability4: '/static/skills/teleport.svg',
      name: 'Lee Sin',
      rankedWin: 72,
      rankedLose: 129,
      champWin: 50,
      champLose: 4,
      role: 'mage',
      avatar: '/static/charactersImage/leesin.svg'
    },
    {
      nick:'kingatlas10',
      ability1: '/static/skills/arcanecomet.svg',
      ability2: '/static/skills/domination.svg',
      ability3: '/static/skills/flash.svg',
      ability4: '/static/skills/teleport.svg',
      name: 'Khazix',
      rankedWin: 72,
      rankedLose: 129,
      champWin: 50,
      champLose: 4,
      role: 'beast',
      avatar: '/static/charactersImage/khazix.svg'
    },
  ],
  enemies: [
    {
      nick:'King Hauke',
      ability1: '/static/skills/arcanecomet.svg',
      ability2: '/static/skills/domination.svg',
      ability3: '/static/skills/flash.svg',
      ability4: '/static/skills/teleport.svg',
      name: 'Jax',
      rankedWin: 72,
      rankedLose: 129,
      champWin: 50,
      champLose: 4,
      role:'knight',
      avatar: '/static/charactersImage/jax.svg'
    },
    {
      nick:'Hdops',
      ability1: '/static/skills/arcanecomet.svg',
      ability2: '/static/skills/domination.svg',
      ability3: '/static/skills/flash.svg',
      ability4: '/static/skills/teleport.svg',
      name: 'Heimerdinger',
      rankedWin: 72,
      rankedLose: 129,
      champWin: 50,
      champLose: 4,
      role:'knight',
      avatar: '/static/charactersImage/heimerdinger.svg'
    },
    {
      nick:'its me rulez',
      ability1: '/static/skills/arcanecomet.svg',
      ability2: '/static/skills/domination.svg',
      ability3: '/static/skills/flash.svg',
      ability4: '/static/skills/teleport.svg',
      name: 'Draven',
      rankedWin: 72,
      rankedLose: 129,
      champWin: 50,
      champLose: 4,
      role: 'tank',
      avatar: '/static/charactersImage/draven.svg'
    },
    {
      nick:'Diosa eterna',
      ability1: '/static/skills/arcanecomet.svg',
      ability2: '/static/skills/domination.svg',
      ability3: '/static/skills/flash.svg',
      ability4: '/static/skills/teleport.svg',
      name: 'Caitlyn',
      rankedWin: 72,
      rankedLose: 129,
      champWin: 50,
      champLose: 4,
      role: 'mage',
      avatar: '/static/charactersImage/caitlyn.svg'
    },
    {
      nick:'hanstoppable',
      ability1: '/static/skills/arcanecomet.svg',
      ability2: '/static/skills/domination.svg',
      ability3: '/static/skills/flash.svg',
      ability4: '/static/skills/teleport.svg',
      name: 'Bard',
      rankedWin: 72,
      rankedLose: 129,
      champWin: 50,
      champLose: 4,
      role: 'beast',
      avatar: '/static/charactersImage/bard.svg'
    }
  ],
  idList: [],
  pagination: {
    pageNumber: 1,
    pageItems: 3
  },
  inputText: '',
  filter: 'showAll',
  editing: ''
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
  SET_CHARACTER: (state, payload) => {
    state.characters = payload
  },

  CHANGE_PAGE: (state, payload) => {
    state.pagination.pageNumber = payload
  },

  CHECK_CHARACTER: (state, payload) => {
    state.characters = payload.slice()
  },

  ADD_CHARACTER: (state, payload) => {
    state.characters = payload.characters.slice()
    state.idList = payload.idList.slice()
  }
}

let actions = {
  GET_CHARACTER: async (context, payload) => {
    let {data} = await axios.get('http://yourwebsite.com/api/todo')
    context.commit('SET_CHARACTER', data)
  },

  SAVE_CHARACTER: async (context, payload) => {
    // let {data} = await axios.post('http://yourwebsite.com/api/todo');
    context.commit('ADD_CHARACTER', payload)
  },
  CHANGE_CHECK: (context, payload) => {
    context.commit('CHECK_CHARACTER', payload)
  },
  GET_PAGE: (context, payload) => {
    context.commit('CHANGE_PAGE', payload)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
