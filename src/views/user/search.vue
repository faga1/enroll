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
import { searchInterviewee } from '@/commons/request';
import { ref } from 'vue';

const statusVis = ref(false)
const phoneNumber = ref('')
const statusCode = ref('')
async function getStatus(Number: string){
    statusVis.value = true
    const data = await searchInterviewee(Number)
    if (data.code === 1){
        statusCode.value = data.data
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
        font-size: 25px;
    }
    .el-input{
        width: 400px;
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
        font-weight: 600;
    }
}

</style>