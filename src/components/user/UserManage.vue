<template>
    <div class="table">
        <!--<div class="crumbs">-->
            <!--<el-breadcrumb separator="/">-->
                <!--<el-breadcrumb-item><i class="el-icon-menu"></i> 表格</el-breadcrumb-item>-->
                <!--<el-breadcrumb-item>基础表格</el-breadcrumb-item>-->
            <!--</el-breadcrumb>-->
        <!--</div>-->

        <el-button type="info" style="margin: 10px 0" @click="handleAdd">新增</el-button>

        <el-table :data="users" border style="width: 100%">
            <el-table-column prop="created_at" label="日期" sortable width="150" :formatter="formatter" fixed>
            </el-table-column>
            <el-table-column prop="uid" label="登录账号" width="150">
            </el-table-column>
            <el-table-column prop="password" label="密码" width="150">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="150">
            </el-table-column>
            <el-table-column prop="tel" label="电话" width="180">
            </el-table-column>
            <el-table-column prop="corp" label="公司" width="180">
            </el-table-column>
            <el-table-column label="操作" width="180" fixed="right">
                <template scope="scope">
                    <el-button size="small"
                               @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button size="small" type="danger"
                               @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="pagination">
            <div class="block">
                <el-pagination
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page="pagination.offset"
                        :page-sizes="[10, 50, 100, 200]"
                        :page-size="pagination.limit"
                        layout="total, sizes, prev, pager, next, jumper"
                        :total="pagination.count">
                </el-pagination>
            </div>
        </div>

        <!-- Table -->

        <el-dialog :title="is_edit?'修改记录': '新增记录'" size="large" :visible.sync="dialog_visible" @open="open()" @close="close()">

            <el-form :model="field">
                <el-form-item label="登录账号" class="col-xs-6">
                    <el-input v-model="field.uid" auto-complete="off"></el-input>
                </el-form-item>

                <el-form-item label="登录账号" class="col-xs-6">
                    <el-input v-model="field.password" auto-complete="off"></el-input>
                </el-form-item>

                <el-form-item label="姓名" class="col-xs-6">
                    <el-input v-model="field.name" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="电话" class="col-xs-6">
                    <el-input v-model="field.tel" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="公司" class="col-xs-6">
                    <el-input v-model="field.corp" auto-complete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="closeDialog">取 消</el-button>
                <el-button type="primary" @click="confirmDialog">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<style lang="less">

</style>

<script>
    import { API_ROOT, Domain} from '../../config'
    import cookie from 'react-cookie'
    import _ from 'lodash'
    import {mapGetters, mapState, mapActions, mapMutations} from 'vuex'
    import { crossDomainStorage } from '../../utils/localStorageTools/src/crossDomainStorage'

    export default {
        data() {
            return {
            }
        },
        methods: {
            formatter(row, column) {
                return row.created_at.substring(0, 10);
            },
            filterTag(value, row) {
                return row.tag === value;
            },
            handleAdd() {
                this.$store.commit('TOGGLE_DIALOG', true)
                this.$store.commit('IS_EDIT_OR_ADD', false)
            },
            handleEdit(index, row) {
                console.log(index, row)
                this.$store.commit('CHANGE_FIELD_VAL', row)
                this.$store.commit('TOGGLE_DIALOG', true)
            },
            handleDelete(index, row) {
                console.log(index, row)
                var that = this;
                this.$confirm('确认删除数据吗？')
                        .then(_ => {
                            that.$store.dispatch('deleteUser', {
                                ctx: that,
                                row: row
                            })
                        })
                        .catch(_ => {});

            },
            getUsers() {
                console.log('am i getting users?');
                this.$store.dispatch('getUsers',{
                    ctx: this
                })
            },
            handleCurrentChange(val) {
                this.$store.dispatch('getUsers', {
                    ctx: this,
                    pagination: {
                        offset: val
                    }
                })
            },
            handleSizeChange(val) {
                    console.log(val);
                    this.$store.dispatch('getUsers', {
                        ctx: this,
                        pagination: {
                            limit: val
                        }
                    })
            },
            closeDialog() {
                console.log('cococo')
                this.$store.commit('TOGGLE_DIALOG', false)
            },
            confirmDialog() {
                console.log(this.is_edit, 'is edit????', this.field);
                if(!this.field.uid) {
                    return this.$message({
                        type:'warning',
                        message: '请填写登录账号!!'
                    })
                }
                if(this.is_edit) {
                    this.$store.dispatch('updateUser', {
                        ctx: this
                    })
                }else {
                    this.$store.dispatch('addUser', {
                        ctx: this
                    })
                }

            },
            open() {

                console.log('open')
            },
            close(){
                console.log('close')
            }
        },
        mounted() {
            this.getUsers()
        },
        computed: {
            ...mapGetters({
                users:'users',
                pagination:'pagination',
                field: 'user_field',
                dialog_visible: 'user_dialog_visible',
                is_edit: 'user_is_edit'
            })
        }
    }
</script>