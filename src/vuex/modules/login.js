/**
 * Created by kevin on 17/6/29.
 */
import {
    USERINFO_SUCCESS,
    LOGIN_SUCCESS,
    USER_NOT_EXIST,
    USER_NOT_FOUND,
    PWD_NOT_MATCH,
    RESET_LOGIN,
    TOGGLE_CHECK
} from '../mutation-types'

import api from '../../api'

import * as auth from '../../utils/authService'

const state = {
    user: {
        uid: auth.get('login_check')? auth.getJSON('user').uid: null,
        pwd: auth.get('login_check')? auth.getJSON('user').pwd: null
    },
    prompt: {
        user_error: '',
        pwd_error: ''
    },
    ifu: {
        value: '',
        checked: auth.get('login_check')?true: false
    }
}

const getters = {
    prompt: state => state.prompt,
    user: state => state.user,
    ifu: state => state.ifu
}

const actions = {
    login(store, dt) {
        var context = dt.context;
        if(!state.user.uid) {
            return store.commit(USER_NOT_EXIST, '请输入用户账号')
        }
        const route = router

        api.login(state.user, context.$socket.id).then(function(res) {
            if(res.data.status.code == -1 && res.data.status.httpcode == 400) {
                var prompt = res.data.msg;
                store.commit(RESET_LOGIN)
                store.commit(PWD_NOT_MATCH, prompt)
            }else if (res.data.status.code == -1 && res.data.status.httpcode == 422) {
                var prompt = res.data.msg;
                store.commit(RESET_LOGIN)
                store.commit(USER_NOT_FOUND, prompt)
            }else if(res.data.status.code == 0) {
                store.commit(LOGIN_SUCCESS, {token: 'token'})
                store.commit(USERINFO_SUCCESS, { user_info: res.data.data }, {root: true})

                auth.set('token', 'token')
                auth.setJSON('user_info', res.data.data)
                if(state.ifu.checked) {
                    auth.set('login_check', 'true')
                    auth.setJSON('user', state.user)
                }else {
                    auth.remove('login_check')
                    auth.remove('user')
                }
                route.push({'path': '/admin'})
            }
        })
    },
    toggleCheck(store, event) {
        store.commit(TOGGLE_CHECK)
    }
}

const mutations = {
    [RESET_LOGIN](state, data) {
        state.prompt.user_error = ''
        state.prompt.pwd_error = ''
    },
    [USER_NOT_EXIST](state, data) {
        state.prompt.user_error = data
    },
    [USER_NOT_FOUND](state, data) {
        state.prompt.user_error = data
    },
    [PWD_NOT_MATCH](state, data) {
        state.prompt.pwd_error = data
    },
    [TOGGLE_CHECK](state, data) {
        console.log('in toogole',state.ifu.checked, !state.ifu.checked)
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}