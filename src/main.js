import Vue from 'vue'
import VueRouter from 'vue-router'
import { sync } from 'vuex-router-sync'
import store from './vuex/store'
// import VueResource from 'vue-resource'
import Axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css'
import routes from './routes'
import VueSocketio from 'vue-socket.io'
import Location from './utils/vueLocation'
// import CrossDomainStorage from './utils/crossDomainStorage'
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import 'font-awesome/css/font-awesome.min.css'
import 'animate.css/animate.min.css'
import * as auth from './utils/authService'

import App from './App'
import $ from 'jquery'
import classie from './assets/js/classie'
//    import '../assets/js/selectFx'
// import axiosPlugin from './api/axiosPlugin'
// import Velocity from 'velocity-animate/velocity.min.js'

import './assets/js/bootstrap.min'
import './assets/js/bootstrap-datepicker.min'
import {API_ROOT} from './config'

Vue.use(Element)
Vue.use(Location)
// Vue.use(CrossDomainStorage)
Vue.use(VueRouter)

Vue.use(VueSocketio, 'ws://' + API_ROOT.substring(7))

Vue.prototype.$http = Axios

// Vue.use(VueResource)
// Vue.use(axiosPlugin)


// global.Velocity = Velocity

var router = new VueRouter({
  // mode: 'history',
  routes: routes
});

// router.beforeEach((to, from, next) => {}).afterEach(route => {})

// router.afterEach($route => {
//   if(['login','register'].indexOf($route.name) > -1) {
//     Velocity($('#banner').find('img'), { width:'430px', fontSize: '1.4em', rotateY: "360deg"}, { duration: 1000 })
//   }else {
//     Velocity($('#banner').find('img'), { width:'100%', fontSize: '1.4em', rotateY: "0deg" }, { duration: 1000 })
//   }
// })


router.beforeEach(function (to, from, next) {
  console.log(to, from, next, 'tofromnext')
  if (!auth.isLogin() && to.path != '/login' && to.path != '/index'&& to.path != '/register') {
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
})

// this.$http.post(url,data).then((response) => {
//
//   if(result.code==100){
//     sessionStorage.setItem('accessToken', result.data.access_token);
//     sessionStorage.setItem('userName', result.data.username);
//     this.$notify({title: '成功',message: '登陆成功',type: 'success'});
//     this.$router.push('home')
//   }
// }


// router.beforeEach(({to, from, next}) => {
//   let toPath = to.path
//   let fromPath = from.path
//   console.log(`to: ${toPath} from: ${fromPath}`)
//   if (toPath.replace(/[^/]/g, '').length > 1) {
//     router.app.isIndex = false
//   }
//   else {
//     let depath = toPath === '/' || toPath === '/invite' || toPath === '/rank'
//     router.app.isIndex = depath ? 0 : 1
//   }
//   next()
// })
//
// router.afterEach(function ({to}) {
//   console.log(`成功浏览到: ${to.path}`)
//   $.refreshScroller()
// })


// router.beforeEach((to, from, next) => {
//   console.log('i am in globaly');
//   console.log(to, from);
//   next()
//   // if(this.$route.path == '/register' || this.$route .path == '/login') {
//   //   Velocity($(this.$el).find('img'), { height: '160px',width:'430px', fontSize: '1.4em' }, { duration: 3000 })
//   // }
//   // next()
// })

// router.beforeEach((to, from, next) => {
//   console.log(to, '==>', from)
//   if(to.matched.some(record => record.meta.requiresAuth)) {
//     if(!true) {
//       next({
//         path: '/login',
//         query: {
//           redirect: to.fullPath
//         }
//       })
//     }else {
//       next()
//     }
//   }
// })

// router.afterEach(route => {
//   console.log(route, 'after each!')
// })

/* eslint-disable no-new */
// 这灵活得亮瞎了
/*new Vue({
  el: '#app',
  template: '<App/>',
  router,
  components: { App }
});

 new Vue(Vue.util.extend({
   router
 }, App)).$mount('#app');

new Vue({
  el:'#app',
  router,
  render:h => h(App)
});*/

sync(store, router)
window.router = router
jQuery = window.jQuery = window.$ = $
window.classie = classie

var app = new Vue({
  el: '#app',
  router,
  store,
  ...App,
});
