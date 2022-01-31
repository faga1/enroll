<template>
    <div class="title">发送后将停止向您推送面试者消息</div>
    <Container>
        <template #header>
            <div class="selector">
                <div>当前岗位</div>
                <el-select v-model="post">
                    <el-option 
                    v-for="item in postList" 
                    :key='item.name' 
                    :label="item.name" 
                    :value="item.name"></el-option>
                </el-select>
            </div>
            <el-input placeholder="输入搜索内容"></el-input>
        </template>
        <template #content>
            <el-table :data="interviewerList"  border >
                <el-table-column align="center" prop="id" label="序号" />
                <el-table-column align="center" prop="name" label="姓名" />
                <el-table-column  align="center" label="操作" class="operations" >
                    <template #default="scope">
                        <span
                        @click="changeInterviewer(scope.row.id)" 
                        style="color:dodgerblue;cursor: pointer;">发送</span>
                    </template>
                   
                </el-table-column>
            </el-table>
        </template>
        <template #footer>
            <el-pagination layout="prev, pager, next" :total="50"></el-pagination>
        </template>
    </Container>
</template>
<script setup lang="ts">
import { reactive, ref } from 'vue';
import { useRoute } from 'vue-router';
import Container from '../../components/container.vue'

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
.header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding:0;
    .selector{
        display: flex;
        align-items: center;
    }
    .el-input{
        width:200px
    }
}
    
</style>