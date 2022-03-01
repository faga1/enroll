<template>
    <div class="title">状态查询</div>
    <div class="search">
        <div class="label">输入投递时留下的手机号</div>
        <el-input v-model="phoneNumber"></el-input>
        <el-button @click="getStatus(phoneNumber)" type="primary">查询</el-button>
        <div class='status' v-if="statusVis">
            <span>当前状态:</span>
            <span style="color: red;margin-left: 10px;">{{statusCode}}</span>
        </div>
    </div>
    
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { searchInterviewee } from '../../commons/request';

const statusVis = ref(false)
const phoneNumber = ref('')
const statusCode = ref('')
const map = new Map([
    [1, '待查看'],
    [2, '已读'],
    [3, '通过'],
    [4, '未通过'],
    [5, '状态异常']
])
async function getStatus(Number: string){
    statusVis.value = true
    const data = await searchInterviewee(Number)
    if (data.code === 1){
        statusCode.value = map.get(data.data) ? map.get(data.data) : '状态异常'
    } else {
        statusCode.value = data.message
    }
}

</script>
<style lang="less" scoped>
.title{
    font-size: 30px;
    font-weight: 600;
    text-align: center;
}
.search{
    width:50vw;
    margin:100px auto;
    
    .label{
        text-align: center;
    }
    .el-input{
        margin:20px auto;
        display: block;
    }
    .el-button{
        display: block;
        margin: 20px auto;
        width:150px;
        height: 40px;
    }
    .status{
        margin-top:150px;
        text-align: center;
        font-weight: 600;
    }
}
@media (min-width:0px){
        .label{font-size:12px;}
        
    }
    @media (min-width: 320px){
        .label{font-size:16px;}
    }
    
    @media (min-width: 360px){
        .label{font-size:18px;}
    }
    @media (min-width: 380px){
        .label{font-size:20px;}
    }
    @media (max-width: 450px){
        .search{width:90vw}
        .el-input{
            width:80%
        }
    }
    @media (min-width: 550px){
        .label{font-size:25px;}
        .el-input{
            width:300px;
        }
    }
</style>