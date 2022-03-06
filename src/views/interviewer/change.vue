<template>
    <div class="title">发送后将停止向您推送面试者消息</div>
    <Container>
        <template #header>
            <div>
                <span>当前岗位</span>
                <el-select v-model="post" @change="changeStation">
                    <el-option 
                    v-for="item in postList" 
                    :key='item.name' 
                    :label="item.name" 
                    :value="item.name"></el-option>
                </el-select>
            </div>
            <div>
                <span>是否接收</span>
                <el-select v-model="state" @change="changeState">
                    <el-option label="全部" :value="0"></el-option>
                    <el-option label="接收" :value="1"></el-option>
                    <el-option label="不接收" :value="2"></el-option>
                </el-select>
            </div>
            
        </template>
        <template #content>
            <el-table :data="interviewerList"  border >
                <el-table-column align="center" type="index" label="序号" />
                <el-table-column align="center" prop="name" label="姓名" />
                <el-table-column  align="center" label="操作" class="operations" >
                    <template #default="scope">
                        <span
                        @click="send(scope.row.phoneNumber)" 
                        style="color:dodgerblue;cursor: pointer;">发送</span>
                    </template>
                   
                </el-table-column>
            </el-table>
        </template>
        <template #footer>
            <el-pagination 
            layout="prev, pager, next" 
            :total="total" 
            :page-size="size" 
            @current-change="pageChange"
            ></el-pagination>
        </template>
    </Container>
</template>
<script setup lang="ts">
import { ElMessage } from 'element-plus';
import { reactive, ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { getInterviewer, changeInterviewer } from '../../commons/request/interviewer'
import Container from '../../components/container.vue'

const post = ref<string>('前端')
const state = ref(0)
const route = useRoute()
const current = ref(1)
const total = ref(5)
const size = ref(5)
const postList = reactive([
    { name: '前端' },
    { name: '后端' },
    { name: '产品' },
    { name: '运营' }
])
const interviewerList = ref([])
function getInterviewerList(page = current.value, station = post.value, status = state.value){
    getInterviewer(page, size.value, station, status).then((val) => {
        if (val.code === 1){
            interviewerList.value = val.data.records
            total.value = val.data.total
        }
    })
}
onMounted(() => {
    if (typeof route.query.station === 'string'){
        post.value = route.query.station 
    }
    getInterviewerList()
})
function send(phoneNumber: string){
    if (typeof route.query.id === 'string'){
        changeInterviewer(route.query.id, phoneNumber)
    }
}
function pageChange(page:number){
    current.value = page;
    getInterviewerList(page)
}
function changeStation(val:string){
    post.value = val
    getInterviewerList(undefined, val)
}
function changeState(val:number){
    state.value = val
    getInterviewerList(undefined, undefined, val)
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
    .el-select{
        width:50%
    }
}
    @media (min-width:0px){
        .title{font-size:15px;}
    }
    @media (min-width: 280px){
        .title{font-size:15px;}
    }
    @media (min-width: 340px){
        .title{font-size:17px;}
    }
    @media (min-width: 360px){
        .title{font-size:18px;}
    }
    @media (min-width: 380px){
        .title{font-size:20px;}
    }
    @media (min-width: 460px){
        .title{font-size:25px;}
    }
    @media (min-width: 535px){
        .title{font-size:30px;}
    }
</style>