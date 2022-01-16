<template>
    <div class="header">
        <router-link to="/user/search">面试进度查询</router-link>
        <router-link to="/user/delivery">岗位投递</router-link>
    </div>
    <router-view/>
</template>
<script setup lang="ts">

</script>
<style lang="less" scoped>
.header{
    display: flex;
    flex-direction: row-reverse;
    width:100%;
    height: 50px;
    line-height: 50px;
    background-color:whitesmoke;
    border: 1px solid #ccc;
    a{
        text-decoration: none;
        color: #000000;
        font-size: 25px;
        font-weight: 600;
        margin-right: 30px;
    }
}
</style>