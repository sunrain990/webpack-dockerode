/**
 * Created by kevin on 17/3/22.
 */
import cookie from 'react-cookie'
import { CookieDomain } from '../config.js'
let cookieConfig = {}
if(CookieDomain !== ''){
    cookieConfig = { domain: CookieDomain }
}

export function saveCookie(name,value) {
    cookie.save(name, value, cookieConfig)
}

export function getCookie(name) {
    return cookie.load(name)
}

// export function removeCookie(name) {
//     cookie.remove(name, cookieConfig)
// }
//
// export function signOut() {
//     cookie.remove('token', cookieConfig)
// }
//
// export function isLogin() {
//     return !!cookie.load('token')
// }


// localstorage
export function set(name, value) {
    localStorage.setItem(name, value)
}

export function setJSON(name, value) {
    localStorage.setItem(name, JSON.stringify(value))
}

export function setToken(value) {
    localStorage.setItem('token', JSON.stringify(value))
}

export function get(name) {
    return localStorage.getItem(name)
}

export function getJSON(name) {
    return JSON.parse(localStorage.getItem(name))
}

export function getToken() {
    return JSON.parse(localStorage.getItem('token'))
}

export function remove(name) {
    localStorage.removeItem(name)
}

export function isLogin() {
    return !!localStorage.getItem('token')
}

export function signOut() {
    localStorage.removeItem('token')
    localStorage.removeItem('user_info')
}