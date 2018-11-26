import Vue from 'vue'
import Vuex from 'vuex'

import AuthStore from './auth'
import PostStore from './post'
import MiscStore from './misc'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        AuthStore,
        PostStore,
        MiscStore
    }
})
