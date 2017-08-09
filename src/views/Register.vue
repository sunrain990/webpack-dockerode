<template>
    <div>
        <div class="right" id="box"></div>

        <div class="login-form">
            <p class="p-login">用户注册
                <span>{{ prompt.register }}</span>
            </p>

            <div class="input-box">
                <p class="p-title">
                    用户名/username
                    <span class="">{{ prompt.uid }}</span>
                </p>
                <input class="input-full" type="text" v-model="user.uid">

                <p class="p-title p-title-2">
                    密码/password
                    <span class="pwd-error">{{ prompt.password }}</span>
                </p>
                <input class="input-full" type="password" v-model="user.password">

                <p class="p-title p-title-2">
                    再次输入密码/password
                    <span class="pwd-error">{{ prompt.password_again }}</span>
                </p>
                <input class="input-full" type="password" v-model="user.password_again">


                <p class="p-title p-title-2">
                    手机号码/telephone
                    <span class="pwd-error">{{ prompt.tel }}</span>
                </p>
                <input class="input-full" type="text" v-model="user.tel">

                <p class="p-title p-title-2">
                    电子邮箱/email
                    <span class="pwd-error">{{ prompt.email }}</span>
                </p>
                <input class="input-full" type="text" v-model="user.email">

                <div class="remember-up">
                    <input type="checkbox" :value="ifu.value" v-model="ifu.checked" class="cb">
                    <span>
                        同意本网站注册协议

                    </span>
                    <span class="">{{ prompt.agreement }}</span>
                </div>

                <div class="sign-in">
                    <button @click="register">立即登录</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    header,
    .left,
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
        width: 40em;
        height: 50em;
        top: 50%;
        margin-top: -25em;
        left: 50%;
        margin-left: -20em;
    }
    .p-login {
        color: #ffffff;
        margin: 1.5em;
        font-size: 30px;
    }

    .p-login span {
        color: red;
    }

    .input-box {
        width: 100%;
        margin: 3.5em;
    }

    .input-box p span {
        margin-left: 30px;color: red
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
        width: 30rem;
        font-size: 20px;
        text-indent: 1em;
    }
    .input-box span {
        font-size: 12px;
        font-weight: 500;
    }
    .cb {
        margin-top: 2em;
        margin-bottom: 2em;
        background: #555;
        border: 1px solid #ffffff;
        position: relative;
    }
    .remember-up {
        /*margin-top: 0.5em;*/
        /*margin-bottom: 0.5em;*/
    }

    .remember-up span:hover {
        cursor: pointer;
        text-decoration: underline;
    }

    .sign-in button{
        font-size: 20px;
        color: #ffffff;
        width: calc(30rem + 5px);
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
    import { mapGetters, mapState, mapActions, mapMutations } from 'vuex'

    export default {
        mounted() {
            function random(m,n){
                return Math.round(Math.random()*(n-m)+m);
            }

            function $$(s){
                return document.querySelectorAll(s);
            }

            var lis=$('#list li');

            var box=$$("#box")[0];
            var canvas=document.createElement("canvas");
            var ctx=canvas.getContext("2d");
            box.appendChild(canvas);


            var size = 128;
            var nums = 10;
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
        methods: {
//                ...mapActions([
//                    'register'
//                ]),
            register() {
                this.$store.dispatch('register',this)
            }
        },
        computed: {
            ...mapGetters({
                user:'user_reg',
                ifu: 'ifu_reg',
                prompt: 'prompt_reg'
            })
        }
    }

</script>