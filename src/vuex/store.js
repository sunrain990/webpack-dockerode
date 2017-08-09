import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from './vuexp/plugins/logger'

import login from './modules/login'
import register from './modules/register'
import auth from './modules/auth'
import home from './modules/home'
import user from './modules/user'

Vue.use(Vuex);
Vue.config.debug = true;

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    modules: {
        login,
        register,
        auth,
        home,
        user
    },
    strict: false,
    plugins: debug ? [createLogger()] : []
})

