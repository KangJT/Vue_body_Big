import Vue from 'vue'
import Vuex from 'vuex'

import footerPage from './modules/footerPage'
import login from './modules/login'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    footerPage,
    login
  }
})
export default store
