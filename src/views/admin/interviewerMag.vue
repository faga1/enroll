<template>
    <div class="container">
        <div class="header">
            <div><el-button type="primary">添加面试官</el-button></div>
            <div>
                <span>筛选</span>
                <ProjectSelector class="project" init="2021秋招(当前)"></ProjectSelector>
            </div>
            <div>
                <PostSelector init="产品"></PostSelector>
            </div>
            <div>
                <el-select v-model="status">
                    <el-option 
                        v-for="item in statusList" 
                        :value="item.value" 
                        :label='item.value' 
                        :key="item.value"></el-option>
                </el-select>
            </div>
            <div>
                <el-input placeholder="输入搜索内容"></el-input>
            </div>
        </div>
        <div class="content">
            <el-table :data="interviewerList" border>
                <el-table-column type="index" />
                <el-table-column prop="name" label="姓名" />
                <el-table-column prop="wx" label="微信号" />
                <el-table-column prop="count" label="收到简历数" />
                <el-table-column label='操作'>
                    <template #default="scope">
                        <a @click="edit(scope.$index)">编辑</a>
                        <a @click="delInterviewer(scope.$index)">删除</a>
                    </template>
                </el-table-column>
                <el-table-column label="接收简历">
                    <template #default="scope">
                        <el-switch v-model="interviewerList[scope.$index].state"></el-switch>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <div class="footer">
            <el-pagination layout="prev, pager, next" :total="50"></el-pagination>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue'
import ProjectSelector from '../../components/projectSelector.vue'
import PostSelector from '../../components/postSelector.vue';

const status = ref('全部')
const statusList = reactive([
    { value: '全部' },
    { value: '正常接收简历' },
    { value: '停止接收简历' }
])
const interviewerList = reactive([
    { name: '张可豪', wx: 'zkh123', count: 12, state: 0 },
    { name: '杜康', wx: 'dk123', count: 12, state: 0 }
])
function edit(index: number){
    console.log(index);
}
function delInterviewer(index:number){
    console.log(index);
}
</script>
<style lang="less" scoped>
a{
    color:dodgerblue;
    margin-right: 10px;
    cursor: pointer;
}
.container{
    width: 80%;
    margin:100px auto;
    background-color: rgb(242,242,242);
    padding:30px 0 0;
    .header{
        width: 95%;
        margin:0 auto;
        padding-bottom:20px;
        display: flex;
        justify-content:space-between;
        .el-select,.el-input{
            width: 100px;
        }
    }
    .content{
        width: 95%;
        margin:0 auto; 
        padding:30px;
        border-bottom:1px solid #000000;
        border-top:1px solid #000000;
    }
    .footer{
        display: flex;
        flex-direction: row-reverse;
        width: 95%;
        margin:0 auto;
        .el-pagination{
            margin:10px 30px;
        }
    }
}
</style>