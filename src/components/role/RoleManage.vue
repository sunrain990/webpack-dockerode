<template>
    <div>
        123
    </div>
</template>

<style>

</style>

<script>
    import {API_ROOT} from '../../config'

    export default {
        data() {
            return {
                sys: 'hc-crm',
                shops: [],
                all_view_shops: []
            }
        },
        methods: {
            getShops() {
                const that = this;
                var instance = this.$http.create({
                    headers: {
                        'auth': JSON.parse(localStorage.getItem(that.sys)).authorize,
                        'socket-id': that.$socket.id
                    }
                });
                instance.get(API_ROOT + '/api/shops', {
                    params: {
                        url: JSON.parse(localStorage.getItem(that.sys)).url,
                        sys: that.sys
                    }
                }).then(function (dt) {
                    if (dt.data.status.code == 0) {
                        that.shops = dt.data.data.rows;
                        try {
                            that.all_view_shops = that.shops.map(function (i) {
                                return i.name
                            });
                        }catch (e) {
                            that.$router.push('/login');
                        }
                        console.log('get api shop success!');
                    }
                })
            },

            getUsers() {
                const that = this;
                that.getShops();
                if (JSON.parse(localStorage.getItem(that.sys)).status != 0) {
                    return that.$message({
                        type: 'error',
                        message: that.sys + '系统登录验证出错'
                    })
                }

                var instance = this.$http.create(
                        {
                            headers: {
                                'socket-id': that.$socket.id,
                                'auth': JSON.parse(localStorage.getItem(that.sys)).authorize
                            }
                        }
                );
                instance.get(API_ROOT + '/api/users', {
                    params: {
                        url: JSON.parse(localStorage.getItem(that.sys)).url,
                        sys: that.sys
                    }
                }).then(function (dt) {
                    if (dt.data.status.code == 0) {

                        if (dt.data.data.rows.code && dt.data.data.rows.code == '403001') {
                            return that.$router.push('/login');
                        }

                        console.log(dt.data.data.rows, ' - -- -  -- - this is data rows!');
                        that.tableData = dt.data.data.rows;
                    }
                });
            }
        },
        created() {
            this.getUsers();
        },
        computed: {

        }
    }
</script>