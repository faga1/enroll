<template>
    <Container>
        <template #header>
            <el-button type="primary">添加岗位</el-button>
            <el-input style="width:200px" placeholder="请输入搜索内容"></el-input>
        </template>
        <template #content>
            <el-table :data="templateList" border>
                <el-table-column type="index" label="序号" width="100px"></el-table-column>
                <el-table-column prop="name" label="岗位" width="100px"></el-table-column>
                <el-table-column prop="require" label="岗位要求"></el-table-column>
                <el-table-column label="操作" >
                    <template #default="scope">
                        <a @click="edit(scope.$index)">编辑</a>
                        <a @click="moveUp(scope.$index)">上移</a>
                        <a @click="moveDown(scope.$index)">下移</a>
                        <a @click="del(scope.$index)">删除</a>
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
import { reactive } from 'vue';
import Container from '../../components/container.vue'

const templateList = reactive([
    { name: '产品', require: '1.有独立思考能力' }
])
function edit(index:number){
    console.log(index);
}
function moveUp(index:number){
    console.log(index)
}
function moveDown(index:number){
    console.log(index)
}
function del(index:number){
    console.log(index)
}
</script>
<style lang="less" scoped>
a{
    color:dodgerblue;
    margin-right: 10px;
}
th{
    text-align: center;
}

</style>