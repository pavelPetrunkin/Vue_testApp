import axios from 'axios'

let state = {
  characters: [],
  enemies: [],
  pairs: [],
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
