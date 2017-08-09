/**
 * Created by kevin on 17/6/29.
 */
import {
    LOGIN_SUCCESS,
    USERINFO_SUCCESS,
    USERINFO_FAILURE,
    LOGOUT_USER,
    UPDATE_USER_SUCCESS
} from '../mutation-types'

import { getCookie } from '../../utils/authService'

const state = {
    token: getCookie('token') || null,
    user_info: null
}

const mutations = {
    [LOGIN_SUCCESS](state, action) {
        state.token = action.token
    },
    [USERINFO_SUCCESS](state, action) {
        state.user_info = action.user_info
    }
}

export default {
    state,
    mutations
}