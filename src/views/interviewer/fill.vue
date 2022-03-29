<template>
    <div class="title">面评填写</div>
    <div class="userInfo">{{userInfo.name}}/{{userInfo.grade}}/{{userInfo.major}}</div>
    <el-input type="textarea" 
    :autosize="{ minRows: 10, maxRows: 15 }" 
    resize="none" 
    v-model="evaluation"></el-input>
    <el-button type="primary" @click="send(true)">通过</el-button>
    <el-button type="danger" @click="send(false)">不通过</el-button>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { ElMessage } from 'element-plus';
import { sendInterviewee, getResumeInfo } from '../../commons/request/interviewer';

const route = useRoute()
const userInfo = ref()
onMounted(() => {
    if (typeof route.query.resumeId === 'string'){
        getResumeInfo(route.query.resumeId).then((val) => {
            if (val.code === 1){
                userInfo.value = val.data;
            }
        })
    }
})
const evaluation = ref('')
async function send(isPass:boolean){
    if (typeof route.query.resumeId !== 'string') return
    const data = await sendInterviewee(evaluation.value, isPass, route.query.resumeId)
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