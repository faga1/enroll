<template>
    <div class="title">发送后将停止向您推送面试者消息</div>
    <div class="container">
        <el-select v-model="post">
            <el-option 
            v-for="item in postList" 
            :key='item.name' 
            :label="item.name" 
            :value="item.name"></el-option>
        </el-select>
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
</script>
<style lang="less" scoped>
.title{
    margin-top: 15vh;
    text-align: center;
    color:dodgerblue;
}
.container{
    min-height: 85vh;
}
</style>