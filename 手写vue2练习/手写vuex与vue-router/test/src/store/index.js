const store = {
  state: {
    counter: 0
  },
  mutations: {
    SET_COUNTER(state) {
      state.counter++
    },
    SUB_COUNTER(state) {
      state.counter--
    }
  },
  actions: {
    SET_TIME_COUNTER({ commit }) {
      setTimeout(() => {
        commit('SUB_COUNTER')
      }, 1000)
    }
  },
  getters: {
    doubleCounter(state) {
      return state.counter * 2
    },
    tripleCounter(state) {
      return state.counter * 3
    }
  }
}

export default store
