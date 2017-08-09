<template>
    <div class="header">
        <div class="logo">{{logo_name}}</div>
        <div class="user-info">
            <el-dropdown trigger="click" @command="handleCommand">
                <span class="el-dropdown-link">
                    <img class="user-logo" src="../../assets/img/img.jpg">
                    {{username.uid}}
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="usercenter">用户中心</el-dropdown-item>
                    <el-dropdown-item command="logout">登出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>
<script>
    import { mapGetters } from 'vuex'
    import * as auth from '../../utils/authService'

    export default {
        data() {
            return {
                name: 'lalala'
            }
        },
        computed:{
            username(){
                let username = auth.getJSON('user_info');
                return username ? username : this.name;
            },
            ...mapGetters({
                logo_name: 'logo_name',
                user_info: 'user_info'
            })
        },
        methods:{
            handleCommand(command) {
                if(command == 'logout'){
                    auth.signOut();
                    this.$router.push('/login');
                }
                if(command == 'usercenter'){
                    const h = this.$createElement;
                    this.$notify({
                        title: '个人中心公告',
                        message: h('i', { style: 'color: teal'}, '个人中心暂未上线!')
                    });
                }
            }
        }
    }
</script>
<style scoped>
    .header {
        position: relative;
        box-sizing: border-box;
        width: 100%;
        height: 70px;
        font-size: 22px;
        line-height: 70px;
        color: #fff;
    }
    .header .logo{
        float: left;
        width:250px;
        text-align: center;
    }
    .user-info {
        float: right;
        padding-right: 50px;
        font-size: 16px;
        color: #fff;
    }
    .user-info .el-dropdown-link{
        position: relative;
        display: inline-block;
        padding-left: 50px;
        color: #fff;
        cursor: pointer;
        vertical-align: middle;
    }
    .user-info .user-logo{
        /*position: absolute;*/
        left:0;
        top:15px;
        width:40px;
        height:40px;
        border-radius: 50%;
    }
    .el-dropdown-menu__item{
        text-align: center;
    }
</style>
