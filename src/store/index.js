import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pokemons: {}
  },
  mutations: {
    setPokemonDetails (state, payload) {
      Vue.set(state.pokemons, payload.name, payload.details)
    }
  },
  actions: {
    async fetchPokemonDetails ({ commit, state }, pokemon) {
      if (Object.prototype.hasOwnProperty.call(state.pokemons, pokemon)) return state.pokemons[pokemon]
      const details = (await axios({
        method: 'get',
        url: `https://pokeapi.co/api/v2/pokemon/${pokemon}`
      })).data
      commit('setPokemonDetails', { name: pokemon, details })
      return details
    }
  },
  modules: {
  }
})
