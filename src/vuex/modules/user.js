/**
 * Created by kevin on 17/7/27.
 */
import {
    GET_USERS_SUCCESS,
    SET_PAGINATION_INFO,
    CHANGE_FIELD_VAL,
    TOGGLE_DIALOG,
    IS_EDIT_OR_ADD
} from '../mutation-types'

import api from '../../api'
import * as auth from '../../utils/authService'

const state = {
    users: [],
    pagination: {
        offset: 1,
        limit: 10,
        count: 0
    },
    field: {
        uid: '',
        password: '',
        name: '',
        corp: '',
        tel: ''
    },
    dialog_visible: false,
    is_edit: false
}

const getters = {
    users: state => state.users,
    pagination: state => state.pagination,
    user_field: state => state.field,
    user_dialog_visible: state => state.dialog_visible,
    user_is_edit: state => state.is_edit,
}

const actions = {
    getUsers(store, dt) {
        const route = router
        var ctx = dt.ctx;

        var pagination = {
            offset: dt.pagination&&dt.pagination.offset?dt.pagination.offset:state.pagination.offset,
            limit: dt.pagination&&dt.pagination.limit?dt.pagination.limit:state.pagination.limit,
        }

        console.log(pagination, 'ppppap')

        api.getUsers(pagination).then(function(res) {
            if(res.data.status.code == -1 && res.data.status.httpcode == 500) {
                ctx.$message({
                    type:'warning',
                    message: res.data.msg|| '获取用户信息失败!'
                })
            }else if (res.data.status.code == -1 && res.data.status.httpcode == 505) {
                ctx.$message({
                    type:'warning',
                    message: res.data.msg|| '服务器运行时异常!!'
                })
            }else if(res.data.status.code == 0) {
                store.commit(GET_USERS_SUCCESS, res.data.data.rows)
                store.commit(SET_PAGINATION_INFO, {
                    offset: pagination.offset,
                    limit: pagination.limit,
                    count: res.data.data.count
                })
                ctx.$message({
                    type:'success',
                    message: res.data.msg|| '获取用户信息成功!'
                })
            }
        })
    },
    updateUser(store, ctx) {
        const route = router
        var ctx = ctx.ctx;
        var field = ctx.field;
        api.updateUser(field).then(function(res) {
            if (res.data.status.code == 0 && res.data.status.httpcode == 200) {
                ctx.$message({
                    type:'success',
                    message: res.data.msg|| '信息更新成功!!'
                })
                store.commit('TOGGLE_DIALOG', false)
                store.dispatch('getUsers', {ctx: ctx})
            } else if(res.data.status.code == -1 && res.data.status.httpcode == 500) {
                ctx.$message({
                    type:'warning',
                    message: res.data.msg|| '服务器异常!'
                })
            }else if (res.data.status.code == -1 && res.data.status.httpcode == 400) {
                ctx.$message({
                    type:'warning',
                    message: res.data.msg|| '请求参数不正确!!'
                })
            }else if (res.data.status.code == -1 && res.data.status.httpcode == 404) {
                ctx.$message({
                    type:'warning',
                    message: res.data.msg|| '用户不存在!!'
                })
            }
        })
    },
    deleteUser(store, dt) {
        const route = router;
        var row = dt.row;
        var ctx = dt.ctx;

        console.log(row, 'this is row')

        api.deleteUser(row).then(function(res) {
            if (res.data.status.code == 0 && res.data.status.httpcode == 200) {
                ctx.$message({
                    type:'success',
                    message: res.data.msg|| '删除成功!!'
                })
                store.dispatch('getUsers', {ctx: ctx})
            }else if (res.data.status.code == -1 && res.data.status.httpcode == 500) {
                ctx.$message({
                    type:'warning',
                    message: res.data.msg|| '删除失败!!'
                })
            }
        })
    },
    addUser(store, ctx) {
        const route = router
        var ctx = ctx.ctx;
        var field = ctx.field;

        api.addUser(field).then(function(res) {
            if (res.data.status.code == 0 && res.data.status.httpcode == 200) {
                ctx.$message({
                    type:'success',
                    message: res.data.msg|| '信息更新成功!!'
                })
                store.commit('TOGGLE_DIALOG', false)
                store.dispatch('getUsers', {ctx: ctx})
            } else if(res.data.status.code == -1 && res.data.status.httpcode == 500) {
                ctx.$message({
                    type:'warning',
                    message: res.data.msg|| '服务器异常!'
                })
            }
        });
    }
}

const mutations = {
    [GET_USERS_SUCCESS](state, data) {
        state.users = data
    },
    [SET_PAGINATION_INFO](state, data) {
        state.pagination = data
    },
    [CHANGE_FIELD_VAL](state, data) {
        for(var i in state.field) {//不使用过滤
            state.field[i] = data[i]?data[i]: ''
        }
    },
    [TOGGLE_DIALOG](state, data) {
        (data|| data == false)? (state.dialog_visible = data):(state.dialog_visible = !state.dialog_visible)
    },
    [IS_EDIT_OR_ADD](state, data) {
        state.is_edit = data;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}