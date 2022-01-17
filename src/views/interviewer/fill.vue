<template>
    <div class="title">面评填写</div>
    <div class="userInfo">姓名/年级/专业</div>
    <el-input type="textarea"></el-input>
    <el-button type="primary">通过</el-button>
    <el-button type="danger">不通过</el-button>
</template>
<script setup lang="ts">
</script>
<style lang="less" scoped>
    .title{
        font-size: 30px;
        text-align: center;
    }
    .userInfo{
        text-align: center;
    }
    .el-button{
        display: block;
        margin:20px auto;
    }
</style>