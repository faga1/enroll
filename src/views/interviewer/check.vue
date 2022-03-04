<template>
    <div class="container">
        <div class="header">
            <el-select v-model="mode" @change="selStation" >
                <el-option label="未读" :value="1"></el-option>
                <el-option label="已读" :value="2"></el-option>
                <el-option label="已处理" :value="3"></el-option>
            </el-select>
        </div>
        <div class="userList" >
            <div class="userItem" v-for="item in userList" :key="item.resumeId">
                <div class="show">
                    <div class="itemInfo">
                    <div>{{item.name}}</div>
                    <div>{{item.grade}}</div>
                    </div>
                    <div class="itemTools">
                        <router-link :to="{ path:'/change', query: { id: item.resumeId, station: item.station }}">
                            更换面试官
                        </router-link>
                        <div @click="()=>{item.visible=!item.visible}">
                            {{item.visible?'收起简历':'查看简历'}}
                        </div>
                    </div>
                </div>
                <div class="experience" v-show="item.visible">
                    <el-input type="textarea" v-model="item.practice" :rows="10"></el-input>
                    <div 
                    @click="read(item.resumeId)" 
                    :style="{
                        color:mode===1?'dodgerblue':'#ccc',
                        cursor:mode===1?'pointer':'auto'
                    }">已读</div>
                </div>
            </div>
        </div>
        <el-pagination 
            layout="prev, pager, next" 
            :total="50" 
            @current-change="pageChange"></el-pagination>
    </div>
</template>
<script setup lang="ts">
    import { onMounted, ref } from 'vue';
    import { getResume, readResume } from '@/commons/request/interviewer';
    import { useRouter } from 'vue-router';

    const router = useRouter()
    const mode = ref<number>(1)
    const userList = ref([])
    const current = ref<number>(1)
    const size = ref<number>(5)
    const total = ref<number>(5)
    function getResumeList(page:number = current.value, station = mode.value){
        getResume(page, size.value, station).then((val) => {
            userList.value = val.data.records
            total.value = val.data.total
        })
    }
    onMounted(() => {
        getResumeList()
    })
    function read(id: string):void{
        if (mode.value === 1) readResume(id)
    }
    function pageChange(page:number){
        current.value = page;
        getResumeList(page)
    }
    function selStation(val:number){
        mode.value = val
        getResumeList(undefined, val) 
    }
</script>
<style lang="less" scoped>
    .header{
        height: 50px;
        .el-select{
            margin-right: 100px;
            float: right;
        }
        .el-input{
            float: right;
            width: 200px;
        }
    }
    .container{
        width:80%;
        min-height: 100vh;
        padding-top: 20vh;
        margin:0 auto;
        .userItem{
            background-color:gainsboro;
            padding:20px;
            margin-bottom: 50px;
            .show{
                display: flex;
                .itemInfo{
                    display: flex;
                    div{
                        margin-right: 30px;
                    }
                }
                .itemTools{
                    display: flex;
                    color:dodgerblue;
                    margin-left:auto;
                    a{
                        color:dodgerblue;
                        margin-right: 20px;
                    }
                    div{
                        cursor: pointer;
                    }
                }
            }
            
            .experience{
                width: 100%;
                div{
                    text-align: center;
                    margin-top: 20px;
                }
                .el-textarea{
                    display: block;
                    width: 300px;
                    margin:40px auto 0;
                }
            }
        }
        .el-pagination{
            margin:20px auto;
            width:240px
        }
    }
    @media (min-width:0px){
        .userItem{font-size:12px;}
    }
    @media (min-width: 320px){
        .userItem{font-size:12px;}
    }
    @media (min-width: 340px){
        .userItem{font-size:13px;}
    }
    @media (min-width: 360px){
        .userItem{font-size:14px;}
    }
    @media (min-width: 380px){
        .userItem{font-size:15px;}
    }
    @media (min-width: 460px){
        .userItem{font-size:20px;}
    }
    @media (min-width: 535px){
        .userItem{font-size:25px;}
    }
    @media (min-width: 800px){
        .container{width:600px}
    }
</style>