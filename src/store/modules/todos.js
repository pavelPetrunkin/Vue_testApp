import axios from 'axios'

let state = {
  todos: []
}

let getters = {
  TODOS: state => {
    return state.todos
  }
}

let mutations = {
  SET_TODO: (state, payload) => {
    state.todos = payload
  },

  ADD_TODO: (state, payload) => {
    state.todos = payload[0].slice()
    state.todos = payload[1].slice()
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
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
