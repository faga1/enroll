<template>
    <div class="title">面评填写</div>
    <div class="userInfo">姓名/年级/专业</div>
    <el-input type="textarea" 
    :autosize="{ minRows: 10, maxRows: 15 }" 
    resize="none" 
    v-model="evaluation"></el-input>
    <el-button type="primary" @click="send(true)">通过</el-button>
    <el-button type="danger" @click="send(false)">不通过</el-button>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { ElMessage } from 'element-plus';
import { sendInterviewee } from '../../commons/request/index';

const route = useRoute()
const evaluation = ref('')
async function send(isPass:boolean){
    const data = await sendInterviewee(evaluation.value, isPass, route.query.id)
    if (data.code === 1){
        ElMessage.success('提交成功')
    }
}
</script>
<style lang="less" scoped>
    .title{
        font-size: 30px;
        text-align: center;
    }
    .userInfo{
        text-align: center;
    }
    .el-textarea{
        width: 300px;
        display: block;
        margin:0 auto;
    }
    .el-button{
        display: block;
        margin:20px auto;
    }
</style>