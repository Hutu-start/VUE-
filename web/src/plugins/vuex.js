import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import state from '../store/state.js'
import mutations from '../store/mutations.js'
import actions from '../store/actions.js'
import getters from '../store/getters.js'

//导出 store实例
export default new Vuex.Store({
  actions,state,mutations,getters
})