<template>
    <div class="title">发送后将停止向您推送面试者消息</div>
    <div class="container">
        <div class="header">
            <div class="selector">
                <span>当前岗位</span>
                <el-select v-model="post">
                    <el-option 
                    v-for="item in postList" 
                    :key='item.name' 
                    :label="item.name" 
                    :value="item.name"></el-option>
                </el-select>
            </div>
            
            <el-input placeholder="请输入想搜索的内容"></el-input>
        </div>
        <div class="content">
            <el-table :data="interviewerList"  border style="width: 80%">
                <el-table-column align="center" prop="id" label="序号" />
                <el-table-column align="center" prop="name" label="姓名" />
                <el-table-column  align="center" label="操作" class="operations" >
                    <template #default="scope">
                        <a @click="changeInterviewer(scope.row.id)">发送</a>
                    </template>
                   
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>
<script setup lang="ts">
import { reactive, ref } from 'vue';
import { useRoute } from 'vue-router';

const post = ref('')
const route = useRoute()
console.log(route.query);
const postList = reactive([
    { name: '前端' },
    { name: '后端' },
    { name: '产品' },
    { name: '运营' }
])
const interviewerList = reactive([
    {
        id: 1,
        name: '张可豪',
    },
    {
        id: 2,
        name: '杜康'
    }
])
function changeInterviewer(id: number){
    console.log(id);
}
</script>
<style lang="less" scoped>
.title{
    margin-top: 15vh;
    text-align: center;
    color:dodgerblue;
}
.container{
    margin:20px auto;
    width: 80vw;
    min-height: 85vh;
    background-color:gainsboro;
    .header{
        height: 50px;
        display: flex;
        align-items: center;
        width: 100%;
        border-bottom: 1px solid #000000;
        .selector{
            margin-left: 5vw;
            .el-select{
                width: 10vw;
                .el-input{
                    width: 10vw!important;
                }
            }
        }
        .el-input{
            margin-left: auto;
            margin-right: 5vw;
        }
    }
    .content{
        .el-table{
            margin:50px auto;
        }
        a{
            color:dodgerblue;
            cursor: pointer;
        }
    }
}
</style>