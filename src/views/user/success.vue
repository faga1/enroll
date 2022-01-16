<template>
    <div class="title">提交成功</div>
    <div class="text">请等待面试官联系</div>
    <el-button @click="()=>router.push('/user/delivery')">返回岗位投递页面</el-button>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

</script>
<style lang="less" scoped>
    div{
        text-align: center;
    }
    .title{
        margin: 200px 0 100px; 
        font-size: 30px;
    }
    .text{
        font-size: 28px;
    }
    .el-button{
        display: block;
        margin: 100px auto;
    }
</style>