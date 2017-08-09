/**
 * Created by kevin on 17/7/14.
 */
import {
    CHANGE_LOGO_NAME
} from '../mutation-types'

import api from '../../api'

import * as auth from '../../utils/authService'

const state = {
    logo_name: 'docker管理界面',
    user_info: auth.getJSON('user_info')
}

const getters = {
    logo_name: state => state.logo_name,
    user_info: state => state.user_info
}

const actions = {

}

const mutations = {
    [CHANGE_LOGO_NAME](state, data) {
        state.logo_name = data
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}