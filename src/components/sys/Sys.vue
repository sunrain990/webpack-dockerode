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

            <div class="el-table-top-right">
                <div class="el-table-choose">
                    <el-select
                            v-model="selectedValues"
                            multiple
                            filterable
                            allow-create
                            placeholder="请选择文章标签">
                        <el-option
                                v-for="item in selectedOptions"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </div>

                <div class="el-table-search">
                    <div class="el-table-search-content">
                        <el-input v-model="searchString" placeholder="Type to search ..."></el-input>
                    </div>
                    <button class="btn btn-primary el-table-search-btn" @click="searchTable()">Search</button>
                </div>
            </div>

        </div>


        <el-table :data="tableData" border style="width: 100%">

            <el-table-column v-for="(v,k,index) in titleMaps" prop="k" :label="v" min-width="100" max-width="300" :width="index==0?210:'inherit'" :fixed="index==0">
                <template scope="scope">
                    {{ k == 'created_at'?formatedDate(scope.row[k]):scope.row[k] }}
                </template>
            </el-table-column>

            <el-table-column label="操作" fixed="right">
                <template scope="scope">
                    <el-tooltip class="item" effect="dark" content="Remove" placement="bottom">
                        <i class="fa fa-close" @click="removeConfirm(scope)" style="color:red;float: left;cursor: pointer;"></i>
                    </el-tooltip>

                    <el-tooltip class="item" style="text-align: right" effect="dark" content="Edit" placement="bottom">
                        <i class="fa fa-edit" @click="dealWithRecord(scope)" style="color:orange;float:right;cursor: pointer;"></i>
                    </el-tooltip>
                    <!--<i class="fa fa-spinner fa-pulse fa-fw"></i>-->
                    <!--<span class="sr-only">Loading...</span>-->
                </template>
            </el-table-column>
        </el-table>


        <div class="block" style="float: right;margin-top: 10px">
            <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage"
                    :page-sizes="[10, 50, 100, 200]"
                    :page-size="paging.limit"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="paging.total">
            </el-pagination>
        </div>


        <el-dialog :title="!isEdit?'新增记录':'修改记录'" v-model="syncAccount" size="large">

            <div class="row sync-info">
                <div class="col-xs-6">
                    <div class="col-xs-3 tips">
                        系统URL:
                    </div>
                    <div class="col-xs-9">
                        <el-input v-model="fields.url" placeholder="请输入URL">
                            <template slot="prepend">Http://</template>
                        </el-input>
                    </div>
                </div>
                <div class="col-xs-6">
                    <div class="col-xs-3 tips">
                        系统名字:
                    </div>
                    <div class="col-xs-9">
                        <el-input v-model="fields.name" placeholder="请输入系统名字"></el-input>
                    </div>
                </div>
            </div>

            <div class="row sync-info">
                <div class="col-xs-6">
                    <div class="col-xs-3 tips">
                        系统图像:
                    </div>
                    <div class="col-xs-9">
                        <el-input v-model="fields.thum" placeholder="请输入系统图像地址">
                            <template slot="prepend">Http://</template>
                        </el-input>
                    </div>
                </div>
                <div class="col-xs-6">
                    <div class="col-xs-3 tips">
                        系统状态:
                    </div>
                    <div class="col-xs-9">

                        <el-radio-group v-model="fields.status" style="height: 34px;line-height: 34px;">
                            <el-radio :label="0">关</el-radio>
                            <el-radio :label="1">开</el-radio>
                        </el-radio-group>

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
    </div>
</template>

<style lang="less">
    .red-color {
        color: red;
    }
    .warning-color {
        color: orange;
    }
    .clearfix {
        overflow: auto;
        zoom: 1;
    }
    .el-table-top {
        border: 1px solid #D3E0E9;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        background: #fff;
        padding: 12px;
    }
    .el-table-top-left {
        margin-top: 5px;
        padding-left: 20px;
        color: #333333;
        font-weight: 600;
        display: inline-block;
        i {
            &:hover {
                color: orange;
                cursor: pointer;
             }
        }
    }

    .el-table-top-right {
        display: inline-block;
        float: right;
    }

    .el-table-choose {
        display: inline-block;
    }

    .el-table-search {
        float: right;
        display: inline-block;
        width: 280px;
    }

    .el-table-search-content {
        float: left;
        display: inline-block;
        width: 140px;
    }
    .el-table-search-btn {
        float: left;
        margin-left: 2px;
        height: 36px;
    }
    .el-table__body-wrapper {
        max-height: 600px;
        overflow-y: scroll;
    }
</style>

<script>
    import {API_ROOT} from '../../config'
    import _ from 'lodash'
    import moment from 'moment'

    export default {
        data() {
            return {
//                selectedOptions: [],
                selectedValues: [],

                titleMaps: {
                    created_at: '创建时间',
                    name: '名字',
                    thum: '系统图片',
                    url: '系统URL',
                    status: '系统状态'
                },


                fields: {
                    created_at: '',
                    name: '',
                    thum: '',
                    edit: true,
                    url: '',
                    status: 0
                },

                paging: {
                    total: 0,
                    limit: 10,
                    offset: 0
                },

                tableData: [],

//                options: [{
//                    value: '选项1',
//                    label: '1'
//                }, {
//                    value: '选项2',
//                    label: '5'
//                }, {
//                    value: '选项3',
//                    label: '10'
//                }, {
//                    value: '选项4',
//                    label: '15'
//                }, {
//                    value: '选项5',
//                    label: '20'
//                }],
//                value: '15',

                refreshHover: false,

                searchString: '',

                currentPage: 1,

                syncAccount: false,

                isEdit: false
            }
        },
        methods: {
            resetFields(fields) {
                if(!fields) {
                    this.fields = {
                        created_at: '',
                        name: '',
                        thum: '',
                        edit: true,
                        url: '',
                        status: 0
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
                            'jwt-access-token': '131452c',
                            'socket-id': that.$socket.id
                        }
                    }
                );

                var params = {};

                that.selectedValues.forEach(function(item, index){
                    params[item] = that.searchString;
                 })

                params['offset'] = that.paging.offset;
                params['limit'] = that.paging.limit;

                instance.get(API_ROOT + '/sys', {
                    params: params
                }).then(function(dt) {
                    if(dt.data.status.code == 0) {
                        that.tableData = dt.data.data.rows;
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
                        offset: that.paging.offset,
                        limit: that.paging.limit
                    }
                }).then(function(dt) {
                    if(dt.data.status.code == 0) {
                        that.tableData = dt.data.data.rows;
                        that.paging.total = dt.data.data.count;
                    }
                    console.log(dt, 'sys all dt')
                });
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
                that.syncAccount = true;
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
                var instance = this.$http.create(
                        {
                            headers: {
                                'jwt-access-token': '131452c',
                                'socket-id': that.$socket.id
                            }
                        }
                );
                return instance.put(API_ROOT + '/sys/' + fields.id, {dt: fields});
            },

            editConfirm(fields) {
                const that = this;
                that.editRow(fields).then(function(dt) {
                    if(dt.data.status.code == 0 && dt.data.data[0]) {
                        console.log(dt.data.data);
                        that.$message({
                            type: 'success',
                            message: '修改成功!'
                        })
                        that.syncAccount = false;
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
                                'jwt-access-token': '131452c',
                                'socket-id': that.$socket.id
                            }
                        }
                );
                return instance.post(API_ROOT + '/sys', {dt: fields});
            },


            addConfirm(fields) {
                const that = this;
                console.log('confirm add')
                that.addRow(fields).then(function(dt) {
                    if(dt.data.status.code == 0) {
                        console.log('添加成功!')
                        that.syncAccount = false;
                        that.refresh();
                        that.resetFields();
                    }else {
                        console.log('新建失败!')
                        that.$message({
                            type:'error',
                            message: '新建失败!系统URL和名字不能重复'
                        })
                    }
                });
            },

            removeRow(scope) {
                console.log('this row is removed!',scope.row);
                const that = this;
                var instance = this.$http.create(
                        {
                            headers: {
                                'jwt-access-token': '131452c',
                                'socket-id': that.$socket.id
                            }
                        }
                );
                return instance.delete(API_ROOT + '/sys/' + scope.row.id)
            },
            removeConfirm(scope) {
                console.log(scope, 'this is scope!')
                const that = this;
                that.$confirm('此操作将永久删除, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    that.removeRow(scope).then(function(dt) {
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
                }).catch(() => {
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
            }
        }
    }
</script>