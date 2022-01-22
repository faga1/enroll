<template>
    <Container>
        <template #header>
            <el-button type='primary'>添加项目</el-button>
            <div>
                <span>筛选</span>
                <ProjectSelector init="2021秋招(当前)" style="width:200px"></ProjectSelector>
            </div>
            <el-input placeholder="输入搜索内容" style="width:200px"></el-input>
        </template>
        <template #content>
            <el-table :data="projectData" border>
                <el-table-column type="index" label="序号" width="100px"></el-table-column>
                <el-table-column prop="name" label="项目名称"></el-table-column>
                <el-table-column prop="count" label="收到简历数"></el-table-column>
                <el-table-column prop="pass" label="已通过"></el-table-column>
                <el-table-column prop="fail" label="未通过"></el-table-column>
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
import ProjectSelector from '../../components/projectSelector.vue'

const projectData = reactive([
    { name: '2021秋招', count: 20, pass: 15, fail: 5 },
    { name: '2021春招', count: 20, pass: 15, fail: 5 },
])
</script>
<style lang="less" scoped>
</style>