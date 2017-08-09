/**
 * Created by kevin on 17/3/22.
 */
import {API_ROOT} from '../config'
import axios from 'axios'

export default {
    login: function (user, socketId) {
        return axios.post(API_ROOT + '/manage/login',
            {
                uid: user.uid,
                pwd: user.pwd
            }, {
                headers: {
                    'jwt-access-token': '131452c',
                    'socket-id': socketId
                }
            }
        )
        // return axios.get(API_ROOT + '/user', {
        //     params: {
        //         uid: user.uid,
        //         pwd: user.pwd
        //     }
        // })
    },
    user_if_exist: function(user) {
        return axios.post(API_ROOT + '/manage/user_if_exist',
            {
                uid: user.uid
            })
    },
    register: function(user) {
        return axios.post(API_ROOT + '/manage/register',
            {
                user: user
            }
        )
    },
    getUsers: function(dt) {
        return axios.get(API_ROOT + '/users', {
            params: dt
        })
    },
    updateUser: function(field) {
        return axios.put(API_ROOT + '/users/' + field.uid, {
            field: field
        })
    },
    deleteUser: function(row) {
        return axios.delete(API_ROOT + '/users/' + row.uid, {
            data: {}
        })
    },
    addUser: function(field) {
        return axios.post(API_ROOT + '/users', {
            field: field
        })
    }
}