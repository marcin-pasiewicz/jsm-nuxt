import Vuex from 'vuex'
import backend from './backend'

const store = () => new Vuex.Store({
  modules: {
    backend
  }
})

export default store
