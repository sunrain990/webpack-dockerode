/**
 * Created by kevin on 17/3/22.
 */
import Vue from 'vue'
import Axios from 'axios'
import {API_ROOT} from '../config'
import { getCookie,signOut } from '../utils/authService'

Vue.prototype.$http = Axios

// Vue.http.options.crossOrign =true
// Vue.http.options.credentials = true

// Vue.http.interceptors.push((request, next)=>{
//     // 这里对请求体进行处理
//     request.headers = request.headers || {}
//     if (getCookie('token')) {
//         request.headers.Authorization = 'Bearer ' + getCookie('token').replace(/(^\")|(\"$)/g, '')
//     }
//     next((response) => {
//         // 这里可以对响应的结果进行处理
//         if (response.status === 401) {
//             signOut()
//             window.location.pathname = '/login'
//         }
//     })
// })
//
// export default {
//
// }
//
// export const UserService = function(data) {
//     var instance = axios.create({
//         baseURL: 'https://api.example.com'
//     });
//
//     console.log('in axios', data)
//     Vue.$http.get('/users');
// }