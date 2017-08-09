<template>
    <div>
        <div class="row">
            <div class="col" v-for="td in tableData" @click="clickTo(td)">
                <div class="sys-choose" @mouseenter="mouseenter" @mouseleave="mouseleave">
                    <div class="sys">
                    </div>

                    <div class="sys-info">

                        <i class="fa fa-close" style="color: red" v-show="td.status != 0"></i>
                        <i class="fa fa-check" style="color: green" v-show="td.status == 0"></i>
                        {{ td.name }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="less">
    .col {
        margin-bottom: 30px;
    }
    @media all and (max-width: 680px) {
        .col {
            width: 100%;
            text-align: center;
            float: left;
        }
    }

    @media all and (min-width: 680px) and (max-width: 800px) {
        .col {
            width: 33.3333%;
            text-align: center;
            float: left;
        }
    }

    @media all and (min-width: 800px)and (max-width: 1000px) {
        .col {
            width: 25%;
            text-align: center;
            float: left;
        }
    }

    @media all and (min-width: 1000px) {
        .col {
            width: 20%;
            text-align: center;
            float: left;
        }
    }



    @keyframes sys-ani {
        0% {
            transform: scale(1.1) rotate(0deg);
            -ms-transform: scale(1.1) rotate(0deg); /* IE 9 */
            -moz-transform: scale(1.1) rotate(0deg); /* Firefox */
            -webkit-transform: scale(1.1) rotate(0deg); /* Safari 和 Chrome */
            -o-transform: scale(1.1) rotate(0deg);
        }

        100% {
            transform: scale(1) rotate(360deg);
            -ms-transform: scale(1) rotate(360deg); /* IE 9 */
            -moz-transform: scale(1) rotate(360deg); /* Firefox */
            -webkit-transform: scale(1) rotate(360deg); /* Safari 和 Chrome */
            -o-transform: scale(1) rotate(360deg);
        }
    }

    @keyframes sys-word-ani {
        0% {
            transform: scale(1) rotate(0deg);
            -ms-transform: scale(1) rotate(0deg); /* IE 9 */
            -moz-transform: scale(1) rotate(0deg); /* Firefox */
            -webkit-transform: scale(1) rotate(0deg); /* Safari 和 Chrome */
            -o-transform: scale(1) rotate(0deg);
        }

        100% {
            transform: scale(1) rotate(0deg);
            -ms-transform: scale(1) rotate(0deg); /* IE 9 */
            -moz-transform: scale(1) rotate(0deg); /* Firefox */
            -webkit-transform: scale(1) rotate(0deg); /* Safari 和 Chrome */
            -o-transform: scale(1) rotate(0deg);
        }
    }

    .unclockwise {
        -webkit-animation: sys-word-ani 3s infinite linear;
        -moz-animation: sys-word-ani 3s infinite linear;
        -o-animation: sys-word-ani 3s infinite linear;
        animation: sys-word-ani 3s infinite linear;
        cursor: pointer;
        /*-webkit-box-shadow: 0 0 20px #0CC;*/
        /*-moz-box-shadow: 0 0 20px #0CC;*/
        /*box-shadow: 0 0 20px #0CC;*/
    }

    .clockwise {
        -webkit-animation: sys-ani 3s infinite linear;
        -moz-animation: sys-ani 3s infinite linear;
        -o-animation: sys-ani 3s infinite linear;
        animation: sys-ani 3s infinite linear;
        cursor: pointer;
        /*-webkit-box-shadow: 0 0 20px #0CC;*/
        /*-moz-box-shadow: 0 0 20px #0CC;*/
        /*box-shadow: 0 0 20px #0CC;*/
    }

    .content {
    }

    .sys-choose {
        position: relative;
        width: 160px;
        height: 160px;
        display: inline-block;
    }

    .sys {
        position: relative;
        height: 160px;
        width: 160px;
        border: none;
        border-radius: 10px;
        background: #0B9EFF;

        zoom: 1;
        filter: alpha(opacity=50);
        -moz-opacity: 0.5;
        opacity: 0.5;

        -webkit-box-shadow: inset 0 0 20px #0CC;
        -moz-box-shadow: inset 0 0 20px #0CC;
        box-shadow: inset 0 0 20px #0CC;

    }

    .sys-info {
        height: 160px;
        line-height: 160px;
        width: 160px;
        color: #314058;
        font-size: 24px;
        position: absolute;
        text-align: center;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        word-break: break-all;
    }
</style>

<script>
    import {API_ROOT} from '../../config'
    import Vue from 'vue'
    import _ from 'lodash'
    import moment from 'moment'
    import {crossDomainStorage} from '../../utils/localStorageTools/src/crossDomainStorage'

    export default {
        data() {
            return {
//                name: 'linxin'
                tableData: []
            }
        },
        computed: {
//            username(){
//                let username = localStorage.getItem('ms_username');
//                return username ? username : this.name;
//            }
        },
        methods: {
            login(uid,pwd, sys) {
                const that = this;
                var instance = this.$http.create(
                        {
                            headers: {
                                'jwt-access-token': '131452c',
                                'socket-id': that.$socket.id
                            }
                        }
                );
                instance.post(API_ROOT + '/manage/login',
                        {
                            uid: uid,
                            pwd: pwd,
                            sys: sys
                        }).then(function(dt) {
                    if(dt.data.status.code == 0 && dt.data.data) {
                        var sys = dt.data.data;
                        var logined = false;
                        var serviceError = true;
                        that.$root.sys = sys;
                        for(var i =0; i< sys.length; i++) {
                            console.log(sys[i].name, JSON.stringify(sys[i]),'登录成功!');

                            if(sys[i].status == 0) {
                                logined = true;
                                serviceError = false;
                                if(sys[i].name == 'hc-sales') {
                                    var cdstorage = crossDomainStorage({
                                        origin: "http://localhost:5584",
                                        path: "/localstorage/crossd_iframe.html"
                                    });
                                    cdstorage.setItem('pond-jwt-token', sys[i]['authorize'])
                                }
                                localStorage.setItem(sys[i].name, JSON.stringify(sys[i]));

                                that.tableData = [];
                                var syss = ['hc-sales', 'hc-crm'];
                                for(var k=0; k<syss.length; k++) {
                                    that.tableData.push(JSON.parse(localStorage.getItem(syss[k])));
                                }
                                console.log(sys[i]['url'], 'sys uuuuurl')
                                window.open(sys[i]['url']);
                            }else if(sys[i].status == 1) {
                                serviceError = false
                                return that.$message({
                                    type: 'error',
                                    message: '密码出错,请重新登录!'
                                })
                            }
                        }
                        if(logined) {
                            that.$notify({
                                type: 'success',
                                message: '登录成功!'
                            })
                            that.$router.push('/choosesys');
                        } else{
                            if(serviceError) {
                                that.$message({
                                    type: 'error',
                                    message: '服务器连接出错'
                                })
                            }else {
                                that.$message({
                                    type: 'error',
                                    message: '登录失败,用户名或密码错误'
                                })
                            }
                        }
                    }else {
                        that.$message({
                            type: 'error',
                            message: '登录失败!'
                        })
                    }
                })
            },
            clickTo(td) {
                const that = this;
                if(td.name == 'hc-sales') {
                    if(td.status == 0) {
                        window.open(td.url);
                    }else if(td.status == 1) {
                        this.$message({
                            type: 'error',
                            message: '密码不统一,验证失败'
                        });

                        this.$prompt('请输入密码', '提示', {
                            confirmButtonText: '确定',
                            cancelButtonText: '取消'
                        }).then(({ value }) => {
                            this.login(td.uid, value, td.name)
                        }).catch(() => {
                            this.$message({
                                type: 'info',
                                message: '取消输入'
                            });
                        });



                    }else if(td.status == 2) {
                        this.$message({
                            type: 'success',
                            message: '系统下线,请联系管理员!'
                        })
                    }
                }else if(td.name == 'hc-crm') {
                    if(td.status == 0) {
                        var reg = /^http:\/\//;
                        var url = JSON.parse(localStorage.getItem(td.name)).url;
                        var toUrl = 'http://' + td.uid + ':' + td.pwd + '@' + url.replace(reg, '') + '/?refresh=1';
                        console.log(toUrl)
                        window.open(toUrl);
                    } else if(td.status == 1) {
                        this.$message({
                            type: 'error',
                            message: '密码不统一,验证失败'
                        })

                        this.$prompt('请输入密码', '提示', {
                            confirmButtonText: '确定',
                            cancelButtonText: '取消'
                        }).then(({ value }) => {
                            this.login(td.uid, value, td.name)
                        }).catch(() => {
                            this.$message({
                                type: 'info',
                                message: '取消输入'
                            });
                        });
                    } else if(td.status == 2) {
                        this.$message({
                            type: 'success',
                            message: '系统下线,请联系管理员!'
                        })
                    }
                }
            },
            getData() {
                const that = this;
                var instance = this.$http.create(
                        {
                            headers: {
                                'jwt-access-token': '131452c',
                                'socket-id': that.$socket.id
                            }
                        }
                );
                instance.get(API_ROOT + '/sys' , {
                    params: {
//                        offset: that.paging.offset,
//                        limit: that.paging.limit
                    }
                }).then(function(dt) {
                    if(dt.data.status.code == 0) {
                        that.tableData = dt.data.data.rows;
                        that.$message({
                            type: 'success',
                            message: '获取系统信息成功,请选择系统'
                        })
                    }
                });
            },

            mouseenter(e) {
                $(e.target).find('.sys').addClass('clockwise');
                $(e.target).find('.sys-info').addClass('unclockwise');
            },
            mouseleave(e) {
                $(e.target).find('.sys').removeClass('clockwise');
                $(e.target).find('.sys-info').removeClass('unclockwise');
            }
        },
        created() {
//            this.getData();
            var sys = ['hc-sales', 'hc-crm'];
            for(var i=0; i<sys.length; i++) {
                this.tableData.push(JSON.parse(localStorage.getItem(sys[i])));
            }
        }
    }
</script>