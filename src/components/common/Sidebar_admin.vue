<template>
    <div class="sidebar">
        <el-menu :default-active="onRoutes" class="el-menu-vertical-demo" theme="dark" unique-opened router>
            <!--<el-menu-item index="/choosesys">-->
                <!--<i class="el-icon-menu"></i>选择系统-->
            <!--</el-menu-item>-->
            <!--<el-submenu index="2">-->
                <!--<template slot="title"><i class="el-icon-setting"></i>系统配置</template>-->
                <!--<el-menu-item index="/sys">系统</el-menu-item>-->
            <!--</el-submenu>-->
            <el-submenu index="3">
                <template slot="title">
                    <i class="fa fa-user" style="font-size: 18px;margin-right: 8px"></i>
                    用户管理
                </template>
                <!--<el-menu-item index="/user">增加用户</el-menu-item>-->
                <el-menu-item index="/user-manage">用户</el-menu-item>
            </el-submenu>

            <el-submenu index="4">
                <template slot="title">
                    <i class="el-icon-setting" style="font-size: 18px; margin-right: 8px"></i>
                    docker管理页面
                </template>
                <el-menu-item index="/docker-images">创建镜像</el-menu-item>
            </el-submenu>

            <!--<el-submenu index="4">-->
                <!--<template slot="title"><i class="el-icon-star-on"></i>图表</template>-->
                <!--<el-menu-item index="basecharts">基础图表</el-menu-item>-->
                <!--<el-menu-item index="mixcharts">混合图表</el-menu-item>-->
            <!--</el-submenu>-->
        </el-menu>
    </div>
</template>

<script>
    export default {
        computed:{
            onRoutes(){
                return this.$route.path.replace('/','');
            }
        }
    }
</script>

<style scoped>
    .sidebar{
        display: block;
        position: absolute;
        width: 250px;
        left: 0;
        top: 70px;
        bottom:0;
        background: #2E363F;
    }
    .sidebar > ul {
        height:100%;
    }
</style>
