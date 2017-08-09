/**
 * Created by kevin on 17/7/11.
 */
import {
    USER_NAME_PROMPT,
    USER_PASS_PROMPT,
    USER_PASS_AGAIN,
    TEL_NO_PROMPT,
    EMAIL_PROMPT,
    AGREEMENT,
    REGISTER_PROMPT,
    RESET_REGISTER
} from '../mutation-types'

import api from '../../api'

import * as auth from '../../utils/authService'

const state = {
    user: {
        uid: '',
        password: '',
        password_again: '',
        tel: '',
        email: ''
    },
    ifu: {
        value: '',
        checked: false
    },
    prompt: {
        uid: '',
        password: '',
        password_again: '',
        tel: '',
        email: '',
        register: '',
        agreement: ''
    }
}

const getters = {
    user_reg: state => state.user,
    ifu_reg: state => state.ifu,
    prompt_reg: state => state.prompt
}

const actions = {
    register(store, ctx) {

        store.commit(RESET_REGISTER)
        const route = router;
        if(state.user.uid) {
            api.user_if_exist(state.user).then(function(res) {
                if(res.data.status.code == -1 && res.data.status.httpcode == 500) {
                    store.commit(USER_NAME_PROMPT, res.data.msg)
                }else if(res.data.status.code == 0 &&  res.data.status.httpcode == 200) {
                    store.commit(USER_NAME_PROMPT, res.data.msg)


                    if(state.user.password) {
                        if(state.user.password_again) {
                            if(state.user.password == state.user.password_again){
                                store.commit(USER_PASS_AGAIN, '密码校验成功!')
                            }else {
                                return store.commit(USER_PASS_AGAIN, '两次密码输入不相同')
                            }
                            if(state.user.tel) {

                                if(state.user.email) {

                                    if(!state.ifu.checked) {
                                        $('.remember-up').find('span').css('color', 'red')
                                        ctx.$message({
                                            type:'warning',
                                            message: '请先阅读,并同意本站注册协议!'
                                        })
                                    }else {
                                        api.register(state.user).then(function(res) {
                                            if(res.data.status.code == -1 && res.data.status.httpcode == 500) {
                                                return store.commit(REGISTER_PROMPT, res.data.msg)
                                            }else if(res.data.status.code == 0 &&  res.data.status.httpcode == 200) {

                                                ctx.$message({
                                                    type:'success',
                                                    message: '注册成功!'
                                                })
                                                route.push({'path': '/login'})
                                                return store.commit(REGISTER_PROMPT, res.data.msg)
                                            }
                                        })
                                    }
                                }else {
                                    store.commit(EMAIL_PROMPT, '请输入电子邮箱信息')
                                }
                            }else {
                                store.commit(TEL_NO_PROMPT, '请输入手机号码')
                            }
                        }else {
                            store.commit(USER_PASS_AGAIN, '请再次输入密码')
                        }

                    }else {
                        store.commit(USER_PASS_PROMPT, '请输入密码')
                    }

                }else if(res.data.status.code == -1 &&  res.data.status.httpcode == 409) {
                    return store.commit(USER_NAME_PROMPT, res.data.msg)
                }
            })
        }else {
            console.log('yayayayayay')
            store.commit(USER_NAME_PROMPT, '请输入用户名')
        }
    }
}

const mutations = {
    [USER_NAME_PROMPT](state, data) {
        state.prompt.uid = data
    },
    [USER_PASS_PROMPT](state, data) {
        state.prompt.password = data
    },
    [USER_PASS_AGAIN](state, data) {
        state.prompt.password_again = data
    },
    [TEL_NO_PROMPT](state, data) {
        state.prompt.tel = data
    },
    [EMAIL_PROMPT](state, data) {
        state.prompt.email = data
    },
    [AGREEMENT](state, data) {
        state.prompt.agreement = data
    },
    [REGISTER_PROMPT](state, data) {
        state.prompt.register = data;
    },
    [RESET_REGISTER](state, data) {
        for(var i in state.prompt) {
            state.prompt[i] = ''
        }
    }
}

export default  {
    state,
    getters,
    actions,
    mutations
}