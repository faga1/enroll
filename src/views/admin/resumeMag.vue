<template>
    <el-row>
        <el-col :span="3">筛选条件</el-col>
        <el-col :span='5'>
            <ProjectSelector init="2021秋招(当前)"></ProjectSelector>
        </el-col>
        <el-col :span="3" style="margin:0 40px">
            <PostSelector init="前端" @changePost="changePost"></PostSelector>
        </el-col>
        <el-col :span="3"><el-select></el-select></el-col>
    </el-row>
    <Container>
        <template #header>
            <el-input placeholder="输入搜索内容"></el-input>
        </template>
        <template #content>
            <el-table :data="resumeList" border>
                <el-table-column type="index" label="序号"></el-table-column>
                <el-table-column prop="time" label="投递时间"></el-table-column>
                <el-table-column prop="name" label="姓名"></el-table-column>
                <el-table-column prop="interviewer" label="面试官"></el-table-column>
                <el-table-column label="操作" width="200px">
                    <template #default="scope">
                        <a @click="showResume(scope.$index)">查看简历</a>
                        <a @click="showInterview(scope.$index)">提交面评</a>
                    </template>
                </el-table-column>
                <el-table-column prop="state" label="状态"></el-table-column>
            </el-table>
        </template>
        <template #footer>
            <el-pagination layout="prev, pager, next" :total="50"></el-pagination>
        </template>
    </Container>
    <el-dialog 
        v-model="resumeVis"
        title="查看简历"
    >
        <div class="userInfo">姓名/年级/专业</div>
        <el-input type="textarea" :rows="10" v-model="resumeList[current].explain"></el-input>
    </el-dialog>
    <el-dialog 
        v-model="interviewVis"
        title="提交面评">
        <el-input type="textarea" :rows="10"></el-input>
        <template #footer>
            <el-button>取消</el-button>
            <el-button type="primary" @click="sendInterview">提交</el-button>
        </template>
    </el-dialog>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue';
import PostSelector from '../../components/postSelector.vue'
import ProjectSelector from '../../components/projectSelector.vue'
import Container from '../../components/container.vue'

const current = ref(0)
const interviewVis = ref(false)
const resumeVis = ref(false)
const resumeList = reactive([
    { time: '2021.2.8', name: 'lzc', interviewer: 'cyk', state: '等待查看', id: 1, explain: '有过经验' }
])
function changePost(e:string){
    console.log(e);
}
function showResume(index: number){
    resumeVis.value = true
    current.value = index
}
function showInterview(index: number){
    interviewVis.value = true
    console.log(index);
    current.value = index
}
function sendInterview(id: number){
    console.log(id);
}
</script>
<style lang="less" scoped>
a{
    color:dodgerblue;
    cursor: pointer;
    margin-right: 20px;
}

.el-input{
    width:200px;
    margin-left:auto;
}
.el-dialog{
    .userInfo{
        text-align: center;
        font-size: 16px;
        margin: 10px;
    }
}
</style>