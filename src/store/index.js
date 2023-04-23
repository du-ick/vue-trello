import Vue from 'vue'
import Vuex from 'vuex'
import * as api from '../api'
import state from './state';
import getters from './getters';
import mutations from './mutations';

Vue.use(Vuex)

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions: {
    LOGIN ({commit}, {email, password}) {
      return api.auth.login(email, password)
        .then(({accessToken}) => commit('LOGIN', accessToken))
    },
    ADD_BOARD (_, {title}) {
      return api.board.create(title)
    },
    FETCH_BOARDS ({commit}) {
      return api.board.fetch().then(data => {
        commit('SET_BOARDS', data.list)
      })
    }
  }  
})

const { token } = localStorage
store.commit('LOGIN', token)

export default store