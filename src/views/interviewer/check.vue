<template>
    <div class="container">
        <div class="header">
            <el-input placeholder="请输入要搜索的内容"></el-input>
            <el-select v-model="mode" placeholder="未读" >
                <el-option label="未读" value="未读"></el-option>
                <el-option label="已读" value="已读"></el-option>
                <el-option label="未提交面评" value="未提交面评"></el-option>
                <el-option label="已提交面评" value="已提交面评"></el-option>
            </el-select>
        </div>
        <div class="userList" >
            <div class="userItem" v-for="item in userList" :key="item.id">
                <div class="itemInfo">
                    <div>{{item.name}}</div>
                    <div>{{item.grade}}</div>
                </div>
                <div class="itemTools">
                    <router-link :to="{ path:'/change', query: { id: item.id }}">
                        更换面试官
                    </router-link>
                    <div @click="()=>{item.visible=!item.visible}">
                        {{item.visible?'收起简历':'查看简历'}}
                    </div>
                </div>
                <div class="experience" v-show="item.visible">
                    <el-input type="textarea" v-model="item.experience" :rows="10"></el-input>
                    <div @click="read(item.id)">已读</div>
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
    import { onMounted, reactive, ref } from 'vue';
    import { getResumeList } from '@/commons/request/interviewer';

    const mode = ref('')
    const userList = ref()
    onMounted(() => {
        getResumeList(1, 1).then((val) => {
            userList.value = val.data.records
        })
    })
    function read(id: number):void{
        console.log(id);
    }
    function pageChange(page:any){
        console.log(page);
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
        width: 700px;
        min-height: 100vh;
        padding-top: 20vh;
        margin:0 auto;
        .userItem{
            position: relative;
            background-color:gainsboro;
            padding:30px 0;
            .itemInfo{
                display: flex;
                font-size: 25px;
                div{
                    margin-left: 60px;
                }
            }
            .itemTools{
                display: flex;
                position: absolute;
                top:30px;
                right: 0;
                color:dodgerblue;
                font-size: 20px;
                a{
                    color:dodgerblue;
                    margin-right: 20px;
                }
                div{
                    cursor: pointer;
                    margin-right: 20px;
                }
            }
            .experience{
                width: 100%;
                div{
                    color:dodgerblue;
                    text-align: center;
                    cursor: pointer;
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
            margin-top: 20px;
            margin-left:50%;
            transform: translateX(-50%);
        }
    }
    
</style>