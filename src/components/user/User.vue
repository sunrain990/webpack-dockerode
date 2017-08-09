<template>
    <div class="editable">
        <div class="el-table-top clearfix">
            <div class="el-table-top-left">
                <!--Show-->
                <!--<el-select v-model="value" placeholder="请选择" style="width: 100px">-->
                <!--<el-option-->
                <!--v-for="item in options"-->
                <!--:label="item.label"-->
                <!--:value="item.value">-->
                <!--</el-option>-->
                <!--</el-select>-->
                <i class="fa fa-plus fa-2x" title="新建记录" @click="dealWithRecord()"></i>
                <i class="fa fa-refresh fa-2x" :class="refreshHover?'':'fa-spin'" title="刷新" @click="refresh()" @mouseenter="refreshHover=!refreshHover" @mouseleave="refreshHover=!refreshHover"></i>
            </div>

            <!--<div class="el-table-top-right">-->
                <!--<div class="el-table-choose">-->
                    <!--<el-select-->
                            <!--v-model="selectedValues"-->
                            <!--multiple-->
                            <!--filterable-->
                            <!--allow-create-->
                            <!--placeholder="请选择文章标签">-->
                        <!--<el-option-->
                                <!--v-for="item in selectedOptions"-->
                                <!--:label="item.label"-->
                                <!--:value="item.value">-->
                        <!--</el-option>-->
                    <!--</el-select>-->
                <!--</div>-->

                <!--<div class="el-table-search">-->
                    <!--<div class="el-table-search-content">-->
                        <!--<el-input v-model="searchString" placeholder="Type to search ..."></el-input>-->
                    <!--</div>-->
                    <!--<button class="btn btn-primary el-table-search-btn" @click="searchTable()">Search</button>-->
                <!--</div>-->
            <!--</div>-->



            <el-radio-group v-model="sys" @change="chooseSys()">
                <el-radio :label="'hc-sales'">hc-sales</el-radio>
                <el-radio :label="'hc-crm'">hc-crm</el-radio>
            </el-radio-group>


        </div>

        <el-table
                :data="tableData"
                style="width: 100%"
                :row-key="getRowKeys"
                :expand-row-keys="expands"
                :default-sort = "{prop: 'name', order: 'descending'}"
                @expand="getOneExpand"
        >
            <el-table-column type="expand">
                <template scope="props">
                    <el-form label-position="left" inline class="demo-table-expand">
                        <!--<el-form-item label="ID">-->
                            <!--<el-input v-model="props.row.id" placeholder="请输入ID" class="uuid" :disabled="true"></el-input>-->
                        <!--</el-form-item>-->

                        <el-form-item label="登录 ID">
                            <el-input v-model="props.row.uid" placeholder="请输入登录ID" :disabled="true"></el-input>
                        </el-form-item>
                        <el-form-item label="用户名">
                            <el-input v-model="props.row.name" placeholder="请输入用户名"></el-input>
                        </el-form-item>

                        <el-form-item label="用户密码">
                            <el-input v-model="props.row.password" placeholder="请输入用户密码"></el-input>
                        </el-form-item>

                        <el-form-item label="邮箱">
                            <el-input v-model="props.row.email" placeholder="请输入email"></el-input>
                        </el-form-item>

                        <el-form-item label="性别">
                            <el-radio-group v-model="props.row.sex">
                                <el-radio :label="0">男</el-radio>
                                <el-radio :label="1">女</el-radio>
                            </el-radio-group>
                        </el-form-item>

                        <el-form-item label="店铺 ID">
                            <el-select v-model="props.row.shop_id" placeholder="请选择">
                                <el-option
                                        v-for="item in shops"
                                        :label="item.name"
                                        :value="item.id">
                                </el-option>
                            </el-select>
                        </el-form-item>

                        <el-form-item label="电话号码">
                            <el-input v-model="props.row.tel" placeholder="请输入电话号码"></el-input>
                        </el-form-item>

                        <el-form-item>
                            <div class="man">
                                <i class="fa fa-save" title="保存" @click="editConfirm(props.row)"></i>
                                <i class="fa fa-trash" title="删除" @click="removeConfirm(props.row)"></i>
                            </div>
                        </el-form-item>

                    </el-form>
                </template>
            </el-table-column>
            <el-table-column
                    label="登录 ID"
                    prop="uid" sortable>
            </el-table-column>
            <el-table-column
                    label="用户名"
                    prop="name" sortable :sort-method="pinyinSort">
            </el-table-column>
            <el-table-column
                    label="店铺"
                    prop="shop_name"
                    :formatter="formatter">
            </el-table-column>

        </el-table>



        <el-dialog :title="!isEdit?'新增记录':'修改记录'" v-model="showDialog" size="large">

            <div class="row sync-info">
                <div class="col-xs-6">
                    <div class="col-xs-3 tips">
                        登录 ID:
                    </div>
                    <div class="col-xs-9">
                        <el-input v-model="fields.uid" placeholder="请输入登录ID">
                        </el-input>
                    </div>
                </div>
                <div class="col-xs-6">
                    <div class="col-xs-3 tips">
                        用户名:
                    </div>
                    <div class="col-xs-9">
                        <el-input v-model="fields.name" placeholder="请输入用户名字"></el-input>
                    </div>
                </div>
            </div>

            <div class="row sync-info">
                <div class="col-xs-6">
                    <div class="col-xs-3 tips">
                        密码:
                    </div>
                    <div class="col-xs-9">
                        <el-input v-model="fields.password" placeholder="请输入密码">
                        </el-input>
                    </div>
                </div>
                <div class="col-xs-6">
                    <div class="col-xs-3 tips">
                        电话:
                    </div>
                    <div class="col-xs-9">

                        <el-input v-model="fields.tel" placeholder="请输入电话">
                        </el-input>

                    </div>
                </div>
            </div>

            <div class="row sync-info">
                <div class="col-xs-6">
                    <div class="col-xs-3 tips">
                        邮箱:
                    </div>
                    <div class="col-xs-9">
                        <el-input v-model="fields.email" placeholder="请输入邮箱">
                        </el-input>
                    </div>
                </div>
                <div class="col-xs-6">
                    <div class="col-xs-3 tips">
                        性别:
                    </div>
                    <div class="col-xs-9">

                        <el-radio-group v-model="fields.sex" style="height: 34px;line-height: 34px;">
                            <el-radio :label="0">男</el-radio>
                            <el-radio :label="1">女</el-radio>
                        </el-radio-group>
                    </div>
                </div>
            </div>

            <div class="row sync-info">
                <div class="col-xs-6">
                    <div class="col-xs-3 tips">
                        门店:
                    </div>
                    <div class="col-xs-9">
                        <el-select v-model="fields.shop_id" placeholder="请选择">
                            <el-option
                                    v-for="item in shops"
                                    :label="item.name"
                                    :value="item.id">
                            </el-option>
                        </el-select>
                    </div>
                </div>
            </div>




            <div class="row">
                <div class="col-xs-9"></div>
                <div class="col-xs-3" style="text-align: right;padding-right: 30px">
                    <button class="btn btn-primary"  v-show="!isEdit" @click="addConfirm(fields)">+确认</button>
                    <button class="btn btn-primary"  v-show="isEdit" @click="editConfirm(fields)">确认</button>
                </div>
            </div>
        </el-dialog>

    </div>
</template>

<style lang="less">
    .sync-info {
        margin-bottom: 20px;
    }
    .demo-table-expand {
        font-size: 0;
    }
    .demo-table-expand label {
        width: 90px;
        color: #99a9bf;
    }
    .demo-table-expand .el-form-item {
        margin-right: 0;
        margin-bottom: 0;
        width: 50%;
    }
    .el-form-item__content .uuid {
        width: 180%;
    }

    .man {
        width: 250px;
        overflow: auto;
        zoom: 1;
        clear: both;
        font-size: 30px;
    }

    .fa-save{
        float: left;
    }
    .fa-save:hover {
        color: orange;
        cursor: pointer;
    }

    .fa-trash {
        float: right;
    }
    .fa-trash:hover {
        color: orange;
        cursor: pointer;
    }
</style>

<script>
    import {API_ROOT} from '../../config'
    import _ from 'lodash'
    var pinyin = require('pinyin')
    import moment from 'moment'

    export default {
        data() {
            const that = this;

            return {
                selectedValues: [],

                expands: [],

                sys: 'hc-sales',

                paging: {
                    total: 0,
                    limit: 10,
                    offset: 0
                },

                fields: {
                    name: "",
                    password: "",
                    rank: "",
                    sex: 1,
                    shop_id: "",
                    tel: "",
                    uid: "",
                    email: ""
                },
                field: {
                    id: "005f9c2db58b4d0186235c0ee84d9a93",
                    name: "陆燕",
                    password: "123456",
                    rank: "",
                    sex: 1,
                    shop_id: "a58f764a950b46c580ad91cc34e325e9",
                    tel: "15106205583",
                    uid: "HHBK25",
                    _roles: {},
                    _shop: {
                        brands: "''",
                        id: "195e9d4e0ad440d7bded3ed27f4fd0c6",
                        name: "保险代理公司",
                        seq: -2,
                        type: 0
                    }
                },

                refreshHover: false,

                searchString: '',

//                currentPage: 1,

                tableData: [],

                shops: [],

                selectedShops: [],

                all_view_shops: [],

                showDialog: false,

                isEdit: false
            }
        },
        methods: {
            resetFields(fields) {
                if(!fields) {
                    this.fields = {
                        name: "",
                        password: "",
                        rank: "",
                        sex: 1,
                        shop_id: "",
                        tel: "",
                        uid: "",
                        email: "",
                    }
                }else {
                    this.fields = fields
                }

            },
            searchTable() {

                if(this.selectedValues.length == 0) {
                    this.searchString = ''
                }
                console.log('confirm searching', this.searchString, this.selectedValues,'haha')
                const that = this;
                var instance = this.$http.create(
                        {
                            headers: {
                                'socket-id': that.$socket.id,
                                'auth': JSON.parse(localStorage.getItem(that.sys)).authorize
                            }
                        }
                );

                var params = {};

                that.selectedValues.forEach(function(item, index){
                    params[item] = that.searchString;
                })

                params['offset'] = that.paging.offset;
                params['limit'] = that.paging.limit;

                instance.get(API_ROOT + '/user', {
                    params: params
                }).then(function(dt) {
                    if(dt.data.status.code == 0) {

                        if(dt.data.data.rows == '403001') {
                            console.log('55955959599')
                            return that.$router.push('/login');
                        }

                        console.log(dt.data.data.rows, 'tttttt5');

                        for(var i=0; i<dt.data.data.rows.length; i++) {
                            console.log(dt.data.data.rows[i]);
                        }
                        that.paging.total = dt.data.data.count;
                        if(dt.data.data.count == 0) {
                            that.$message({
                                type: 'success',
                                message: '相应记录为0条'
                            })
                        }
                    }else {
                        that.$message({
                            type: 'warning',
                            message: '查询出错,查询格式不对'
                        })
                    }
                })
            },
            chooseSys() {
                this.getData();
            },
            getData() {

                const that = this;
                that.getShops();
                if(JSON.parse(localStorage.getItem(that.sys)).status != 0) {
                    return that.$message({
                        type: 'error',
                        message: that.sys + '系统登录验证出错'
                    })
                }
                that.tableData = [];
                that.paging.total = 0;

                var instance = this.$http.create(
                        {
                            headers: {
                                'socket-id': that.$socket.id,
                                'auth': JSON.parse(localStorage.getItem(that.sys)).authorize
                            }
                        }
                );
                instance.get(API_ROOT + '/api/users' , {
                    params: {
                        url: JSON.parse(localStorage.getItem(that.sys)).url,
                        sys: that.sys,
                        offset: that.paging.offset,
                        limit: that.paging.limit
                    }
                }).then(function(dt) {
                    if(dt.data.status.code == 0) {

                        if(dt.data.data.rows.code && dt.data.data.rows.code == '403001') {
                            return that.$router.push('/login');
                        }


                        console.log(dt.data.data.rows, ' - -- -  -- - this is data rows!');
                        that.tableData = dt.data.data.rows;
                        that.expands.push(that.tableData[0].id);
                        that.paging.total = dt.data.data.count;
                    }
                    console.log(dt, 'user all dt')
                });
            },
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
                }).then(function(dt) {
                    if(dt.data.status.code == 0) {
                        that.shops = dt.data.data.rows;
                        that.all_view_shops = that.shops.map(function (i) {
                            return i.name
                        });
                        console.log('get api shop success!');
                    }
                })
            },
            refresh() {
                const that = this;
                this.$message({
                    type: 'success',
                    message: '刷新成功!'
                })
                that.getData();
            },
            dealWithRecord(scope) {
                const that = this;
                that.showDialog = true;
                if(scope) {
                    that.resetFields(scope.row)
                    that.isEdit = true;
                }else {
                    that.resetFields();
                    that.isEdit = false;
                }
            },

            editRow(fields) {
                const that = this;
                console.log(fields,' this is scope')

                var filtedShop = that.shops.filter(function(item) {
                    return item.id == fields.shop_id;
                })
                fields._shop = filtedShop[0];
                var instance = this.$http.create(
                        {
                            headers: {
                                'auth': JSON.parse(localStorage.getItem(that.sys)).authorize,
                                'socket-id': that.$socket.id
                            }
                        }
                );
                return instance.put(API_ROOT + '/api/users/' + fields.uid, {dt: fields, sys: that.sys, url: JSON.parse(localStorage.getItem(that.sys)).url});
            },

            editConfirm(fields) {
                const that = this;
                that.editRow(fields).then(function(dt) {
                    console.log(dt, 'this is dddddt')
                    if(dt.data.status.code == 0) {
                        that.$message({
                            type: 'success',
                            message: '修改成功!'
                        })
                    }else {
                        that.$message({
                            type: 'error',
                            message: '修改失败!'
                        })
                    }
                });
            },
            addRow(fields) {
                const that = this;
                var instance = this.$http.create(
                        {
                            headers: {
                                'auth': JSON.parse(localStorage.getItem(that.sys)).authorize,
                                'socket-id': that.$socket.id,
                            }
                        }
                );
                return instance.post(API_ROOT + '/api/users', {dt: fields, sys: that.sys, url: JSON.parse(localStorage.getItem(that.sys)).url });
            },


            addConfirm(fields) {
                const that = this;
                console.log('confirm add')
                for(var i in fields) {
                    console.log(i, '---- --  -- - - - -', fields[i])
                    if(!fields[i] && fields != 0) delete fields[i];
                }

                console.log('fields -  - - - - - ', fields)
                that.addRow(fields).then(function(dt) {
                    if(dt.data.status.code == 0) {
                        console.log('添加成功!')
                        that.showDialog = false;
                        that.refresh();
                        that.resetFields();
                    }else {
                        console.log('新建失败!')
                        that.$message({
                            type:'error',
                            message: dt.data.data.err
                        })
                    }
                });
            },

            removeRow(fields) {
                const that = this;
                var instance = this.$http.create(
                        {
                            headers: {
                                'auth': JSON.parse(localStorage.getItem(that.sys)).authorize,
                                'socket-id': that.$socket.id
                            }
                        }
                );
                return instance.delete(API_ROOT + '/api/users/' + fields.uid, {
                   data: {
                       url: JSON.parse(localStorage.getItem(that.sys)).url,
                       sys: that.sys
                   }
                })
            },
            removeConfirm(fields) {
                const that = this;
                that.$confirm('此操作将永久删除, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    that.removeRow(fields).then(function(dt) {
                        if(dt.data.status.code == 0) {
                            console.log('删除成功!');
                            that.$message({
                                type: 'success',
                                message: '删除成功!'
                            });
                            that.refresh();
                        }else {
                            that.$message({
                                type: 'error',
                                message: '删除失败!'
                            });
                        }
                    })
                }).catch((e) => {
                    console.log(e)
                    that.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            },

            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
                this.paging.limit = val;
                this.getData()
            },
            handleCurrentChange(val) {
                this.currentPage = val;
                console.log(`当前页: ${val}`);
                this.paging.offset = (val-1) * this.paging.limit;
                this.getData()
            },
            formatedDate(date) {
                if(date) {
                    return moment(date).format('YYYY-MM-DD HH:mm:ss')
                }
            },
            getRowKeys(row) {
                return row.id;
            },
            formatter(row, column) {
                var vm = this;
                var filterd = vm.shops.filter(function(i) {
                        return i.id == row.shop_id
                    });
                if(filterd[0]) {
                    return filterd[0]['name'];
                }else {
                    return  ''
                }
            },

            getOneExpand(row, expanded) {
                if(expanded) {
                    const that = this;
                    console.log(row, expanded, '|||||||| -- ||||||||')


                    var instance = this.$http.create(
                            {
                                headers: {
                                    'socket-id': that.$socket.id,
                                    'auth': JSON.parse(localStorage.getItem(that.sys)).authorize
                                }
                            }
                    );

                    instance.get(API_ROOT + '/api/users/' + row.uid , {
                        params: {
                            url: JSON.parse(localStorage.getItem(that.sys)).url,
                            sys: that.sys
                        }
                    }).then(function(dt) {

                        if(dt.data.status && dt.data.status.code == 0) {
                            row = dt.data.data.row
                        }
                    });
                }
            },

            pinyinSort(a, b) {
//                if(a['name']&&b['name']) {
//                    return a['name'].pinyin.localeCompare(b['name'].pinyin)
//                }else {
//                    return 1
//                }
//                return 1
                return pinyin(a['name']) > pinyin(b['name']);
            }
        },
        created() {
            this.getData();
        },
        computed:{
            selectedOptions() {
                var arr = [];
                for(var i in this.titleMaps) {
                    arr.push({
                        label: this.titleMaps[i],
                        value: i
                    })
                }
                return arr;
            },
//            tabledata_shopname() {
//                var vm = this;
//                vm.tabledata.forEach(function(item) {
//                    var filterd = vm.shops.filter(function(i) {
//                        return i.id == item.shop_id
//                    });
//                    console.log(filterd, 'this is filteredsafas')
//                    if(filterd[0]) {
//                        item.shop_name = filterd[0]['name'];
//                    }else {
//                        item.shop_name = ''
//                    }
//                })
////                console.log(vm.tabledata);
//                return vm.tabledata;
//            }
        }
    }
</script>