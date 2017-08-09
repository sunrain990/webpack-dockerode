<template>
    <div>
        <div class="right" id="box"></div>

        <div class="login-form">
            <p class="p-login">用户登录</p>

            <div class="input-box">
                <p class="p-title">用户名/username
                    <span class="user-error">{{ prompt.user_error}}</span>
                </p>

                <!--<input name="email" v-validate data-vv-rules="required|email" class="input" :class="{'is-danger': errors.has('email')}" type="text" placeholder="E-mail" v-model="user.id" />-->

                <input name="uid" class="input-full" type="text" v-model="user.uid">

                <p class="p-title p-title-2">密码/password
                    <span class="pwd-error">{{ prompt.pwd_error }}</span>
                </p>
                <input class="input-full" type="password" v-model="user.pwd"><span>忘记密码?</span>

                <div class="remember-up">
                    <input type="checkbox" :value="ifu.value" v-model="ifu.checked" @change="toggleCheck" class="cb">
                    <span>记住用户名和密码</span>
                </div>

                <div class="sign-in">
                    <button @click="login">立即登录</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    header,
    .right{
        position: absolute;
    }
    body {
        font-family:"微软雅黑";
    }
    .right{
        top: 0;
        right: 0;
        bottom:0;
        left: 0;
        /*left: calc(15% + 20px);*/
        background: linear-gradient(135deg, #77A8BB 0%, #004668 100%);;
    }

    .login-form {
        position: absolute;
        background: rgba(150, 188, 203, 0.5);
        width: 30em;
        height: 30em;
        top: 50%;
        margin-top: -15em;
        left: 50%;
        margin-left: -15em;
    }
    .p-login {
        color: #ffffff;
        margin: 1.5em;
        font-size: 30px;
    }

    .input-box {
        width: 100%;
        margin: 3.5em;
    }

    .p-title {
        color: #ffffff;
        margin-bottom: 0.5em;
    }
    .p-title-2 {
        margin-top: 1.5em;
    }
    .input-box .input-full {
        border: none;
        border: 1px solid #80A5B4;
        height: 3rem;
        width: 20rem;
        font-size: 20px;
        text-indent: 1em;
    }
    .input-box span {
        font-size: 12px;
        font-weight: 500;
    }
    .input-box span:hover {
        cursor: pointer;
        text-decoration: underline;
    }
    .input-box p span {
        margin-left: 30px;color: red
    }
    .cb {
        margin-top: 2em;
        margin-bottom: 2em;
        background: #555;
        border: 1px solid #ffffff;
        position: relative;
    }

    .sign-in button{
        font-size: 20px;
        color: #ffffff;
        width: calc(20rem + 0px);
        border: none;
        background: #2D415E;
        border: 1px solid #537487;
        height: 3rem;
    }
    .sign-in button:hover {
        cursor: pointer;
        background: #4c405f;
    }
</style>

<script>
    import { API_ROOT, Domain} from '../config'
    import cookie from 'react-cookie'
    import _ from 'lodash'
    import {mapGetters, mapState, mapActions, mapMutations} from 'vuex'
    import { crossDomainStorage } from '../utils/localStorageTools/src/crossDomainStorage'

    export default {
        name: 'login',
        components: {

        },
        ready() {},
        created() {},
        mounted() {
            function random(m,n){
                return Math.round(Math.random()*(n-m)+m);
            }

            function $$(s){
                return document.querySelectorAll(s);
            }


            var box=$$("#box")[0];
            console.log(box, 'this is box')
            var canvas=document.createElement("canvas");
            var ctx=canvas.getContext("2d");
            box.appendChild(canvas);


            var size = 128;
            var height = 200, width = 300;
            var Dots = [];
            var line;

            function getDots() {
                Dots = [];
                for(var i=0; i<size; i++) {
                    var x = random(0,width);
                    var y = random(0, height);
                    var color="rgba("+random(0,255)+","+random(0,255)+","+random(0,255)+",0)";
                    Dots.push({
                        x:x,
                        y:y,
                        dx:random(1,20),
                        color:color,
                        cap:0
                    });
                }
            }

            function resize(){
                height=box.clientHeight;
                width=box.clientWidth;
                canvas.height=height;
                canvas.width=width;
                line=ctx.createLinearGradient(0,0,0,height);
                line.addColorStop(0,"red");
                line.addColorStop(0.5,"yellow");
                line.addColorStop(1,"green");
                getDots();
                draw(new Array(1,4,50,100,88,60,120,130));
            }
            resize();

            window.onresize=resize;

            function draw(arr) {
                ctx.clearRect(0,0,width,height);
                var w=width/size;
                var cw=w*0.6
                ctx.fillStyle=line;

                for(var i=0;i<arr.length;i++){
                    var o=Dots[i];
                    ctx.beginPath();
                    var r=10+ arr[i]/256*(height>width?width:height)/10;

                    ctx.arc(o.x,o.y,r,0,Math.PI*2,true);
                    var g=ctx.createRadialGradient(o.x,o.y,0,o.x,o.y,r);
                    g.addColorStop(0,"#fff");
                    g.addColorStop(1,o.color);
                    ctx.fillStyle=g;
                    ctx.fill();
                    o.x+=o.dx;
                    o.x=o.x>width?0:o.x;
                }
            }

            draw(new Array(1,4,50,100,88,60,120,130));
        },
        data() {
            return {
            }
        },
        sockets: {
            connect: function() {
                console.log('login socket connected!', this.$socket.id)
                console.log()

            },
            message: function() {
                this.message(dt)
            },
            notify: function(dt) {
                this.$notify(dt)
            },
            news: function(dt) {
                console.log('news', dt)
            },
            file: function(dt) {
                console.log(dt, 'this is file dt')
            }
        },
        methods: {
            ...mapActions(['toggleCheck']),
            login: function () {
                var that = this;
                console.log(that, this.$store, 'store store store!!!');
                this.$store.dispatch('login', {
                    context: that
                })
            }
        },
        computed: {
            ...mapGetters({
                prompt:'prompt',
                user:'user',
                ifu:'ifu'
            })
        }
    }
</script>