import axios from 'axios'

let state = {
  characters: [
    {
      nick:'Cyber Shnitzel',
      ability1: 'noimg',
      ability2: 'noimg',
      ability3: 'noimg',
      ability4: 'noimg',
      name: 'Nami',
      rankedWin: 72,
      rankedLose: 129,
      champWin: 50,
      champLose: 4,
      avatar: '/static/charactersImage/nami.svg'
    },
    {
      nick:'Cortanitoh',
      ability1: 'noimg',
      ability2: 'noimg',
      ability3: 'noimg',
      ability4: 'noimg',
      name: 'Miss Fortune',
      rankedWin: 72,
      rankedLose: 129,
      champWin: 50,
      champLose: 4,
      avatar: '/static/charactersImage/missfortune.svg'
    }
  ],
  enemies: [
    {
      nick:'King Hauke',
      ability1: 'noimg',
      ability2: 'noimg',
      ability3: 'noimg',
      ability4: 'noimg',
      name: 'Jax',
      rankedWin: 72,
      rankedLose: 129,
      champWin: 50,
      champLose: 4,
      avatar: '/static/charactersImage/jax.svg'
    },
    {
      nick:'Hdops',
      ability1: 'noimg',
      ability2: 'noimg',
      ability3: 'noimg',
      ability4: 'noimg',
      name: 'Heimerdinger',
      rankedWin: 72,
      rankedLose: 129,
      champWin: 50,
      champLose: 4,
      avatar: '/static/charactersImage/heimerdinger.svg'
    },
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
