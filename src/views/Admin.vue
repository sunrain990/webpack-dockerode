<template>
    <div class="wrapper">
        <v-head></v-head>
        <v-sidebar></v-sidebar>
        <div class="content">
            <transition name="move" mode="out-in">
                <router-view></router-view>
            </transition>
        </div>
    </div>
</template>

<style scoped>
    @import "../assets/css/main.css";
    @import "../assets/css/color-dark.css";
</style>

<script>
    import vHead from '../components/common/Header.vue'
    import vSidebar from '../components/common/Sidebar_admin.vue'
    export default {
        name: 'app',
        components: {
            vHead, vSidebar
        },
        vuex: {
            getters: {

            },
            actions: {
            }
        },
        ready() {
            console.log('hoho');
        },
        methods: {
        }
    }
</script>