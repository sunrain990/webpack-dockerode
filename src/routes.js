/**
 * Created by kevin on 16/12/15.
 */
import Index from './views/Index.vue'
import Admin from './views/Admin'
import Login from './views/Login'
import Register from './views/Register'
// const User = {
//     // http://localhost:3000/#/user/1b2#abc?aa=bb
//     // template: '<div>User{{$route.params.id}} {{$route.hash}} {{$route.query}}<div> <router-link to="/user/121">user121</router-link>',
//     template: `
//     <div class="user">
//       <h2>User </h2>
//       <h1>111{{$route.params.id}}</h1>
//       <router-view></router-view>
//     </div>
//   `,
//     watch: {
//         '$route' (to, from) {
//             console.log(to, from)
//         }
//     }
// }

export default [
    {
        path: '/index',
        component: require('./views/Index.vue'),
        children: [
            {
                path: '/',
                component: require('./components/index/Header.vue')
            }
        ]
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/register',
        component: Register
    },
    {
        path: '/home',
        component: require('./views/Home.vue'),
        children: [
            {
                path: '/',
                component: require('./components/home/Orders.vue')
            }
        ]
    },
    {
        path: '/admin',
        component: require('./views/Admin.vue'),
        children: [
            {
                path: '/',
                component: require('./components/page/Index.vue')
            },
            // 第一级系统
            // 选择用户
            {
                path: '/user',
                component: require('./components/user/User.vue')
            },
            {
                path: '/user-manage',
                component: require('./components/user/UserManage.vue')
            },


            {
                path: '/docker-images',
                component: require('./components/docker/images.vue')
            }
        ]
    },
    // {
    //     path: '/docker',
    //     component: require('./views/Docker.vue'),
    //     children: [
    //         {
    //             path: '/docker-images',
    //             component: require('./components/page/Index.vue')
    //         },
    //     ]
    // }
]