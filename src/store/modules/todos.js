import axios from 'axios'

let state = {
  todos: [],
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
  TODOS: state => {
    return state.todos
  },
  STATE: state => {
    return state
  }
}

let mutations = {
  SET_TODO: (state, payload) => {
    state.todos = payload
  },

  CHANGE_PAGE: (state, payload) => {
    state.pagination.pageNumber = payload
  },

  CHECK_TODO: (state, payload) => {
    state.todos = payload.slice()
  },

  ADD_TODO: (state, payload) => {
    state.todos = payload.todos.slice()
    state.idList = payload.idList.slice()
  }
}

let actions = {
  GET_TODO: async (context, payload) => {
    let {data} = await axios.get('http://yourwebsite.com/api/todo')
    context.commit('SET_TODO', data)
  },

  SAVE_TODO: async (context, payload) => {
    // let {data} = await axios.post('http://yourwebsite.com/api/todo');
    context.commit('ADD_TODO', payload)
  },
  CHANGE_CHECK: (context, payload) => {
    context.commit('CHECK_TODO', payload)
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
