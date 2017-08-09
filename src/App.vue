<template>
    <!--整个首页背景-->
    <div>
        <router-view></router-view>
    </div>
</template>

<style>
    /*@import "assets/css/reset.css";*/
    /*html,body{*/
        /*font-size: 16px;*/
    /*}*/
</style>

<script>
    import * as auth from './utils/authService'

    export default {
        name: 'app',
        components: {
        },
        data() {
            return {
            }
        },
        created() {
//            this.$http.get('/hello');
        },
        mounted() {
        },
        methods: {
//            enter(el,done) {
//                console.log('app enter',el);
//                done()
//            },
//            leave(el,done) {
//                done()
//            }
        }
    }
</script>

