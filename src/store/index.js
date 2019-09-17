import Vue from 'vue'
import Vuex from 'vuex'
import characterReducer from './modules/characterReducer'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    characterReducer
  }
})
