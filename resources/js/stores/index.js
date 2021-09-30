import { createStore } from 'vuex'

import AuthStore from './Auth'
import MiscStore from './Misc'

export default createStore({
  modules: {
    AuthStore,
    MiscStore
  }
})